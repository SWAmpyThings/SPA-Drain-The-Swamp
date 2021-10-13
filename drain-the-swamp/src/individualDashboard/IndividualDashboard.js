import './IndividualDashboard.scss';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Header from '../shared/SouthwestHeader/index';
import heartTree from './heart-tree.svg';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import phonesHeart from './phones-heart.svg';
import { greenPointsState } from '../selectors';
import { useRecoilValue } from 'recoil';
import { styled } from '@mui/material/styles';
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
                <Typography gutterBottom={true} variant="h4" align="center">
                    Available Points
                </Typography>
                <Typography gutterBottom={true} variant="h4" align="center" sx={{ color: 'green' }}>
                    {greenPoints}
                </Typography>
            </div>
            <div className="green-rewards-status">
                <Typography gutterBottom={true} variant="h6">
                    Here is what you have earned towards badges
                </Typography>
                <div>
                    <Grid container>
                        <Grid item xs={12} md={10} lg={10}>
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Grid>
                        <Grid item xs={1} md={1} lg={1}>
                            <img src={heartTree} className="green-rewards--icon" alt="heart tree" />
                        </Grid>
                    </Grid>
                    <Typography gutterBottom={true} variant="h7">
                        {/* insert points towards eco badge */}
                        1346 of 1500 for eco-badge
                    </Typography>
                </div>
                <div>
                    <Grid container>
                        <Grid item xs={12} md={10} lg={10}>
                            <BorderLinearProgress variant="determinate" value={62} />
                        </Grid>
                        <Grid item xs={1} md={1} lg={1}>
                            <img src={phonesHeart} className="green-rewards--icon" alt="phones heart" />
                        </Grid>
                    </Grid>
                    <Typography gutterBottom={true} variant="h7">
                        {/* insert points towards boarding badge */}
                        868 of 1500 for boarding badge
                    </Typography>
                </div>
            </div>
            <div className="green-rewards--links">
                <Link className="green-rewards-link" underline="hover" href="#">Spend your Points ></Link>
                <Link underline="hover" href="#">Learn more about Green Rewards ></Link>
            </div>
            <Divider />
            <Box>
                <Grid container>
                    <Typography gutterBottom={true} variant="h5" sx={{ margin: '5px' }}>
                        Green Rewards Activity
                    </Typography>
                    <Grid item xs={10} lg={10}>
                        {/* TODO: map over entries into here */}
                    </Grid>
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