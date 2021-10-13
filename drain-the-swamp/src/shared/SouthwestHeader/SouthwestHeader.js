import Grid from '@mui/material/Grid';
import React from 'react';
import SouthwestLogo from '../SouthwestLogo';

export const SouthwestHeader = props => {
    return (
        <Grid container>
            <Grid item xs={0} sm={1} />
            <Grid item xs={12} sm={10}>
                <SouthwestLogo />
            </Grid>
        </Grid>
    );
};

export default SouthwestHeader;
