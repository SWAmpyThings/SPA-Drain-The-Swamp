import co2 from './co2.svg';
import ConsoleItem from './ConsoleItem';
import { convertedSummaryData } from '../../atoms/SummaryAtom';
import trees from './trees.svg';
import warming from './warming.svg';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useRecoilValue } from 'recoil';

export const Console = props => {
    const summaryData = useRecoilValue(convertedSummaryData);

    return (
        <Grid container sx={{ paddingTop: { xs: '0', sm: '16px' }}} spacing={2}>
            <Grid item sx={{ display: { xs: 'none', sm: 'block' }}} xs={0} sm={3} />
            <Grid item xs={12} sm={2}>
                <ConsoleItem
                    description="saved through paperless boarding"
                    src={trees}
                    value={`${Number(summaryData.treesSaved / 1000).toFixed(1)}k`}
                />
            </Grid>
            <Grid item xs={12} sm={2}>
                <ConsoleItem
                    description="fantastic ideas submitted"
                    src={co2}
                    value={`${Number(summaryData.greenIdeas / 1000).toFixed(1)}k`}
                />
            </Grid>
            <Grid item xs={12} sm={2}>
                <ConsoleItem
                    description=<span>CO<sub>2</sub> kept from the skies</span>
                    src={warming}
                    value={`${Number(summaryData.co2Saved / 1000000).toFixed(0)}mil lb`}
                />
            </Grid>
            <Grid item xs={0} sm={3} />
        </Grid>
    );
};

export default Console;
