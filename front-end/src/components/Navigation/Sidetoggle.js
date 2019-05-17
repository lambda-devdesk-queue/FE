import React from 'react';

import '../Navigation/Sidetoggle.css';

const sideToggle = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-line"/>
        <div className="toggle-line"/>
        <div className="toggle-line"/>
    </button>
);

export default sideToggle;