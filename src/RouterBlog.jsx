// rcc

import React, { Component } from 'react'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import { withTranslation } from 'react-i18next';


// import { withTranslation } from 'react-i18next';


// CLASS
class RouterBlog extends Component {

    // displayName
    static displayName = " Router_Blog";


    // constructor
    constructor(props) {
        super(props);
        // state
        this.state = {};
        // bind

    }

    // CDM

    // Function



    // Render
    render() {
        return (
            <React.Fragment>

                <Header />
                <br />
                <Main />
                <br />
                <Footer />

            </React.Fragment>
        ) // end return
    } //end render()
}
//end class

// Class adı aşşağıda gösterme

// // Higher Order Component
export default withTranslation()(RouterBlog)