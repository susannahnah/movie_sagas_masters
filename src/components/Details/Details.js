import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    handleBackClick = () => {
        this.props.history.push('/')
    };

    handleEditClick = () => {
        this.props.history.push('/edit')
    };

    render() {
        return (
            <>
                <button onClick={this.handleBackClick}>Back to Home</button>
                <button onClick={this.handleEditClick}>Edit Movie</button>

                <h1>{this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer - 1]
                    .title}
                </h1>

                <img alt={this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer - 1]
                    .title} src={this.props.reduxState.moviesReducer
                    [this.props.reduxState.individualMovieReducer - 1]
                        .poster} onClick={this.handleClick} />
                <br />
                <br />
                <br />
                {this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer - 1]
                    .description}
                <br />
                <br />
                <br />
                <ul>
                {this.props.reduxState.genresReducer.map(genre => {
                    return <li key={genre.genre_id}>{genre.name}</li>
                })}
                </ul>
            </>
        )
    }
}



const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);