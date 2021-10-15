import ConsoleItems from './ConsoleItems';
import Grid from '@mui/material/Grid';
import LoadingBar from '../../shared/LoadingBar';
import React from 'react';
import { Suspense } from 'react';

export const Console = props => {

    return (
        <Grid container sx={{ paddingTop: { xs: '0', sm: '16px' }}} spacing={2}>
            <Suspense fallback={<LoadingBar />}>
                <ConsoleItems />
            </Suspense>
        </Grid>
    );
};

export default Console;
