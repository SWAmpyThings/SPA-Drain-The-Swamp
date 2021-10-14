import React from 'react';
import Typography from '@mui/material/Typography';

export const ConsoleItem = props => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '32px' }}>
            <img alt={props.alt} src={props.src} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4">{props.value}</Typography>
                <Typography variant="caption">{props.description}</Typography>
            </div>
        </div>
    );
}

export default ConsoleItem;
