import React from 'react';

import NavButton from './NavButton';


/* The Navigation Buttons in the NavBar component */
export default class NavButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.page,
            toggled: props.toggled,
            loggedIn: props.loggedIn,
        }
    }


    render() {
        return (
            // Change styles depending if toggled or not
            <NavButton page={this.state.page} toggled={this.state.toggled}/>
        );
    }
}


