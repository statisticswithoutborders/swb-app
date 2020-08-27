import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./ContactUsPage.css"
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import FormContact from '../../components/FormContact/FormContact'

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

    handleSend(name, email, organization, subject, message){
        console.log(name, email, organization, subject, message);
    }
   
    render() {
        

        return (
            <div className={this.state.classList}>
                <div className="ContactUsPage-body">
                    <h2 className="ContactUsPage-header">Let's Work Together - Contact Us</h2>
                    <div className="ContactUsPage-form-placeholder">
                        <FormContact formCallback={this.handleSend} />
                    </div>
                    <p className="ContactUsPage-inquiries"><strong>For any direct inquiries, please email SWB:</strong> <a href="mailto:statisticswithoutborders@gmail.com">statisticswithoutborders@gmail.com</a></p>
                    <div className="ContactUsPage-button">
                        <Link to="/">
                            <Button type = 'primary' wide callback label = "LEARN MORE ABOUT OUR SERVICES"/>
                        </Link>
                    </div>
                    <div className="ContactUsPage-button">
                        <Link to="">
                            <Button type = 'primary' wide callback label = "LEARN MORE ABOUT OUR Volunteers"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUsPage
