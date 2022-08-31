import React from 'react';

/* The Navigation Buttons in the NavBar component */
export default class NavButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.page,
            toggled: props.toggled,
        }
    }

    /* TODO
        * Add handleClick() method 
        * */

    render() {
        return (
            // Change styles depending if toggled or not
            <button className={this.state.toggled ? "navButtonToggled" : "navButtonUntoggled"}>{this.state.text}</button>
        );
    }
}
