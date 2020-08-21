---
to: src/pages/<%= name %>/<%= name %>.js
---

import React, { Component } from 'react'
import "./<%= name %>.css"

// React Class Page Component
export class <%= name %> extends Component {
    constructor(){
        super()

        this.classList = '<%= name %>'
    }
   
    render() {
        

        return (
            <div className={classList}>

            </div>
        )
    }
}

export default <% name %>
