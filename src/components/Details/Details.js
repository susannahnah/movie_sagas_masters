import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {


    render() {
        return(
            <>
            <h1>{this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer -1]
                .title}
            </h1> 
        
            <img alt={this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer -1]
                .title}  src={this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer -1]
                .poster} onClick={this.handleClick}/> 
            <br />
            <br />
            <br />
            {this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer -1]
                .description}
            <br />
            <br />
            <br />
            {JSON.stringify(this.props.reduxState.genresReducer)}
            </>
        )
    }
}



const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);