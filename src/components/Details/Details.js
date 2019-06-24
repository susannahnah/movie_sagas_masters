import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
            <AppBar position="static">
                <Toolbar>
                <Button variant="contained" color="primary" onClick={this.handleBackClick}>Back to Home</Button>
                <Button variant="contained" color="primary" onClick={this.handleEditClick}>Edit Movie</Button>
                </Toolbar>
            </AppBar>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1>{this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer - 1]
                    .title}
                </h1>
            </Grid>
            <Grid container justify="center" item xs={6}>
                <img alt={this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer - 1]
                    .title} src={this.props.reduxState.moviesReducer
                    [this.props.reduxState.individualMovieReducer - 1]
                        .poster} onClick={this.handleClick} />
            </Grid>
            <Grid item xs={3}>
                {this.props.reduxState.moviesReducer
                [this.props.reduxState.individualMovieReducer - 1]
                    .description}
            </Grid>
                <br />
                <br />
                <br />
                <ul>
                {this.props.reduxState.genresReducer.map(genre => {
                    return <li key={genre.genre_id}>{genre.name}</li>
                })}
                </ul>
            </Grid>
            
               
            </>
        )
    }
}



const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);