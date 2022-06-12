import { FormEvent, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import Validator from 'validator';
import emailjs, { init } from 'emailjs-com';
import toast from 'react-hot-toast';

import { COLORS, ErrorObject } from 'src/utils/constants';
import isEmpty from 'src/utils/isEmpty';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: COLORS.offWhite,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2)
        }
    },
    label : {
        fontWeight: 600,
        color: COLORS.grey
    }
}));

interface Classes {
    root: string;
    label: string;
}

export interface ContactData {
    msg?: string;
    email: string;
    message: string;
}


const ContactUs: NextPage = (): JSX.Element => {
    const classes:Classes = useStyles();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<ContactData>({} as ContactData);

    const validateSendEmail = (data: ContactData): ErrorObject<ContactData> => {
        let errors = {} as ContactData;

        data.email = !isEmpty(data.email) ?  data.email : '';
        data.message = !isEmpty(data.message) ?  data.message : '';

        if (!Validator.isEmail(data.email)) {
            errors.email = 'Invalid email address!';
        }
        if (Validator.isEmpty(data.email)) {
            errors.email = 'Email Address is required!';
        }

        if (Validator.isEmpty(data.message)) {
            errors.message = 'message is required!';
        }
        
        return {
            errors,
            isValid: isEmpty(errors)
        } as ErrorObject<ContactData>;
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({} as ContactData);

        const data: ContactData = {
            email,
            message
        };
        
        const { errors, isValid }: ErrorObject<ContactData> = validateSendEmail(data);

        if (!isValid) {
            setErrors({ msg: 'Invalid login data!', ...errors });
            return;
        }
        setLoading(true);

        try {
            init(`${process.env.NEXT_PUBLIC_API_KEY}`);
            const serviceId = `${process.env.NEXT_PUBLIC_SERVICE_ID}`;
            const templateId = `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`;
            await emailjs.send(serviceId, templateId, { email, message, subject: 'Contact Message from pataraexchange.com' });
            toast.success('Message sent successfully!');
            setLoading(false);
            setEmail('');
            setMessage('');
        } catch (err: any) {
            toast.error('Error sending message!');
            console.log(err.response);
        }
    };

	return (
        <>
            <form className={classes.root} onSubmit={onSubmit}>
                <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" component="p" className={classes.label}>Your Email Address</Typography>
                        <TextField 
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@example.com"
                            error={errors.email ? true : false}
                            helperText={errors.email || ''}
                            fullWidth
                            disabled={loading}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" component="p" className={classes.label}>Your inquiry</Typography>
                        <TextField 
                            variant="outlined"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type  something here . . ."
                            error={errors.message ? true : false}
                            helperText={errors.message || ''}
                            fullWidth
                            multiline
                            minRows={3}
                            disabled={loading}
                        />
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" size="large" disabled={loading}>{loading ? 'Sending . . . ': 'Submit'}</Button>
                    </Grid>
                </Grid>
            </form>
        </>
	)
};

export default ContactUs;