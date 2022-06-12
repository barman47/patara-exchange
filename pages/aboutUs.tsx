import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from 'components/layout';
import { Avatar, Box, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Binoculars, BullseyeArrow } from 'mdi-material-ui';

import { TRANSITION } from 'src/utils/constants';

import about from 'src/assets/img/about.png';
import avatar from 'src/assets/img/avatar.jpg';
import img1 from 'src/assets/img/about1.png';
import img2 from 'src/assets/img/about2.png';
import img3 from 'src/assets/img/about3.png';
import visionImage from 'src/assets/img/vision.png';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(13, 15, 5, 15),

        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(13, 2, 2, 2),
        }
    },

    header: {
        color: theme.palette.primary.main,
        fontWeight: 700,
        textAlign: 'center',

        [theme.breakpoints.down('md')]: {
            fontSize: theme.spacing(4)
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(2)
        }
    },

    cards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme.spacing(5),
        margin: theme.spacing(10, 0),

        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(2)
        }
    },

    card: {
        transition:TRANSITION,
        
        // '&:hover': {
        //     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' 
        // }
    },

    whoContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',

        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            gridTemplateColumns: '1fr',
        }
    },

    whoImage: {
        width: '60%'
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
        margin: theme.spacing(5, 0),
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(4)
        }
    },

    teamHeader: {
        fontWeight: 700,
        margin: theme.spacing(5, 0),
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(4)
        }
    },

    icon: {
        color: theme.palette.primary.main,
        fontSize: theme.spacing(5)
    },

    vision: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: theme.spacing(15),
        alignItems: 'center',
        marginTop: theme.spacing(10),

        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            gridTemplateColumns: '1fr',
            gap: theme.spacing(5),
        }
    },

    visionImage: {

    },

    visionContent: {
        '& div:first-child': {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: theme.spacing(5),

            [theme.breakpoints.down('sm')]: {
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: theme.spacing(1),
            },

            '& h4': {
                color: theme.palette.primary.main,

                [theme.breakpoints.down('sm')]: {
                    marginRight: theme.spacing(2),
                    fontSize: theme.spacing(4)
                }
            }
        }
    },

    mission: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: theme.spacing(15),
        alignItems: 'center',
        marginTop: theme.spacing(10),

        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            gridTemplateColumns: '1fr',
            gap: theme.spacing(5),
        }
    },

    missionImage: {},

    missionContent: {
        '& div:first-child': {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: theme.spacing(5),

            [theme.breakpoints.down('sm')]: {
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: theme.spacing(1),
            },

            '& h4': {
                color: theme.palette.primary.main,

                [theme.breakpoints.down('sm')]: {
                    marginRight: theme.spacing(2),
                    fontSize: theme.spacing(4)
                }
            }
        }
    },

    team: {
        borderRadius: '50%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr'
        }
    },

    avatar: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        rowGap: theme.spacing(1),
        justifyItems: 'center',

        '& h6': {
            fontWeight: 700,
        },

        '& p': {
            fontWeight: 300,
        }
    },

    image: {
        height: 'initial',
        width: 'initial',
        borderRadius: '50%'
    }
}));

interface Classes {
    root: string;
    header: string;
    cards: string;
    card: string;
    secondCard: string;
    whoHeader: string;
    teamHeader: string;
    whoContainer: string;
    whoImage: string;
    icon: string;
    vision: string;
    visionImage: string;
    visionContent: string;
    mission: string;
    missionImage: string;
    missionContent: string;
    team: string;
    avatar: string;
    image: string;
}

const AboutUs: NextPage = (): JSX.Element => {
    const classes:Classes = useStyles();

	return (
		<Layout title="About Us">
			<Box component="section" className={classes.root}>
                <Typography variant="h4" className={classes.header}>Everything you want to know about our people, principles and mission.</Typography>
                <Box component="section" className={classes.cards}>
                    <Box component="div" className={classes.card}>
                        <Image 
                            src={img1}
                            alt="About Patara Exchange"
                        />
                    </Box>
                    <Box component="div" className={classes.secondCard}>
                        <Image 
                            src={img2}
                            alt="About Patara Exchange"
                        />
                    </Box>
                    <Box component="div" className={classes.card}>
                        <Image 
                            src={img3}
                            alt="About Patara Exchange"
                        />
                    </Box>
                </Box>
                <Box component="section" className={classes.whoContainer}>
                    <Box component="div" className={classes.whoImage}>
                        <Image 
                            src={about}
                            alt="About Patara Exchange"
                        />
                    </Box>
                    <Box>
                        <Typography variant="h4" color="primary" className={classes.whoHeader}>Who we are?</Typography>
                        <Typography variant="body1" component="p">We connect cryptocurrency traders with a wide a range of global financial markets through one single account in a safe, easy and secure environment</Typography>
                    </Box>
                </Box>
                <Box component="div" className={classes.vision}>
                    <Box component="div" className={classes.visionContent}>
                        <Box component="div">
                            <Typography variant="h4">Vision</Typography>
                            <Binoculars className={classes.icon} />
                        </Box>
                        <Typography variant="h6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem tenetur tempore consectetur harum totam est. Vel, a repellat sed maxime rem, cumque beatae iure praesentium eum explicabo adipisci eligendi eius.</Typography>
                    </Box>
                    <Box className={classes.visionImage}>
                        <Image 
                            src={visionImage}
                            alt="Patara Exchange Vision"
                        />
                    </Box>
                </Box>
                <Box component="div" className={classes.mission}>
                    <Box className={classes.missionImage}>
                        <Image 
                            src={visionImage}
                            alt="Patara Exchange Mission"
                        />
                    </Box>
                    <Box component="div" className={classes.missionContent}>
                        <Box component="div">
                            <Typography variant="h4">Mission</Typography>
                            <BullseyeArrow className={classes.icon} />
                        </Box>
                        <Typography variant="h6">Our Mission is to provide a borderless and trustless online payment platform where users can send and receive crypto and fiat payments across borders without any restrictions.</Typography>
                    </Box>
                </Box>
                {/* <Typography variant="h4" color="primary" className={classes.teamHeader}>Meet our Team</Typography>
                <Box component="section" className={classes.team}>
                    <Box className={classes.avatar}>
                        <Avatar
                            src={avatar.src}
                            alt="Patara Exchange Mission"
                            sx={{ width: 150, height: 150 }}
                        />
                        <Typography variant="h6" color="primary">Austine Theory</Typography>
                        <Typography variant="body2" component="p">CEO</Typography>
                    </Box>
                    <Box className={classes.avatar}>
                        <Avatar
                            src={avatar.src}
                            alt="Patara Exchange Mission"
                            sx={{ width: 150, height: 150 }}
                        />
                        <Typography variant="h6" color="primary">Austine Theory</Typography>
                        <Typography variant="body2" component="p">CEO</Typography>
                    </Box>
                    <Box className={classes.avatar}>
                        <Avatar
                            src={avatar.src}
                            alt="Patara Exchange Mission"
                            sx={{ width: 150, height: 150 }}
                        />
                        <Typography variant="h6" color="primary">Austine Theory</Typography>
                        <Typography variant="body2" component="p">CEO</Typography>
                    </Box>
                    <Box className={classes.avatar}>
                        <Avatar
                            src={avatar.src}
                            alt="Patara Exchange Mission"
                            sx={{ width: 150, height: 150 }}
                        />
                        <Typography variant="h6" color="primary">Austine Theory</Typography>
                        <Typography variant="body2" component="p">CEO</Typography>
                    </Box>
                </Box> */}
            </Box>
		</Layout>
	)
};

export default AboutUs;