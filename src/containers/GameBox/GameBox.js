import React, { Component } from 'react';
import ReactHowler from 'react-howler'

/** Internal Modules **/
/** Components */

/** CSS */
import classes from './GameBox.module.css';

/** Source **/
class GameBox extends Component {

    state = {
        input: '',
        emojiList: [],
        counter: 0
    }

    componentDidMount() {
        console.log('[GameBox] did mount');
        console.log('requesting Emojis');

        fetch('https://emojigenerator.herokuapp.com/emojis/api/v1?count=100')
        .then(rawNetworkData => {
            console.log('=========================');
            console.log(rawNetworkData);
            console.log('=========================');
            return rawNetworkData.json();
        })
        .then(jsonData => {
            this.setState({
                emojiList: jsonData["emojis"]
            });
            console.log(this.state);
        })
        .catch(error => {
            console.log('[GameBox] emoji fetch network error');
            console.log('[GameBox] reading backup emojis');
        });
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

    inputSubmitHandler = (event) => {

        if (event.key === 'Enter' && event.target.value === this.state.emojiList[this.state.counter]) {
            this.setState((oldState, oldProps) => {
                return {
                    input: '',
                    counter: oldState.counter + 1
                }
            });
        } else if (event.key === 'Enter') {
            this.setState((oldState, oldProps) => {
                return {
                    input: ''
                }
            });
        }

    }

    onChange = (event) => {
        this.setState({ sound: event.target.sound });

      }

    render() {

        let nextEmoji = this.state.emojiList[this.state.counter];

        return (
            <div className={ classes.GameBox } >

                <h1 className={ classes.GameBox__Title } > Starting in 3. </h1>

                <p className={ classes.GameBox__NextEmoji } > { nextEmoji } </p>

                <ReactHowler
                    src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
                    playing={true}
                />

                <input 
                    className={ classes.GameBox__Input }
                    type="text" 
                    value={ this.state.input } 
                    onChange={ this.inputChangeHandler } 
                    onKeyDown={ this.inputSubmitHandler } />

                <div className={ classes.GameBox__Controls } >
                    <button> Skip </button>
                    <button> Quit </button>
                </div>

            </div>
        );
    }
}

/** Exports **/
export default GameBox;