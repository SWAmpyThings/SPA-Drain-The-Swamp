import co2 from './co2.svg';
import ConsoleItem from './ConsoleItem';
import trees from './trees.svg';
import warming from './warming.svg';
import Grid from '@mui/material/Grid';
import React from 'react';

export const Console = props => {
    return (
        <Grid container sx={{ paddingTop: '16px' }} spacing={2}>
            <Grid item xs={0} sm={3} />
            <Grid item xs={12} sm={2}>
                <ConsoleItem
                    description="saved through paperless boarding"
                    src={trees}
                    value="12k trees"
                />
            </Grid>
            <Grid item xs={12} sm={2}>
                <ConsoleItem
                    description=<span>CO<sub>2</sub> kept from the skies</span>
                    src={co2}
                    value="5.7k lb"
                />
            </Grid>
            <Grid item xs={12} sm={2}>
                <ConsoleItem
                    description="of fuel kept in the earth"
                    src={warming}
                    value="15.2k lb"
                />
            </Grid>
            <Grid item xs={0} sm={3} />
        </Grid>
    );
};

export default Console;
