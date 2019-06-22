import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import IndividualMovie from '../IndividualMovie/IndividualMovie.js';
import Details from '../Details/Details.js';

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
      <div className="App">
        {/* {JSON.stringify(this.props.reduxState)} */}
        <h3>Movie List</h3>
        <ul>
          {this.props.reduxState.moviesReducer.map(movie => 
          <IndividualMovie movie={movie}/> 

          )}
        </ul>
        {JSON.stringify(this.props.reduxState.individualMovieReducer)}

        <Details />
      </div>
    );
  }
}


const mapReduxStateToProps = reduxState => ({ reduxState });
export default connect(mapReduxStateToProps)(App);