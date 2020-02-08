/** External Modules **/
import React, { Component } from 'react';

/** Internal Modules **/
/** Components */
import GameBox from '../GameBox/GameBox';
import StartScreen from '../../components/Screens/Start/Start';

/** CSS */
import classes from './Main.module.css';

/** Source **/
class Main extends Component {

    state = {
        gameState: 0
    }

    componentDidMount() {
        console.log('[Main Component] did mount');
        console.log(this.state);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Main Component] before update');
    //     return true;
    // }

    componentDidUpdate() {
        console.log('[Main Component] did update');
    }

    onStartHandler = () => {
        console.log('start game')
        this.setState({ gameState: 1 });
        console.log(this.state);
    }

    render() {

        let currentScreen = <StartScreen start={ this.onStartHandler } />;
        if (this.state.gameState === 1) {
            console.log('here')
            currentScreen = (
                <React.Fragment>
                    <GameBox />
                </React.Fragment>
            )
        }

        return (
            <div className={ classes.Main } >
                { currentScreen }
            </div>
        );
    }
}

/** Exports **/
export default Main;