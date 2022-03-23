import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { COLORS } from 'src/utils/constants';

import users from 'src/assets/img/users.png';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            padding: theme.spacing(5, 2),
        },

        '& h6': {
            color: COLORS.offBlack
        }
    },

    customers: {
        '& h4:first-child': {
            fontWeight: 700,
            marginBottom: theme.spacing(2)
        }
    },

    stats: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: theme.spacing(5),

        '& div:first-child': {
            marginRight: theme.spacing(5)
        }
    }
}));

interface Classes {
    root: string;
    customers: string;
    stats: string;
}

const CustomerBase: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Box component="div" className={classes.customers}>
                <Typography variant="h4" color="primary">Our Customer base is worldwide</Typography>
                <Typography variant="h6">Trade between cryptocurrencies, stablecoins and environmental assets in one easy step.</Typography>
                <Box component="section" className={classes.stats}>
                    <Box component="div">
                        <Typography variant="h3" color="secondary">21M+</Typography>
                        <Typography variant="h6">Cryptocurrency <br />users</Typography>
                    </Box>
                    <Box component="div">
                        <Typography variant="h3" color="secondary">21M+</Typography>
                        <Typography variant="h6">Cryptocurrency <br />users</Typography>
                    </Box>
                </Box>
            </Box>
            <Box component="div">
                <Image
                    src={users}
                    alt="Patara Exchange Users"
                />
            </Box>
        </Box>
    );
};

export default CustomerBase;