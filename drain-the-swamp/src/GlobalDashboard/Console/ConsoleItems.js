import co2 from './co2.svg';
import ConsoleItem from './ConsoleItem';
import { convertedSummaryData } from '../../atoms/SummaryAtom';
import Grid from '@mui/material/Grid';
import warming from './warming.svg';
import trees from './trees.svg';
import { useRecoilValue } from 'recoil';

export const ConsoleItems = props => {
    const summaryData = useRecoilValue(convertedSummaryData);

    return (
        <>
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
        </>);
};

export default ConsoleItems;
