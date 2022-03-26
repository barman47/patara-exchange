import { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { COLORS } from 'src/utils/constants';

import background from 'src/assets/img/footer-background.png';
import logo from 'src/assets/img/footer-logo.png';
import septemStacks from 'src/assets/img/septem-logo.png';
import { React } from 'mdi-material-ui';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },

    footer: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gap: theme.spacing(10),
        padding: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(2),
            gridTemplateColumns: '1fr',
            padding: theme.spacing(3)
        },

        '& section:first-child': {
            justifySelf: 'center'
        }
    },

    rightSide: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',

        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(2),
            gridTemplateColumns: '1fr 1fr',
        },

        '& div': {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: theme.spacing(0.2),

            '& h5:first-child': {
                color: theme.palette.primary.light,
                fontWeight: 600
            }
        }
    },

    link: {
        color: COLORS.offWhite,
        fontWeight: 300
    },

    copyright: {
        color: COLORS.darkGrey,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 5),

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: theme.spacing(0, 3)
        }
    },

    copyrightText: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1.5),
            marginBottom: theme.spacing(2)
        },
    },

    septem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        '& small': {
            marginRight: theme.spacing(1)
        }
    },

    septemLogo: {
        width: theme.spacing(15)
    }
}));

interface Classes {
    root: string;
    footer: string;
    link: string;
    rightSide: string;
    copyright: string;
    copyrightText: string;
    septem: string;
    septemLogo: string;
}

const Footer: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Box component="footer" className={classes.footer}>
                <Box component="section">
                    <Image 
                        src={logo}
                        alt="Patara Exchange Logo"
                    />
                </Box>
                <Box component="section" className={classes.rightSide}>
                    <Box component="div">
                        <Typography variant="h5">About</Typography>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">Who we are?</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">Values</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">Mission</Link>
                        </NextLink>
                    </Box>
                    <Box component="div">
                        <Typography variant="h5">Learn</Typography>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">DeFi</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">Crypto</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">NFT</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">Trading</Link>
                        </NextLink>
                    </Box>
                    <Box component="div">
                        <Typography variant="h5">Help</Typography>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">FAQs</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">Values</Link>
                        </NextLink>
                    </Box>
                    <Box component="div">
                        <Typography variant="h5">Socials</Typography>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">Facebook</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">Twitter</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">LinkedIn</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link className={classes.link} underline="none">Instagram</Link>
                        </NextLink>
                    </Box>
                </Box>
            </Box>
            <Box component="section" className={classes.copyright}>
                <Typography variant="subtitle2" component="small" className={classes.copyrightText}>&copy; Copyright {new Date().getFullYear()}, Patara Exchange - All Rights Reserved</Typography>
                <Box component="div" className={classes.septem}>
                    <Typography variant="subtitle2" component="small">Powered by</Typography>
                    <Box component="div" className={classes.septemLogo}>
                        <a href="https://septemstacks.com" target="_blank" rel="noreferrer">
                            <Image 
                                alt="Septem Stacks"
                                src={septemStacks}
                            />
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;