import React, { Component } from 'react'

export default class ButtonClicker extends Component {

    state = {
        count: 0
    }

    handleClick = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Count!</button>
            </div>
        )
    }
}
