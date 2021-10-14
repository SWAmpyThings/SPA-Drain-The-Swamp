import Activities from './Activities';
import Button from '@mui/material/Button';
import Console from './Console';
import Grid from '@mui/material/Grid';
import { Suspense } from 'react';
import Rewards from './Rewards';
import SouthwestHeader from '../shared/SouthwestHeader';
import Splash from './Splash';
import styles from './styles';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

import './GlobalDashboard.scss';

export const GlobalDashboard = props => {
    const history = useHistory();
    const handleIndividualButtonClick = () => {
        history.push('/individual');
    }

    return (
        <div className="global-dashboard">
            <Grid container>
                <Grid item xs={12}>
                    <SouthwestHeader />
                </Grid>
                <Grid item xs={0} sm={3} />
                <Grid sx={{ marginBottom: '64px' }} item xs={12} sm={3}>
                    <h1 className="global-dashboard--header">Green Rewards</h1>
                    <Typography align="right" variant="body1">
                        Every day our customers are contribuing to making Southwest
                        Airlines<sup>®</sup> a greener company.<strong> Thank you </strong>
                        for protecting our environment.
                    </Typography>
                    <Typography align="right" sx={{ color: '#5E7E95', fontWeight: 'bold', marginTop: '8px' }}>
                        Together we can fly into a brighter future.
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                        <Button onClick={handleIndividualButtonClick} sx={styles.individualButton} variant="contained">
                            See your Green Rewards
                        </Button>
                    </div>
                </Grid>
                <Grid item sx={{ display: { xs: 'none', sm: 'block' }}} sm={3}>
                    <Splash />
                </Grid>
                <Grid item xs={0} sm={3} />

                <Grid item xs={12}>
                    <div style={{ backgroundColor: '#f5f5f5', marginLeft: '-16px', paddingLeft: '16px', width: 'calc(100% + 32px)' }}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Console />
                        </Suspense>
                    </div>
                </Grid>

                <Grid item xs={0} sm={3} />
                <Grid sx={{ color: '#304CB2', marginTop: '64px' }}item xs={12} sm={6}>
                    <Typography align="center" sx={{ fontWeight: 'bold' }} variant="h6">
                        Earn Green Rewards Points
                    </Typography>
                </Grid>
                <Grid item xs={0} sm={3} />

                <Grid item xs={0} sm={3} />
                <Grid item xs={12} sm={6}>
                    <Activities />
                </Grid>
                <Grid item xs={0} sm={3} />

                <Grid item xs={0} sm={3} />
                <Grid sx={{ color: '#304CB2', marginTop: '64px' }}item xs={12} sm={6}>
                    <Typography align="center" sx={{ fontWeight: 'bold' }} variant="h6">
                        Spend Green Rewards Points
                    </Typography>
                </Grid>
                <Grid item xs={0} sm={3} />

                <Grid item xs={0} sm={3} />
                <Grid item xs={12} sm={6}>
                    <Rewards />
                </Grid>
                <Grid item xs={0} sm={3} />
            </Grid>
        </div>
    );
};

export default GlobalDashboard
