import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React from 'react'
import Typography from '@mui/material/Typography';

import './Activity.scss';

export const Activity = props => {
    const getImageProps = () => ({
        alt: props.imageAlt,
        className: 'activity--image',
        src: props.imageSource
    });

    const handleExpandClick = () => {
        if (props.onExpand) {
            props.onExpand(props.activityId);
        }
    }

    return (
        <div className="activity">
            <Card sx={{ height: '100%' }} variant='outlined'>
                <div className="activity--top-container">
                    <div className="activity--media-container">
                        <img {...getImageProps()} />
                    </div>
                    <div className="activity--media-container">
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

export default Activity;
