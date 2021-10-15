import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

import './LoadingBar.scss';

export const LoadingBar = props => {
    return (
        <div className="loading-bar">
            <CircularProgress sx={{ color: '#008522' }} />
        </div>
    );
};

export default LoadingBar;
