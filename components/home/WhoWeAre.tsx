import { FC } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import whoWeAre from 'src/assets/img/who-we-are.png';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(15),
        alignItems: 'center',
        padding: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(5),
            gridTemplateColumns: '1fr'
        },

        '& h4:first-child': {
            fontWeight: 700,
            textAlign: 'center'
        }
    }
}));

interface Classes {
    root: string;
}

const WhoWeAre: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Stack spacing={4}>
                <Typography variant="h4" color="primary">Who we are?</Typography>
                <Typography variant="body1" component="p">We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment</Typography>
            </Stack>
            <Image
                src={whoWeAre}
                alt="Patara Exchange"
            />
        </Box>
    );
};

export default WhoWeAre;