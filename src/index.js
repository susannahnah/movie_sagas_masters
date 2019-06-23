import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { put, takeEvery } from "redux-saga/effects"


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMoviesSaga);
    yield takeEvery('SELECT_MOVIE', selectMovieSaga);
    yield takeEvery('EDIT_MOVIE', editMovieSaga);
}

//get specific movie info
function* selectMovieSaga(action) {
    yield put({ type: 'SET_INDIVIDUAL_MOVIE', payload: action.payload.id})
    const movieGenre = yield axios.get(`/movie_genres?id=${action.payload.id}`)
    yield put({ type: 'SET_TAGS', payload: movieGenre.data })
    console.log('end of selectMovieSaga');
    
}

function* editMovieSaga(action) {
    yield axios.put(`/edit`, action.payload)
    yield put ({ type: 'FETCH_MOVIES'})
}

//get all movies
function* fetchMoviesSaga(action) {
    try {
        const movieResponse = yield axios.get('/movies')
        yield put({ type: 'SET_MOVIES', payload: movieResponse.data });
        console.log('end of fetchMoviesSaga')
    } catch (error) {
        console.log(error);
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const moviesReducer = (state = [{title:''}], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//used to store individual movie
const individualMovieReducer = (state = 1, action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_MOVIE':
            return action.payload;
        default:
            return state;
    }
}


// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        individualMovieReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
