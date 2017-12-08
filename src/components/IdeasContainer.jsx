import React, { Component } from 'react';

class IdeasContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ideas: []
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="">
                Ideas
            </div>
        );
    }
}

export default IdeasContainer
