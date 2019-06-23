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

    submitNewEdits = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'EDIT_MOVIE', payload: {...this.state,id:this.props.reduxState.individualMovieReducer}})
    }


    render() {
        return (
            <div>
                <h2>Edit Movie Here</h2>
                <form onSubmit={this.submit}>
                    <input placeholder="Title" type='text' value={this.state.title} onChange={this.handleTitleChange} />
                    <br />
                    <br />
                    <textarea rows="10" cols="100" placeholder="Description" type='type' value={this.state.description} onChange={this.handleDescriptionChange} />
                    <br />
                    <br />
                    <input type='Submit' value='New Movie Edits' />
                </form>
             </div>
        )
    }
};





const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);
