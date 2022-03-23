import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { CashRemove, ChartBar, GiftOffOutline, Security } from 'mdi-material-ui';

import { COLORS } from 'src/utils/constants';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: COLORS.offWhite,
        padding: theme.spacing(5, 0),

        '& h4:first-child': {
            fontWeight: 700,
            textAlign: 'center'
        },

        '& h6:nth-child(2)': {
            margin: `${theme.spacing(4)} auto`,
            textAlign: 'center',
            width: '60%',

            [theme.breakpoints.down('sm')]: {
                width: '85%',
            }
        }
    },
    
    reasons: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: theme.spacing(5),
        padding: theme.spacing(0, 5),

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr 1fr'
        },

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr'
        }
    },

    reason: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        rowGap: theme.spacing(2),

        '& h5': {
            color: theme.palette.primary.main,
            fontWeight: 800,
        },

        '& p': {
            lineHeight: 2,
        }
    },

    icon: {
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.primary.main,
        fontSize: theme.spacing(10),
        padding: theme.spacing(1)
    }
}));

interface Classes {
    root: string;
    reasons: string;
    reason: string;
    icon: string;
}

const Why: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Typography variant="h4" color="primary">Why trade with us?</Typography>
            <Typography variant="h6">We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment</Typography>
            <Box component="section" className={classes.reasons}>
                <Box component="div" className={classes.reason}>
                    <CashRemove className={classes.icon} />
                    <Typography variant="h5">No Hidden Fees</Typography>
                    <Typography variant="body1" component="p">We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment</Typography>
                </Box>
                <Box component="div" className={classes.reason}>
                    <Security className={classes.icon} />
                    <Typography variant="h5">Secure &amp; Trusted</Typography>
                    <Typography variant="body1" component="p">We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment</Typography>
                </Box>
                <Box component="div" className={classes.reason}>
                    <GiftOffOutline className={classes.icon} />
                    <Typography variant="h5">Earn Rewards</Typography>
                    <Typography variant="body1" component="p">We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment</Typography>
                </Box>
                <Box component="div" className={classes.reason}>
                    <ChartBar className={classes.icon} />
                    <Typography variant="h5">Profit in Crypto</Typography>
                    <Typography variant="body1" component="p">We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Why;