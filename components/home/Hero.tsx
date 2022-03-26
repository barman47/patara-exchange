import { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';

import { COLORS } from 'src/utils/constants';

import heroBottom from 'src/assets/img/hero-bottom.png';
import heroTop from 'src/assets/img/hero-top.png';
import form from 'src/assets/img/trade-form.png';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: 'linear-gradient(252.77deg, #163837 0.72%, #189A92 100%)',
        marginTop: theme.spacing(8),
        maxWidth: '100vw',
        padding: theme.spacing(0, 5),

        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(7),
            padding: theme.spacing(0, 2),
        }
    },

    heroTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: theme.spacing(10)
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    formContainer: {
        width: '35%',

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },

    textContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        rowGap: theme.spacing(5),

        '& h2': {
            color: COLORS.offWhite,
            fontWeight: '600'
        },

        '& h6': {
            color: COLORS.offWhite
        }
    },

    button: {
        color: theme.palette.primary.main,
        width: theme.spacing(28)
    }
}));

interface Classes {
    root: string;
    heroTop: string;
    content: string;
    formContainer: string;
    textContainer: string;
    button: string;
}

const Hero: FC = (): JSX.Element => {
    const classes: Classes = useStyles();
    const theme = useTheme();

    return (
        <Box component="section" className={classes.root}>
            <Box component="div" className={classes.heroTop}>
                <Image
                    src={heroTop}
                    alt="Patara Exchange"
                    width={400}
                    height={110}
                />
            </Box>
            <Box component="div" className={classes.content}>
                <Box component="div" className={classes.textContainer}>
                    <Typography variant="h2" color="primary">Trade your <span style={{ color: theme.palette.primary.light }} >crypto</span><br /> instantly!</Typography>
                    <Typography variant="h6">Trade between cryptocurrencies, stablecoins <br />and environmental assets in one easy step.</Typography>
                    <NextLink href="/login" passHref>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            className={classes.button}
                            disableElevation
                            size="large"
                        >
                            Get Started
                        </Button>
                    </NextLink>
                    <Box component="div">
                        <Image 
                            src={heroBottom}
                            alt="Patara Exchange"
                            width={400}
                            height={150}
                        />
                    </Box>
                </Box>
                <Box component="div" className={classes.formContainer}>
                    <Image 
                        src={form}
                        alt="Patara Exchange"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;