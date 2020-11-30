import React, { Component } from 'react';

// https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, errorMessage: error});
    }

    render () {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
