/** External Modules **/
import React, { Component } from 'react';

/** Internal Modules **/
/** Components */

/** CSS */
import classes from './Layout.module.css';

/** Source **/
class Layout extends Component {

    state = {
    }

    render() {
        return (
            <div className={ classes.MainWrapper }>

                <header style={{ fontSize: '' }}>
                    ...header
                </header>
                
                <main> 
                    { this.props.children } 
                </main>
                
                <footer>
                    ...footer
                </footer>
            
            </div>
        );
    }

}

/** Exports */
export default Layout;