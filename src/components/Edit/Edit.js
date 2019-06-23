import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {
    state = {
        title: '',
        description: '',

    }

    handleTitleChange = (event) => {
        console.log('title changed')
        this.setState({
            ...this.state,
            title: event.target.value
        })
    };


    handleDescriptionChange = (event) => {
        console.log('description changed')
        this.setState({
            ...this.state,
        description: event.target.value
        })
    };


    cancelEditButton = () => {
        this.props.history.push('/details')
    };

    

    submitNewEdits = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'EDIT_MOVIE', payload: {...this.state,id:this.props.reduxState.individualMovieReducer}})
        this.props.history.push('/details')
    }


    render() {
        return (
            <div>
                <h2>Edit Movie Here</h2>
                <form onSubmit={this.submitNewEdits}>
                    <input placeholder="Title" type='text' value={this.state.title} onChange={this.handleTitleChange} />
                    <br />
                    <br />
                    <textarea rows="10" cols="100" placeholder="Description" type='type' value={this.state.description} onChange={this.handleDescriptionChange} />
                    <br />
                    <br />
                    <button type='Submit' value='New Movie Edits'>Submit Changes</button>
                    <br />
                    <br />
                    <button onClick={this.cancelEditButton}>Cancel Edits</button>
                </form>
             </div>
        )
    }
};





const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);
