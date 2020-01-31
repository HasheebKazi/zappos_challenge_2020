import React, { Component } from 'react';

/** Internal Modules **/
/** Components */

/** CSS */
import classes from './GameBox.module.css';

/** Source **/
class GameBox extends Component {

    state = {
        input: ''
    }

    componentDidMount() {
        console.log('[GameBox] did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[GameBox] before update');
        return true;
    }

    componentDidUpdate() {
        console.log('[GameBox] did update');
    }

    inputChangeHandler = (event) => {
        // this syntax is required for the correct this reference
        this.setState({ input: event.target.value });
    }

    render() {
        return (
            <div className={ classes.GameBox } >
                <input type="text" value={ this.state.input } onChange={ this.inputChangeHandler } />
            </div>
        );
    }
}

/** Exports **/
export default GameBox;