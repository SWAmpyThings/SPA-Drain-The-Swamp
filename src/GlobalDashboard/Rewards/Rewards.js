import Button from '@mui/material/Button';
import offsetFlight from './offset-southwest-flight.png';
import plantTree from './plant-a-tree.jpeg'
import rapidRewards from './rapid-rewards.jpeg';
import React, { useState } from 'react';
import Reward from './Reward';
import rewardDescriptions from './RewardDescriptions';
import Typography from '@mui/material/Typography';

import './Rewards.scss';

const rewardsData = [{
    description: 'for your future travels.',
    expandedDescription: rewardDescriptions.rapidRewards,
    imageSource: rapidRewards,
    rewardsPoints: '2 points',
    rewardId: 'rapidRewards',
    title: <span>Rapid Rewards<sup>®</sup> Points</span>
}, {
    description: 'and reduce our carbon footprint.',
    expandedDescription: rewardDescriptions.carbonOffset,
    imageSource: offsetFlight,
    rewardId: 'carbonOffset',
    title: 'Offset your Southwest flight'
}, {
    description: 'to celebrate our collective action.',
    expandedDescription: rewardDescriptions.plantTree,
    imageSource: plantTree,
    rewardsPoints: '1000 points',
    rewardId: 'plantTree',
    title: 'Plant a Tree Program'
}];

export const Rewards = props => {
    const [expandedRewardId, setExpandedRewardId] = useState(null);
    const expandedReward = rewardsData.find(
        reward => reward.rewardId === expandedRewardId);

    const handleActivityExpansion = rewardId => {
        setExpandedRewardId(rewardId);
    };
    const handleHideClick = () => {
        setExpandedRewardId(null);
    }

    const getExpandedRewardDescriptionClass = () => {
        return `rewards--expanded-description ${expandedReward ? 'visibile' : 'hidden' }`
    }

    const renderReward = rewardData => (
        <li className="rewards--item">
            <Reward
                description={rewardData.description}
                imageSource={rewardData.imageSource}
                onExpand={handleActivityExpansion}
                rewardId={rewardData.rewardId}
                rewardsPoints={rewardData.rewardsPoints}
                title={rewardData.title}
            />
        </li>
    );

    return (
        <ul className="rewards">
            {rewardsData.map(renderReward)}
            <div className={getExpandedRewardDescriptionClass()}>
                <div className="rewards--expanded-description--row">
                    <div className="rewards--expanded-description--information">
                        <Typography sx={{fontWeight: 'bold' }} variant="subtitle1">
                            {expandedReward?.title}
                        </Typography>
                        <Typography variant="body2">
                            {expandedReward?.expandedDescription}
                        </Typography>
                    </div>
                    <div className="rewards--expanded-description--rules">
                        <Typography sx={{ color: '#008522', textAlign: 'right' }} variant="h4">
                            {expandedReward?.rewardsPoints}
                        </Typography>
                    </div>
                </div>
                <div className="rewards--expanded-description--row">
                    <div />
                    <Button onClick={handleHideClick} variant="contained">Hide</Button>
                </div>
            </div>
        </ul>
    );
};

export default Rewards;
