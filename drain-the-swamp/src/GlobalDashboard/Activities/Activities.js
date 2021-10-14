import Activity from './Activity';
import boardingPass from './boarding-pass.png';
import Button from '@mui/material/Button';
import carryOn from './carry-on.jpeg';
import checkedBag from './checked-bag.jpeg'
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

import './Activities.scss';

const activitiesData = [{
    activityId: 'carry-on',
    description: 'and reducing fuel expenditures',
    expandedDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageSource: carryOn,
    title: 'Limiting Carry-on'
}, {
    activityId: 'boarding-pass',
    description: 'and reducing paper usage',
    imageSource: boardingPass,
    title: 'Boarding Electronically'
}, {
    activityId: 'checked-bag',
    description: 'and reducing our carbon footprint',
    imageSource: checkedBag,
    title: 'Limiting Checked Bags'
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
                            +50pts
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
