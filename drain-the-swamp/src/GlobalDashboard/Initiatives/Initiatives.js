import tree from './planting-tree.jpeg';
import forest from './plane-flying-over-forest.jpeg';
import sunshine from './sunshine-behind-plane.jpeg';
import Grid from '@mui/material/Grid';
import Initiative from './Initiative';
import React from 'react';

export const Initiatives = props => {
    return (
        <Grid container sx={{ marginTop: '64px' }}>
            <Grid item xs={0} sm={3} />
            <Grid item xs={0} sm={2}>
                <Initiative
                    imageAlt="Southwest employees planting trees"
                    imageSource={tree}
                    href="#"
                />
            </Grid>
            <Grid item xs={0} sm={2}>
                <Initiative
                    imageAlt="Southwest plane flying over coastal forest"
                    imageSource={forest}
                    href="#"
                />
            </Grid>
            <Grid item xs={0} sm={2}>
                <Initiative
                    imageAlt="Southwest plane in front of sunrise"
                    imageSource={sunshine}
                    href="#"
                />
            </Grid>
            <Grid item xs={0} sm={3} />
        </Grid>
    );
};

export default Initiatives;
