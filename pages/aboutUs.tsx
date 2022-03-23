import Image from 'next/image';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import Layout from 'components/layout';
import type { NextPage } from 'next';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { TRANSITION } from 'src/utils/constants';

import about from 'src/assets/img/about.png';
import avatar from 'src/assets/img/avatar.jpg';
import img1 from 'src/assets/img/about1.png';
import img2 from 'src/assets/img/about2.png';
import img3 from 'src/assets/img/about3.png';

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
                fontSize: theme.spacing(2)
            }
        }
    },

    cards: {
        margin: theme.spacing(10, 0)
    },

    card: {
        transition:TRANSITION,
        
        // '&:hover': {
        //     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' 
        // }
    },

    secondCard: {
        marginTop: theme.spacing(5),
        transition:TRANSITION,

        // '&:hover': {
        //     marginTop: 0,
        // }
    },

    whoHeader: {
        fontWeight: 700,
        marginBottom: theme.spacing(2)
    },

    team: {
        borderRadius: '50%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: theme.spacing(5)
    },

    avatar: {

    },

    image: {
        height: 'initial',
        width: 'initial',
        borderRadius: '50%'
    },

    overLay: {
        border: '1px solid red',
    }
}));

interface Classes {
    root: string;
    cards: string;
    card: string;
    secondCard: string;
    whoHeader: string;
    team: string;
    avatar: string;
    overLay: string;
    image: string;
}

const AboutUs: NextPage = (): JSX.Element => {
    const classes:Classes = useStyles();

	return (
		<Layout title="About Us">
			<Box component="section" className={classes.root}>
                <Typography variant="h4">Everything you want to know about our people, principles and mission.</Typography>
                <Grid container direction="row" className={classes.cards}>
                    <Grid item xs={12} lg={4} className={classes.card}>
                        <Image 
                            src={img1}
                            alt="About Patara Exchange"
                        />
                    </Grid>
                    <Grid item xs={12} lg={4} className={classes.secondCard}>
                        <Image 
                            src={img2}
                            alt="About Patara Exchange"
                        />
                    </Grid>
                    <Grid item xs={12} lg={4} className={classes.card}>
                        <Image 
                            src={img3}
                            alt="About Patara Exchange"
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" spacing={5}>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h4" color="primary" className={classes.whoHeader}>Who we are?</Typography>
                        <Typography variant="body1" component="p">We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment</Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Image 
                            src={about}
                            alt="About Patara Exchange"
                        />
                    </Grid>
                </Grid>
                <Typography variant="h4" color="primary" className={classes.whoHeader}>Meet our Team</Typography>
                <Box component="section" className={classes.team}>
                    <Box className={classes.avatar}>
                        {/* <Box component="div" className={classes.image}>
                            <Image 
                                src={avatar}
                                alt="Team"
                            />
                        </Box> */}
                        <Box component="div" className={classes.overLay}></Box>
                    </Box>
                    <Box className={classes.avatar}>
                        {/* <Box component="div" className={classes.image}>
                            <Image 
                                src={avatar}
                                alt="Team"
                            />
                        </Box> */}
                        <Box component="div" className={classes.overLay}></Box>
                    </Box>
                    <Box className={classes.avatar}>
                        {/* <Box component="div" className={classes.image}>
                            <Image 
                                src={avatar}
                                alt="Team"
                            />
                        </Box> */}
                        <Box component="div" className={classes.overLay}></Box>
                    </Box>
                    <Box className={classes.avatar}>
                        {/* <Box component="div" className={classes.image}>
                            <Image 
                                src={avatar}
                                alt="Team"
                            />
                        </Box> */}
                        <Box component="div" className={classes.overLay}></Box>
                    </Box>
                </Box>
            </Box>
		</Layout>
	)
};

export default AboutUs;