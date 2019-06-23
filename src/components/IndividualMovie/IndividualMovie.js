import React, { Component } from 'react';
import { connect } from 'react-redux';


class IndividualMovie extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'SELECT_MOVIE', payload: this.props.movie})
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
