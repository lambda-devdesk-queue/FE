import React from 'react';

import '../Background/Background.css';

const background = props => (
    <div className="background" onClick={props.click}/>
);

export default background;