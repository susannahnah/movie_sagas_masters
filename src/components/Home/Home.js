import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualMovie from '../IndividualMovie/IndividualMovie.js';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class Home extends Component {


    render() {
        return (
            <>
             <AppBar position="static">
                <h1>Movie List</h1>
                </AppBar>
                <Grid container spacing={3}>
                <Paper>
                    
                <ul>
                    {this.props.reduxState.moviesReducer.map(movie =>
                        <IndividualMovie key={movie.id} movie={movie} history={this.props.history} />

                    )}
                </ul>
                </Paper>
                </Grid>
            </>
        )
    }
}





const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Home);