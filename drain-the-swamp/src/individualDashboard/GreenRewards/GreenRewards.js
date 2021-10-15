import './GreenRewards.scss';
import 'react-step-progress-bar/styles.css';
import { activitiesQueryState, greenPointsQueryState } from '../../atoms/QueryAtom';
import Box from '@mui/material/Box';
import Boulder from './Boulder.svg';
import Cascade from './Cascade.svg';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ProgressBar, Step } from 'react-step-progress-bar';
import Link from '@mui/material/Link';
import { useRecoilValue } from 'recoil';
import Rainbow from './Rainbow.svg';
import Soul from './Soulsvg.svg';
import Thunder from './Thunder.svg';
import Volcano from './Volcano.svg';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

const GreenRewards = () => {
    const greenPoints = useRecoilValue(greenPointsQueryState);
    const currentActivities = useRecoilValue(activitiesQueryState);
    const sortedActivities = [...currentActivities].sort((a, b) => b.activityDate - a.activityDate);
    const history = useHistory();
    const handleIndividualButtonClick = () => {
        history.push('/');
    }
    return (
        <Box sx={{ width: '100%' }}>
            <div className="green-rewards--title-bar">
                <Typography 
                    variant="h4"
                    align="left"
                    sx={{ fontWeight: 'bold', width: '100%', padding: '10px' }}>
                        My Green Rewards
                </Typography>
            </div>
            <div className="green-rewards-points-section">
                <Grid container>
                    <Grid item 
                        xs={12} lg={4} 
                        sx={{ 
                            paddingLeft: {
                                xs: '30%',
                                sm: '38%',
                                md: '40%',
                                lg: '3.5%'
                            }
                        }}>
                        <Typography gutterBottom={true} variant="h5" >
                            Points Available
                        </Typography>
                        <Typography gutterBottom={true} variant="h5"  
                            sx={{ 
                                color: 'green', 
                                paddingLeft: {
                                    xs: '22%',
                                    sm: '22%',
                                    md: '14%',
                                    lg: '25%',
                                    xl: '25%'
                                } 
                            }}>
                            {greenPoints.totalGreenRewardPointsAvailable}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">
                            2021 Points
                        </Typography>
                        <Typography gutterBottom={true} variant="h5" align="center" sx={{ color: 'green' }}>
                            {greenPoints.totalGreenRewardPointsEarned}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography gutterBottom={true} variant="h5" align="center">
                            Lifetime Points
                        </Typography>
                        <Typography gutterBottom={true} variant="h5" align="center" sx={{ color: 'green' }}>
                            {greenPoints.totalLifetimePoints}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div>
                {/* Update progress bar with updated values and tooltips */}
                <Typography variant="h5" sx={{ fontStyle: 'italic', paddingLeft: '3.5%' }}>
                    Here is how you are helping the environment this year
                </Typography>
                <div className="green-rewards-progress-bar">
                    <ProgressBar
                        percent={(greenPoints.totalGreenRewardPointsEarned/90)*100}
                        filledBackground="#008522"
                    >
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title={<img className={`indexedStep ${accomplished ? "accomplished" : null}`} src={Boulder} />} arrow>
                                    <span>1</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title={<img className={`indexedStep ${accomplished ? "accomplished" : null}`} src={Cascade} />} arrow>
                                    <span>2</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title={<img className={`indexedStep ${accomplished ? "accomplished" : null}`} src={Rainbow} />} arrow>
                                    <span>5</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title={<img className={`indexedStep ${accomplished ? "accomplished" : null}`} src={Volcano} />} arrow>
                                    <span>10</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title={<img className={`indexedStep ${accomplished ? "accomplished" : null}`} src={Thunder} />} arrow>
                                    <span>100</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                <Tooltip title={<img className={`indexedStep ${accomplished ? "accomplished" : null}`} src={Soul} />} arrow>
                                    <span>500</span>
                                </Tooltip>
                            </div>
                            )}
                        </Step>
                    </ProgressBar>
                </div>
            </div>
            <div className="green-rewards--links">
                <Link className="green-rewards-link" underline="hover" href="#" sx={{ fontFamily: 'arial' }}>Spend your Points ></Link>
                <Link underline="hover" onClick={handleIndividualButtonClick} sx={{ fontFamily: 'arial', cursor: 'pointer' }}>
                    Learn more about Green Rewards >
                </Link>
            </div>
            <Divider />
            <Box>
                <Typography gutterBottom={true} variant="h5" sx={{ margin: '10px 3.5%' }}>
                    Green Rewards Activity
                </Typography>
                <Grid container>
                    <Grid item xs={4} lg={4}>
                        <Typography gutterBottom={true} variant="h6" sx={{ paddingLeft: '11%' }}>DATE</Typography>
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
                        <Typography gutterBottom={true} variant="h6">DESCRIPTION</Typography>
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
                        <Typography gutterBottom={true} variant="h6" align="center">POINTS</Typography>
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
                    <Link underline="hover" href="#" sx={{ fontFamily: 'arial', marginLeft: '80%' }}>Activity Page ></Link>
                </Grid>
                <Divider />
            </Box>
        </Box>
    );
};

export default GreenRewards;