import { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import clsx from 'clsx';

import { ABOUT_US, CONTACT_US, FAQs } from 'src/routes'
import { COLORS, Route } from 'src/utils/constants';

import HideOnScroll from 'components/layout/HideOnScroll';

import logo from 'src/assets/img/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        border: '1px solid red',
        width: '100vw',
    },

    header: {
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // display: 'grid',
        // gridTemplateColumns: '0.5fr 2fr 0.5fr',
        alignItems: 'center',
        width: '100%'
    },

    logo: {
        border: '5px solid red',
    },

    links: {
        border: '1px solid green',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width: '60%'
    },

    link: {
        color: COLORS.offBlack,
        cursor: 'pointer',
        fontSize: theme.spacing(2),
        fontWeight: 500,
        textDecoration: 'none',
        transition: '0.3s linear all',
        textAlign: 'center',

        '&:hover': {
            color: theme.palette.primary.main
        }
    },

    activeLink: {}
}));

interface Classes {
    root: string;
    header: string;
    logo: string;
    links: string;
    link: string;
    activeLink: string;
}

const Header: FC = (): JSX.Element => {
    const classes: Classes = useStyles();
    const theme = useTheme();
    const { pathname } = useRouter();

    const routes: Array<Route> = [
        { url: '/', text: 'Home' },
        { url: ABOUT_US, text: 'About Us' },
        { url: CONTACT_US, text: 'Contact Us' },
        { url: FAQs, text: 'FAQs' },
    ];

    return (
        <HideOnScroll>
        {/* <HideOnScroll {...props}> */}
            <AppBar elevation={0} className={classes.root} color="transparent">
                <Toolbar>
                    <Box component="header" className={classes.header}>
                        <NextLink href="/" passHref>
                            <Image
                                src={logo} 
                                alt="Patara Exchange Logo" 
                                className={classes.logo} 
                                width={theme.spacing(10)} 
                                height={theme.spacing(10)}
                                // layout="responsive"
                            />
                        </NextLink>
                        <Box component="div" className={classes.links}>
                            {routes.map((route, index) =>(
                                <NextLink key={index} href={route.url} passHref>
                                    <Link className={clsx(classes.link, { [classes.activeLink]: pathname.includes(route.url) })}underline="none">{route.text}</Link>
                                </NextLink>
                            ))}
                        </Box>
                        <NextLink href="/login" passHref>
                            <Button variant="contained">Get Started Now Now Now</Button>
                        </NextLink>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header
