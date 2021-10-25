import React from 'react';
import './Splash.scss';
import splash from './splash.jpg';

export const Splash = props => {
    const getProps = () => ({
        alt: 'Trees in the shape of an airplane',
        className: 'splash',
        src: splash
    });

    return <img {...getProps()} />;
};

export default Splash;
