import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {


    render() {
        // if (this.props.movieList[0].title !== '') {
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
            </>
        )
        // }else {
            // return <></>
        // }
    }
}



const mapStateToProps = reduxState => ({
    reduxState,
    // movieList: this.props.reduxState.moviesReducer,
    // movieID: this.props.reduxState.individualMovieReducer, 
});

export default connect(mapStateToProps)(Details);