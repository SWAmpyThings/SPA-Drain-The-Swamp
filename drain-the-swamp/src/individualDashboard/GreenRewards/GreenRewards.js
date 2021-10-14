import './GreenRewards.scss';
import 'react-step-progress-bar/styles.css';
import { activitiesQueryState, greenPointsQueryState } from '../../atoms/QueryAtom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ProgressBar, Step } from 'react-step-progress-bar';
import Link from '@mui/material/Link';
import { useRecoilValue } from 'recoil';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const GreenRewards = () => {
    const greenPoints = useRecoilValue(greenPointsQueryState);
    const currentActivities = useRecoilValue(activitiesQueryState);
    const sortedActivities = [...currentActivities].sort((a, b) => b.activityDate - a.activityDate);

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
                            Points Available
                        </Typography>
                        <Typography gutterBottom={true} variant="h5" align="center" sx={{ color: 'green' }}>
                            {greenPoints.totalGreenRewardPointsAvailable}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">
                            Points All of 2021
                        </Typography>
                        <Typography gutterBottom={true} variant="h5" align="center" sx={{ color: 'green' }}>
                            {greenPoints.totalGreenRewardPointsEarned}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">
                            Lifetime points
                        </Typography>
                        <Typography gutterBottom={true} variant="h5" align="center" sx={{ color: 'green' }}>
                            {greenPoints.totalLifetimePoints}
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
                                <Tooltip title="Badge 10">
                                    <span>10</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title="Badge 100">
                                    <span>100</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title="Badge 500">
                                    <span>500</span>
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
                    <Grid item xs={4} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">Date</Typography>
                        <ul className="green-rewards-activity-list">
                            {sortedActivities.slice(0, 4).map((activity, index) => {
                                const date = new Date(activity.activityDate);
                                
                                return (<li className="green-rewards-activity-list--item" key={index}>
                                    <Typography variant="h6">
                                        {date.toLocaleDateString('en-US')}
                                    </Typography>
                                </li>);
                            })}
                        </ul>
                    </Grid>
                    <Grid item xs={4} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">Description</Typography>
                        <ul className="green-rewards-activity-list">
                            {sortedActivities.slice(0, 4).map((activity, index) => (
                                <li key={index}>
                                    <Typography variant="h6">
                                        {activity.activity}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                    <Grid item xs={4} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">Points</Typography>
                        <ul className="green-rewards-activity-list">
                            {sortedActivities.slice(0, 4).map((activity, index) => (
                                <li className="green-rewards-activity-list--item-points" key={index}>
                                    <Typography variant="h6">
                                        +{activity.points}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                    <Link underline="hover" href="#" sx={{ marginLeft: '80%' }}>Activity Page ></Link>
                </Grid>
            </Box>
        </Box>
    );
};

export default GreenRewards;