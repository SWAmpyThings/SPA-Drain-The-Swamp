import './IndividualDashboard.scss';
import 'react-step-progress-bar/styles.css';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Header from '../shared/SouthwestHeader/index';
import heartTree from './heart-tree.svg';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 30,
    borderRadius: 10,
    [`&.${linearProgressClasses.determinate}`]: {
        borderRadius: 20,
        backgroundColor: '#E7E6E6'
    }
}));

const GreenRewards = () => {
    const greenPoints = useRecoilValue(greenPointsState);

    return (
        <Box sx={{ width: '100%' }}>
            <div className="green-rewards--title-bar">
                <Typography 
                    variant="h4"
                    align="left"
                    sx={{ width: '100%', padding: '5px' }}>
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
            <Typography gutterBottom={true} variant="h2" align="left" sx={{ marginLeft: '5%' }}>
                My Account
            </Typography>
            <Box sx={{ flexGrow: 1, margin: '5%' }}>
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
                        <Paper>
                            <GreenRewards />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default IndividualDashboard;



// <div className="green-rewards-status">
//                 <Typography gutterBottom={true} variant="h6">
//                     Here is what you have earned towards badges
//                 </Typography>
//                 <div>
//                     <Grid container>
//                         <Grid item xs={12} md={10} lg={10}>
//                             <BorderLinearProgress variant="determinate" value={80} />
//                         </Grid>
//                         <Grid item xs={1} md={1} lg={1}>
//                             <img src={heartTree} className="green-rewards--icon" alt="heart tree" />
//                         </Grid>
//                     </Grid>
//                     <Typography gutterBottom={true} variant="h7">
//                         {/* insert points towards eco badge */}
//                         1346 of 1500 for eco-badge
//                     </Typography>
//                 </div>
//                 <div>
//                     <Grid container>
//                         <Grid item xs={12} md={10} lg={10}>
//                             <BorderLinearProgress variant="determinate" value={62} />
//                         </Grid>
//                         <Grid item xs={1} md={1} lg={1}>
//                             <img src={phonesHeart} className="green-rewards--icon" alt="phones heart" />
//                         </Grid>
//                     </Grid>
//                     <Typography gutterBottom={true} variant="h7">
//                         {/* insert points towards boarding badge */}
//                         868 of 1500 for boarding badge
//                     </Typography>
//                 </div>
//             </div>