---
to: src/components/<%= name %>/<%= name %>.js
---

import React, { Component } from 'react'
import "./<%= name %>.css"

// React Class Component
class <% name %> extends Component {

    // Default Class to apply to Component
    let classList = '<%= name %>'

    render() {
        return (
            <div className={classList}>
                
            </div>
        )
    }
}

export default <% name %>
