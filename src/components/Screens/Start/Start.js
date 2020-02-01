import React from 'react';

/** Internal Modules **/
/** Components */

/** CSS */
import classes from './Start.module.css';

/** Source **/
const StartScreen = (props) => {
    return (

        // this is the welcome screen it should contain the start button, previous high score, instructions and a start button
        <div className={ classes.StartScreen } >
            <h1>Welcome to the Emoji Typing Game!</h1>
            <p>The goal is to type as many Emoji's as possible in 60 seconds.</p>
            <p>A new emoji will flash on the screen your goal is to type it or skip it.</p>

            <button onClick={ props.start } > START </button>
        </div>
    );
}

/** Exports **/
export default StartScreen;