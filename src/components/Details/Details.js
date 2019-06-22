import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {


    render() {
        return(
            <>
            {JSON.stringify(this.props.reduxState.moviesReducer[this.props.reduxState.individualMovieReducer -1])}
            
            </>
        )
    }
}



const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);