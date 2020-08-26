import React, { Component } from 'react'
import "./ContactUsPage.css"
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'



// React Class Page Component
class ContactUsPage extends Component {
    constructor(){
        super()

        this.state ={
            classList:'ContactUsPage'
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
                <NavBar />
                <div className="ContactUsPage-body">
                    <div className="ContactUsPage-form-placeholder">Form</div>

                </div>
            </div>
        )
    }
}

export default ContactUsPage
