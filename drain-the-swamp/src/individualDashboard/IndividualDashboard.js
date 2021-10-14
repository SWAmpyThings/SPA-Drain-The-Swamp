import './IndividualDashboard.scss';
import 'react-step-progress-bar/styles.css';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Header from '../shared/SouthwestHeader/index';
import heartTree from './heart-tree.svg';
import { ProgressBar, Step } from 'react-step-progress-bar';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import phonesHeart from './phones-heart.svg';
import { greenPointsState } from '../selectors';
import { useRecoilValue } from 'recoil';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    height: 60,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const GreenRewards = () => {
    const greenPoints = useRecoilValue(greenPointsState);

    return (
        <Box sx={{ width: '100%' }}>
            <div className="green-rewards--title-bar">
                <Typography 
                    variant="h4"
                    align="left"
                    sx={{ fontWeight: 'bold', width: '100%', padding: '5px' }}>
                        Green Rewards
                </Typography>
            </div>
            <div className="green-rewards-points-section">
                <Grid container>
                    <Grid item xs={12} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">
                            Points Available to Spend
                        </Typography>
                        <Typography gutterBottom={true} variant="h5" align="center" sx={{ color: 'green' }}>
                            {greenPoints}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">
                            Points All of 2021
                        </Typography>
                        <Typography gutterBottom={true} variant="h5" align="center" sx={{ color: 'green' }}>
                            {greenPoints}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">
                            Lifetime points
                        </Typography>
                        <Typography gutterBottom={true} variant="h5" align="center" sx={{ color: 'green' }}>
                            {greenPoints}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div>
                {/* Update progress bar with updated values and tooltips */}
                <Typography variant="h5" align="center">
                    Here is how you are helping the environment this year
                </Typography>
                <div className="green-rewards-progress-bar">
                    <ProgressBar
                        percent={67}
                        filledBackground="#008522"
                    >
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title="Badge 1">
                                    <span>1</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title="Badge 2">
                                    <span>2</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title="Badge 5">
                                    <span>5</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title="Badge 25">
                                    <span>25</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title="Badge 50">
                                    <span>30</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                    </ProgressBar>
                </div>
            </div>
            <div className="green-rewards--links">
                <Link className="green-rewards-link" underline="hover" href="#">Spend your Points ></Link>
                <Link underline="hover" href="#">Learn more about Green Rewards ></Link>
            </div>
            <Divider />
            <Box>
                <Typography gutterBottom={true} variant="h5" sx={{ margin: '10px' }}>
                    Green Rewards Activity
                </Typography>
                <Grid container>
                    {/* TODO: map over entries into here */}
                    <Grid item xs={4} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">Date</Typography>
                        <ul className="green-rewards-activity-list">
                            <li className="green-rewards-activity-list--item">
                                <Typography variant="h6">
                                    10/01/21
                                </Typography>
                            </li>
                            <li className="green-rewards-activity-list--item">
                                <Typography variant="h6">
                                    10/01/21
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">Description</Typography>
                        <ul className="green-rewards-activity-list">
                            <li>
                                <Typography variant="h6">
                                    Paperless boarding
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    Traveling light
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">Points</Typography>
                        <ul className="green-rewards-activity-list">
                            <li className="green-rewards-activity-list--item-points">
                                <Typography variant="h6">
                                    +100
                                </Typography>
                            </li>
                            <li className="green-rewards-activity-list--item-points">
                                <Typography variant="h6">
                                    +50
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Link underline="hover" href="#" sx={{ marginLeft: '80%' }}>Activity Page ></Link>
                </Grid>
            </Box>
        </Box>
    );
};

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
                            <Paper sx={{ height: 80, backgroundColor: '#304CB2', display: 'flex', alignItems: 'center'}}>
                            <Typography gutterBottom={true} variant="h4" sx={{ color: '#FFBF27', marginLeft: '2%' }}>
                            {/* Update with user that's logged in */}
                                Hi, User!
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
                                <GreenRewards />
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default IndividualDashboard;