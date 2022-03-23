import { FormEvent, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import Validator from 'validator';

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

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({} as ContactData);

        const user: ContactData = {
            email,
            message
        };
        
        const { errors, isValid }: ErrorObject<ContactData> = validateSendEmail(user);

        if (!isValid) {
            setErrors({ msg: 'Invalid login data!', ...errors });
            return;
        }
    };

	return (
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
                    />
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained" size="large">Submit</Button>
                </Grid>
            </Grid>
        </form>
	)
};

export default ContactUs;