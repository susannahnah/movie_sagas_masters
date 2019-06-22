import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualMovie from '../IndividualMovie/IndividualMovie.js';

class Home extends Component {


    render() {
        return (
            <>
                <h3>Movie List</h3>
                <ul>
                    {this.props.reduxState.moviesReducer.map(movie =>
                        <IndividualMovie key={movie.id} movie={movie} history={this.props.history} />

                    )}
                </ul>
            </>
        )
    }
}





const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Home);