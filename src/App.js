/** External Modules **/
import React, { Component } from 'react';

/** Internal Modules **/
/** Components */
import Main from './containers/Main/Main';
import Layout from './HOC/Layout/Layout'

/** CSS */
import classes from './App.module.css';

/** Source **/
class App extends Component {

    componentDidMount() {
        console.log('[App Component] did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App Component] before update');
        return true;
    }

    componentDidUpdate() {
        console.log('[App Component] did update');
    }

    render() {
        return (
            <div className={ classes.App } >
                <Layout>
                    <Main />
                </Layout>
            </div>
        );
    }
}

/** Exports **/
export default App;
