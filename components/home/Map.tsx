import { FC } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
    
    map: {
        border: 'none',
        height: theme.spacing(50),
        width: '100%',
        padding: 0
    }
}));

interface Classes {
    root: string;
    map: string;
}

const Map: FC = (): JSX.Element => {
    const classes: Classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.486969309683!2d33.26370711524961!3d35.343559280274484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8dec5a34bf157b8c!2zMzXCsDIwJzM2LjgiTiAzM8KwMTUnNTcuMiJF!5e0!3m2!1sen!2sng!4v1655046377514!5m2!1sen!2sng"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={classes.map}
            >
            </iframe>
        </Box>
    );
};

export default Map;