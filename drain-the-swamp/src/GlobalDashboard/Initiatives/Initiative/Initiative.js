import React from 'react';

import './Initiative.scss';

export const Initiative = props => {
    return (<>
        <img className="initiative-image" src={props.imageSource} alt={props.imageAlt} />
        <p>Lorem ipsum <a href={props.href}>more</a></p>
    </>);
};

export default Initiative;
