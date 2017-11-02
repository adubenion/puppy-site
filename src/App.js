import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Header} from './js/Header';
import {Home} from './js/Home.jsx';
import {Photos} from './js/Photos.jsx';
import {About} from './js/About.jsx';
import {Contact} from './js/Contact.jsx';
import {Footer} from './js/Footer';


export default class App extends React.Component {
    render() {
        return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/Photos" component={Photos} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Footer />
            </div>
        </Router>
        );
    }
}