import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Details from '../Details/Details.js';
import Home from '../Home/Home.js';
import { Route, HashRouter as Router } from 'react-router-dom';
// import Edit from '../Edit/Edit.js';

class App extends Component {
  
  getMovies = () => {
    this.props.dispatch({ type: 'FETCH_MOVIES' })
  };


  componentDidMount() {
    this.getMovies()
  };



  // Renders the entire app on the DOM
  render() {
    return (
    
      <Router>
      <div className="App">
        {/* {JSON.stringify(this.props.reduxState)} */}
        
        <Route path='/' exact component={Home} />
        <Route path='/details' component={Details} />
      </div>
    </Router>
    );
  }
}


const mapReduxStateToProps = reduxState => ({ reduxState });
export default connect(mapReduxStateToProps)(App);