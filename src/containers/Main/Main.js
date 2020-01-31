/** External Modules **/
import React, { Component } from 'react';

/** Internal Modules **/
/** Components */
import GameBox from '../GameBox/GameBox';

/** CSS */
import classes from './Main.module.css';

/** Source **/
class Main extends Component {

    componentDidMount() {
        console.log('[Main Component] did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Main Component] before update');
        return true;
    }

    componentDidUpdate() {
        console.log('[Main Component] did update');
    }

    render() {
        return (
            <div className={ classes.Main } >
                <h1> Emoji Game </h1>
                <GameBox />
            </div>
        );
    }
}

/** Exports **/
export default Main;