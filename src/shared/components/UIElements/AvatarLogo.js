import React from 'react';

import './AvatarLogo.css';

const AvatarLogo = props => {
    return (
        <div className={`avatar-logo ${props.className}`} style={props.style}>
            <img
                src={props.image}
                alt={props.alt}
                style={{ width: props.width, height: props.width }}
            />
        </div>
    );
};

export default AvatarLogo;