
import React, { Component } from 'react'
import "./TestComponent.css"

// React Class Component
class TestComponent extends Component {

    // Default Class to apply to Component
    let classList = 'TestComponent'

    render() {
        return (
            <div className={classList}>

            </div>
        )
    }
}

export default 
