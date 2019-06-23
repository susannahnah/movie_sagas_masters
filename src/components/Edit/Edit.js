import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {
    state = {
        title: '',
        description: '',
        
    }
    
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);
