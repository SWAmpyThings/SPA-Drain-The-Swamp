import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React from 'react'
import Typography from '@mui/material/Typography';

import './Reward.scss';

export const Reward = props => {
    const getImageProps = () => ({
        alt: props.imageAlt,
        className: 'reward--image',
        src: props.imageSource
    });

    const handleExpandClick = () => {
        if (props.onExpand) {
            props.onExpand(props.rewardId);
        }
    }

    return (
        <div className="reward">
            <Card sx={{ height: '100%' }} variant='outlined'>
                <div className="reward--top-container">
                    <div className="reward--media-container">
                        <img {...getImageProps()} />
                    </div>
                    <div className="reward--media-container">
                        <CardContent sx={{ paddingBottom: { xs: '0', sm: '16px' }}}>
                            <Typography sx={{fontWeight: 'bold' }} variant="subtitle1">
                                {props.title}
                            </Typography>
                            <Typography variant="caption">
                                {props.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button onClick={handleExpandClick} sx={{ color: '#304CB2' }}>Learn More</Button>
                        </CardActions>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Reward;
