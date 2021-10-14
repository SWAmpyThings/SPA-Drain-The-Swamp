import React from 'react';
import Typography from '@mui/material/Typography';

import './ConsoleItem.scss';

export const ConsoleItem = props => {
    return (
        <div className="console-item">
            <img alt={props.alt} src={props.src} />
            <div className="console-item--text">
                <Typography variant="h4">{props.value}</Typography>
                <Typography variant="caption">{props.description}</Typography>
            </div>
        </div>
    );
}

export default ConsoleItem;
