import React from 'react';

import './Sidetoggle.css';

const sideToggle = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-line"/>
        <div className="toggle-line"/>
        <div className="toggle-line"/>
    </button>
);

export default sideToggle;