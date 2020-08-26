import React, { Component } from 'react'
import "./ContactUsPage.css"

// React Class Page Component
class ContactUsPage extends Component {
    constructor(){
        super()

        this.state ={
            classlist:'ContactUsPage'
            ,formName: ""
            ,formEmail: ""
            ,formOrg: ""
            ,formSubject: ""
            ,formComment: ""
        }
    }
   
    render() {
        

        return (
            <div className={this.state.classList}>

            </div>
        )
    }
}

export default ContactUsPage
