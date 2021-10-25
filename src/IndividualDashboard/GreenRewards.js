import './GreenRewards.scss';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { greenPointsState } from '../selectors';
import { useRecoilValue } from 'recoil';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 30,
    borderRadius: 10,
    [`&.${linearProgressClasses.determinate}`]: {
        borderRadius: 20,
        backgroundColor: '#E7E6E6'
    }
}));


function GreenRewards () {
    const greenPoints = useRecoilValue(greenPointsState);

    return (
        <Box sx={{ width: '100%' }}>
            <div className="green-rewards--title-bar">
                <Typography 
                    variant="h4"
                    align="left"
                    sx={{ width: '100%' }}>
                        Green Rewards
                </Typography>
            </div>
            <div>
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
                    <BorderLinearProgress variant="determinate" value={80} />
                    <Typography gutterBottom={true} variant="h7">
                        {/* insert points towards eco badge */}
                        1346 of 1500 for eco-badge
                    </Typography>
                </div>
                <div>
                    <BorderLinearProgress variant="determinate" value={62} />
                    <Typography gutterBottom={true} variant="h7">
                        {/* insert points towards eco badge */}
                        868 of 1500 for boarding badge
                    </Typography>
                </div>
            </div>
        </Box>
    );
};

export default GreenRewards;