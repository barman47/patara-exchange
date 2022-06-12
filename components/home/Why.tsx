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
            <Typography variant="h6">We provide a user friendly platform for cryptocurrency trading that is globally available, secured, and reliable.</Typography>
            <Box component="section" className={classes.reasons}>
                <Box component="div" className={classes.reason}>
                    <CashRemove className={classes.icon} />
                    <Typography variant="h5">No Hidden Fees</Typography>
                    <Typography variant="body1" component="p">We provide a platform that facilitates transparency and accountability while trading</Typography>
                </Box>
                <Box component="div" className={classes.reason}>
                    <Security className={classes.icon} />
                    <Typography variant="h5">Secure &amp; Trusted</Typography>
                    <Typography variant="body1" component="p">Our platform has built in security measures to guarantee users protection</Typography>
                </Box>
                <Box component="div" className={classes.reason}>
                    <GiftOffOutline className={classes.icon} />
                    <Typography variant="h5">Earn Rewards</Typography>
                    <Typography variant="body1" component="p">We provide time framed activities and promotions that enable eligible users earn Rewards for additional gains.</Typography>
                </Box>
                <Box component="div" className={classes.reason}>
                    <ChartBar className={classes.icon} />
                    <Typography variant="h5">Profit in Crypto</Typography>
                    <Typography variant="body1" component="p">This platform provides a means for users to trade and make profits from different cryptocurrencies</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Why;