import React, { Component } from 'react';
import { connect } from 'react-redux';


class IndividualMovie extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'SET_INDIVIDUAL_MOVIE', payload: this.props.movie.id})
        this.props.history.push('/details')
    }
    
    render() {
        return (
            <li key={this.props.movie.id}>
            <h2>{this.props.movie.title}</h2>
            <img src={this.props.movie.poster} onClick={this.handleClick}/>
            <br />
            {this.props.movie.description}
            <br />
            <br />
            <br />
            </li>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(IndividualMovie);
