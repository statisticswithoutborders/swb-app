import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./ContactUsPage.css"
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'


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
                <Footer />
            </div>
        )
    }
}

export default ContactUsPage
