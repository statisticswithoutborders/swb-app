import React, { Component } from 'react'
import "./VolunteersPage.css"
import Card from '../../components/Card/Card'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import volunteers_workspace from "../../assets/images/volunteers_undraw_workspace.png";
import volunteer_students from "../../assets/images/volunteers_undraw_students.png";
import volunteer_chill from "../../assets/images/volunteers_undraw_chill.png";
import volunteer_community from "../../assets/images/volunteers_undraw_community.png";
import FormContact from '../../components/FormContact/FormContact'

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
                    <div className="VolunteersPage-volunteerfor-card-container-top">
                        <Card our_volunteers image={volunteers_workspace} title="Currently Employed Statisticians" description="Statisticians who are currently working are valuable contributors to our projects.  Volunteers cannot participate in projects where there is a conflict of interest but are eligible for any projects that do not conflict with their job." />
                        <Card our_volunteers image={volunteer_students} title="Students" description="Although SWB cannot provide statistical training or classes, any students who are looking or real-world experience are welcome to volunteer on our projects" />
                    </div>
                    <div className="VolunteersPage-volunteerfor-card-container-bottom">
                        <Card our_volunteers image={volunteer_chill} title="Retirees" description="Anyone who has retired and who would like to continue working in teh statistical community.  SWB accepts projects across multiple disciplines and has a need for any volunteers with years of experience in their specific areas." />
                        <Card our_volunteers image={volunteer_community} title="Non-statisticians" description="Anyone who has knowledge or experience  in related fields (data science, CS, genetics, etc.) and would like more experience working on statistical projects are welcome to volunteer." />
                    </div>
                    </div>
                <div className="VolunteersPage-howitworks">
                    <div className="VolunteersPage-hiw-container">
                    <HowItWorks />
                    </div>
                </div>
                <div className="VolunteersPage-worktogether">
                <h2 className="VolunteersPage-section-title">Let's Work Together!</h2>
                <FormContact volunteer formCallback />
                </div>
            </div>
        )
    }
}

export default VolunteersPage
