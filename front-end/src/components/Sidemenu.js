import React from 'react';

import './Sidemenu.css';

const sideMenu = props => {
    let menuClasses = 'side-menu';
    if (props.show) {
        menuClasses = 'side-menu open';
    }
    return (
    <nav className={menuClasses}>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
        </ul>
    </nav>
    );
};

export default sideMenu;