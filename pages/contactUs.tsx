import { Box, Grid, Paper, Typography } from '@mui/material';
import Layout from 'components/layout';
import type { NextPage } from 'next';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { EmailOutline, PhoneInTalkOutline, Whatsapp } from 'mdi-material-ui';

import { sendWhatsappMessage } from 'src/utils/sendWhatsappMessage';

import ContactForm from 'components/common/ContactForm';
// import Toast from 'components/common/Toast';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(13, 15, 5, 15),

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(13, 2, 5, 2),
        },

        '& h3': {
            color: theme.palette.primary.main,
            fontWeight: 700,
            textAlign: 'center',

            [theme.breakpoints.down('md')]: {
                fontSize: theme.spacing(4)
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(2)
            }
        },

        '& h4': {
            margin: theme.spacing(5, 0)
        },

        '& h6': {
            marginTop: theme.spacing(2),
            textAlign: 'center'
        }
    },

    contacts: {
        marginTop: theme.spacing(10),

        '& a': {
            textDecoration: 'none'
        }
    },

    contact: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(5)
    },

    icon: {
        color: theme.palette.primary.main,
        fontSize: theme.spacing(10),
        marginBottom: theme.spacing(3)
    }
}));

interface Classes {
    root: string;
    contacts: string;
    contact: string;
    icon: string;
}

const Contact: NextPage = (): JSX.Element => {
    const classes:Classes = useStyles();

	return (
		<Layout title="Contact Us">
            {/* <Toast 
                msg={errors.msg || ''}
                duration={6000}
                title={toastTitle}
                type="error"
                variant="standard"
                ref={toast}
            /> */}
			<Box component="section" className={classes.root}>
                <Typography variant="h3">We love hearing from you,<br /> so don&apos;t hesitate to reach out!</Typography>
                <Typography variant="h6">Our customer support team is available 24/5 from Sunday 21:00 UTC to Friday 22:00 UTC</Typography>
                <Box component="section" className={classes.contacts}>
                    <Grid container direction="row" spacing={10}>
                        <Grid item xs={12} lg={4}>
                            <Paper component="a" className={classes.contact} elevation={2}>
                                <PhoneInTalkOutline className={classes.icon} />
                                <Typography variant="h6">+2348147233059</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Paper component="a" href="mailto:info@pataraexchange.com" className={classes.contact} elevation={2}>
                                <EmailOutline className={classes.icon} />
                                <Typography variant="h6">info@pataraexchange.com</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Paper className={classes.contact} elevation={2} onClick={sendWhatsappMessage}>
                                <Whatsapp className={classes.icon} />
                                <Typography variant="h6">+2348147233059</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
                <Typography variant="h4" color="primary" align="center">Give us your feedback</Typography>
                <ContactForm />
            </Box>
		</Layout>
	)
};

export default Contact;