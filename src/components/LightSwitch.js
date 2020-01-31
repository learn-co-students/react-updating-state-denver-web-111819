import React, { Component } from 'react'

export default class LightSwitch extends Component {

    state = {
        toggled: false
    }

    handleClick = () => {
        let toggleState = !this.state.toggled
        this.setState({
            toggled: toggleState
        })
    }

    render() {
        return (
            <div>
                <h1>Light Switch is</h1>
                <button onClick={this.handleClick}>
                    {this.state.toggled ? "ON" : "OFF"}
                </button>
            </div>
        )
    }
}
