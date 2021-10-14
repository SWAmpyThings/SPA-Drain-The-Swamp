import Activities from './Activities';
import Button from '@mui/material/Button';
import Console from './Console';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SouthwestHeader from '../shared/SouthwestHeader';
import Splash from './Splash';
import styles from './styles';
import Typography from '@mui/material/Typography';

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
                        Airlines a greener company, and we would like to
                        <strong> thank you</strong>.
                    </Typography>
                    <Typography align="right" sx={{ color: '#5E7E95', fontWeight: 'bold', marginTop: '8px' }}>
                        Together we can fly into a brighter future.
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                    <Button onClick={handleIndividualButtonClick} sx={styles.individualButton} variant="contained">See Your Green Rewards</Button>
                    </div>
                </Grid>
                <Grid item sx={{ display: { xs: 'none', sm: 'block' }}} sm={3}>
                    <Splash />
                </Grid>
                <Grid item xs={0} sm={3} />

                <Grid item xs={12}>
                    <div style={{ backgroundColor: '#f5f5f5', marginLeft: '-16px', paddingLeft: '16px', width: 'calc(100% + 32px)' }}>
                        <Console />
                    </div>
                </Grid>

                <Grid item xs={0} sm={3} />
                <Grid sx={{ color: '#304CB2', marginTop: '64px' }}item xs={12} sm={6}>
                    <Typography align="center" sx={{ fontWeight: 'bold' }} variant="h6">Earn Green Reward Points by</Typography>
                </Grid>
                <Grid item xs={0} sm={3} />

                <Grid item xs={0} sm={3} />
                <Grid item xs={12} sm={6}>
                    <Activities />
                </Grid>
                <Grid item xs={0} sm={3} />

                <Grid item xs={0} sm={3} />
                <Grid sx={{ color: '#304CB2', marginTop: '64px' }}item xs={12} sm={6}>
                    <Typography align="center" sx={{ fontWeight: 'bold' }} variant="h6">Spend Green Reward Points on</Typography>
                </Grid>
                <Grid item xs={0} sm={3} />

                <Grid item xs={0} sm={3} />
                <Grid item xs={12} sm={6}>
                    <Activities />
                </Grid>
                <Grid item xs={0} sm={3} />
            </Grid>
        </div>
    );
};

export default GlobalDashboard
