import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material';
import Layout from 'components/layout';
import type { NextPage } from 'next';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ChevronUp } from 'mdi-material-ui';

import ContactForm from 'components/common/ContactForm';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(13, 15, 5, 15),

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(13, 2, 5, 2),
        },

        '& h4': {
            color: theme.palette.primary.main,
            fontWeight: 700,
            textAlign: 'center',

            [theme.breakpoints.down('md')]: {
                fontSize: theme.spacing(4)
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(2.5)
            }
        },

        // '& h4': {
        //     margin: theme.spacing(5, 0)
        // },

        // '& h6': {
        //     marginTop: theme.spacing(2),
        //     textAlign: 'center'
        // }
    },

    heading: {
        color: theme.palette.primary.main,
        fontWeight: 700,

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1.8)
        }
    },

    questions: {
        marginTop: theme.spacing(2)
    },

    accordion: {
        // boxShadow: 'none !important',
        marginBottom: theme.spacing(5)
    },

    accordionContent: {},
    summary: {},
    text: {},

    contact: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(5),
        alignItems: 'center',

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
        },

        '& h4': {
            marginBottom: theme.spacing(4)
        }
    }
}));

interface Classes {
    root: string;
    questions: string;
    accordion: string;
    heading: string;
    summary: string;
    accordionContent: string;
    text: string;
    contact: string;
}

const Faqs: NextPage = (): JSX.Element => {
    const classes:Classes = useStyles();

	return (
		<Layout title="Frequently Asked Questions">
			<Box component="section" className={classes.root}>
                <Typography variant="h4" color="primary" align="center">Frequently Asked Questions</Typography>
                <Box component="div" className={classes.questions}>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary className={classes.summary} expandIcon={<ChevronUp />}>
                            <Typography variant="h6" className={classes.heading}>Who can sign up?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionContent}>
                            <Typography className={classes.text}>Anyone human looking for the best rates to swap their crypto for fiat. </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary className={classes.summary} expandIcon={<ChevronUp />}>
                            <Typography variant="h6" className={classes.heading}>I have a business and I want to start accepting crypto payments can you help me?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionContent}>
                            <Typography className={classes.text}>We currently accept crypto payments for over 100 stores/businesses at our registered locations and pay them instantly in cash or to their bank accounts if you would like us to support you accept crypto in your business email us here  info@pataraechange.com</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary className={classes.summary} expandIcon={<ChevronUp />}>
                            <Typography variant="h6" className={classes.heading}>Can we do a face to face transaction i want my crypto paid out to me in cash?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionContent}>
                            <Typography className={classes.text}>Yes we do. Check our contact us page to find out the location nearest to you for cash pickup</Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* <Accordion className={classes.accordion}>
                        <AccordionSummary className={classes.summary} expandIcon={<ChevronUp />}>
                            <Typography variant="h6" className={classes.heading}>What is the rate today?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionContent}>
                            <Typography className={classes.text}>We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment.</Typography>
                        </AccordionDetails>
                    </Accordion> */}
                </Box>
                <Box component="div" className={classes.contact}>
                    <Box component="div">
                        <Typography variant="h4">Still have questions for us?</Typography>
                        <Typography variant="body2" component="p">If you cannot find answer to your question in our FAQ, you can always contact us. We will answer to you shortly!</Typography>
                    </Box>
                    <ContactForm />
                </Box>
            </Box>
		</Layout>
	)
};

export default Faqs;