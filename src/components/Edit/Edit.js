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


    render()
};





const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);
