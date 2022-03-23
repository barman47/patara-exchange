import { FC } from 'react';
import { Box } from '@mui/material';

import Header from 'components/layout/Header';

interface Props {
    children: React.ReactElement | React.ReactElement[];
    title?: string;
    description?: string;
}

const  Layout: FC<Props> = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Header />
            <Box component="main">
                {children}
            </Box>
        </>
    );
}

export default Layout;