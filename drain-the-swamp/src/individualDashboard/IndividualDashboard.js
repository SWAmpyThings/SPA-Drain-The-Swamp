import './IndividualDashboard.scss';
import Box from '@mui/material/Box';
import GreenRewards from './GreenRewards/index'
import Grid from '@mui/material/Grid';
import Header from '../shared/SouthwestHeader/index';
import LoadingBar from '../shared/LoadingBar';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Suspense } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    height: 60,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const IndividualDashboard = (props) => {
    return (
        <div>
            <Header />
            <div className="individual-dashboard--container">
                <Typography gutterBottom={true} variant="h3" align="left" sx={{ color: '#FFFFFF', fontWeight: 'bold', marginLeft: '5%', paddingTop: '3%' }}>
                    My Account
                </Typography>
                <Box sx={{ flexGrow: 1, margin: '0 5% 10%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={12}>
                            <Paper 
                                sx={{ 
                                    height: 100, 
                                    backgroundColor: '#304CB2',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center'
                                }}
                            >
                                
                                <Typography variant="h4" sx={{ color: '#FFBF27', marginLeft: '2%' }}>
                                {/* Update with user that's logged in */}
                                    Hi, Smokey!
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#FFFFFF', marginLeft: '2%'}}>
                                    Rapid Rewards #701968280
                                </Typography>
                                
                            </Paper>
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
                            <Paper>
                                <Suspense fallback={<LoadingBar />}> 
                                    <GreenRewards />
                                </Suspense>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default IndividualDashboard;