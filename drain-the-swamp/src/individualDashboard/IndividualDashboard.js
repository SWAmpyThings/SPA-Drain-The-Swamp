import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { greenPointsState } from '../selectors';
import { useRecoilValue } from 'recoil';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  


function IndividualDashboard () {
    const greenPoints = useRecoilValue(greenPointsState);

    return (
        <div>
            
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12}>
                        <Item />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Item />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Item />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Item />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Item>Actual Component</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default IndividualDashboard;