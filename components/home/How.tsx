import { FC } from 'react';
import Image from 'next/image';
import { Box, Step, Stepper, StepContent, StepLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import how from 'src/assets/img/how.svg';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(5),

        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
        },

        '& h4': {
            color: theme.palette.primary.main,
            fontWeight: 600,
            marginBottom: theme.spacing(2)
        }
    }
}));

interface Classes {
    root: string;
}

const How: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    const steps = [
        { label:  'Step 1', description: 'We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment' },
        { label:  'Step 2', description: 'We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment' },
        { label:  'Step 3', description: 'We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment' },
        { label:  'Step 4', description: 'We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment' }
    ];

    return (
        <Box component="section" className={classes.root}>
            <Box>
                <Image src={how} alt="How Patara Exchange Works" />
            </Box>
            <Box>
                <Typography variant="h4">How it works</Typography>
                <Stepper activeStep={4} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={index} expanded={true}>
                            <StepLabel>
                                <Typography variant="h6" color="primary">{step.label}</Typography>
                            </StepLabel>
                            <StepContent>
                                {step.description}
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </Box>
    );
};

export default How;