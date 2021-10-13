import React from 'react';
import logo from './SouthwestLogo.png';

export const SouthwestLogo = props => {
    return (
        <h1 className="southwest-logo">
            <img src={logo} alt="Southwest Airlines" />
        </h1>
    );
};

export default SouthwestLogo;
