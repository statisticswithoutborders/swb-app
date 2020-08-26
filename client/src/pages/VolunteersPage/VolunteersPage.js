import React, { Component } from 'react'
import "./VolunteersPage.css"
import HowItWorks from '../../components/HowItWorks/HowItWorks'

// React Class Page Component
class VolunteersPage extends Component {
    constructor(){
        super()

        this.state ={classlist:'VolunteersPage'}
    }
   
    render() {
        

        return (
            <div className={this.state.classList}>
                <div className="VolunteersPage-volunteerfor">
                    <h2 className="VolunteersPage-volunteerfor-title">Volunteer for SWB</h2>
                    <div className="VolunteersPage-volunteerfor-body">
                        <div className="VolunteersPage-volunteerfor-video"></div>
                        <div className="VolunteersPage-volunteerfor-content">
                            <p>Volunteers are the engine that drive Statistics Without Borders: Without the time, energy & knowledge of our generous volunteers, we can’t provide our expertise to our in-need client groups.<br/>
                            <br/>
                            We have over 800 volunteers from 6 different continents. Our volunteers come from a wide variety of background across hundreds of countries.</p>
                        </div>
                    </div>
                </div>
                <div className="VolunteersPage-ourvolunteers">
                    <h2 className="VolunteersPage-section-title">Our Volunteers</h2>
                    <div className="VolunteersPage-volunteerfor-card-container">
                        <div className="card-placeholder"></div>
                        <div className="card-placeholder"></div>
                        <div className="card-placeholder"></div>
                        <div className="card-placeholder"></div>
                    </div>
                </div>
                <div className="VolunteersPage-howitworks">
                    <div className="VolunteersPage-hiw-container">
                    <HowItWorks />
                    </div>
                </div>
            </div>
        )
    }
}

export default VolunteersPage
