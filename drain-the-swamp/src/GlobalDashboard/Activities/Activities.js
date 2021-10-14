import Activity from './Activity';
import activityDescriptions from './ActivityDescriptions';
import boardingPass from './boarding-pass.png';
import Button from '@mui/material/Button';
import carryOn from './carry-on.jpeg';
import checkedBag from './checked-bag.jpeg'
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

import './Activities.scss';

const activitiesData = [{
    activityId: 'boardingPass',
    description: 'and reduce paper usage.',
    expandedDescription: activityDescriptions.boardingPass,
    imageSource: boardingPass,
    rewardsPoints: '+1 point',
    title: 'Boarding Electronically'
}, {
    activityId: 'checkedBag',
    description: 'and reduce our carbon footprint.',
    expandedDescription: activityDescriptions.checkedBag,
    imageSource: checkedBag,
    rewardsPoints: '+10 points',
    title: 'Limit Checked Bags'
}, {
    activityId: 'greenIdea',
    description: 'and help us improve.',
    expandedDescription: activityDescriptions.greenIdea,
    imageSource: carryOn,
    rewardsPoints: '+2 points',
    title: 'Submit a Green Idea'
}];

export const Activities = props => {
    const [expandedActivityId, setExpandedActivityId] = useState(null);
    const expandedActivity = activitiesData.find(
        activity => activity.activityId === expandedActivityId);

    const handleActivityExpansion = activityId => {
        setExpandedActivityId(activityId);
    };
    const handleHideClick = () => {
        setExpandedActivityId(null);
    }

    const getExpandedActivityDescriptionClass = () => {
        return `activities--expanded-description ${expandedActivity ? 'visibile' : 'hidden' }`
    }

    const renderActivity = activityData => (
        <li className="activities--item">
            <Activity
                activityId={activityData.activityId}
                description={activityData.description}
                imageSource={activityData.imageSource}
                onExpand={handleActivityExpansion}
                title={activityData.title}
            />
        </li>
    );

    return (
        <ul className="activities">
            {activitiesData.map(renderActivity)}
            <div className={getExpandedActivityDescriptionClass()}>
                <div className="activities--expanded-description--row">
                    <div className="activities--expanded-description--information">
                        <Typography sx={{fontWeight: 'bold' }} variant="subtitle1">
                            {expandedActivity?.title}
                        </Typography>
                        <Typography variant="body2">
                            {expandedActivity?.expandedDescription}
                        </Typography>
                    </div>
                    <div className="activities--expanded-description--rules">
                        <Typography sx={{ color: '#008522', textAlign: 'right' }} variant="h4">
                            {expandedActivity?.rewardsPoints}
                        </Typography>
                    </div>
                </div>
                <div className="activities--expanded-description--row">
                    <div />
                    <Button onClick={handleHideClick} variant="contained">Hide</Button>
                </div>
            </div>
        </ul>
    );
};

export default Activities;
