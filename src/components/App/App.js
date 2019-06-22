import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {


  getMovies = () => {
    this.props.dispatch ({ type: 'FETCH_MOVIES '})
  };
  componentDidMount() {
    this.getMovies()
  };

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(App);