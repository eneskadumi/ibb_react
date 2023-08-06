// rcc

import React, { Component } from 'react'
import Header from './component/Header';
import Footer from './component/Footer';
import { withTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

// Component CRUD
import BlogList from './component/blog/BlogList';
import BlogUpdate from './component/blog/BlogUpdate';
import BlogView from './component/blog/BlogView';
import BlogCreate from './component/blog/BlogCreate';


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

                {/* HEADER */}
                <Header logo="fa-solid fa-blog" />

                <div className="container"></div>
                <Routes>
                    <Route path='/' element = {<BlogList/>} />
                    <Route path='/blog/list' element = {<BlogList/>} />
                    <Route path='/blog/create' element = {<BlogCreate/>} />
                    <Route path='/blog/view/:id' element = {<BlogView/>} />
                    <Route path='/blog/update/:id' element = {<BlogUpdate/>} />
                </Routes>
                {/* FOOTER */}
                <Footer copy ="&copy; 2021 Copyrigh"/>

            </React.Fragment>
        ) // end return
    } //end render()
}
//end class

// Class adı aşşağıda gösterme

// // Higher Order Component
export default withTranslation()(RouterBlog)