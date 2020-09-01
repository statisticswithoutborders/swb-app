import React, { Component } from 'react'
import "./VolunteersPage.css"
import Card from '../../components/Card/Card'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import FormContact from '../../components/FormContact/FormContact'
import Video from '../../components/Video/Video'


// React Class Page Component
class VolunteersPage extends Component {
    constructor(){
        super()

        this.state ={
            classList:'VolunteersPage'
        }
    }
   
    render() {
        

        return (
            <div className={this.state.classList}>
                <div className="VolunteersPage-section">
                    <h2 className="VolunteersPage-volunteerfor-title">Volunteer for SWB</h2>
                    <div className="VolunteersPage-volunteerfor-body">
                        <div className="VolunteersPage-volunteerfor-video">
                        <Video url="https://www.youtube.com/watch?v=1y2-v3W8Ubs" />
                        </div>
                        <div className="VolunteersPage-volunteerfor-content">
                            <p>Volunteers are the engine that drive Statistics Without Borders: Without the time, energy & knowledge of our generous volunteers, we can’t provide our expertise to our in-need client groups.<br/>
                            <br/>
                            We have over 800 volunteers from 6 different continents. Our volunteers come from a wide variety of background across hundreds of countries.</p>
                        </div>
                    </div>
                </div>
                <div className="VolunteersPage-section">
                    <h2 className="VolunteersPage-section-title">Our Volunteers</h2>
                    <div className="VolunteersPage-volunteerfor-card-container">
                        <div className="VolunteersPage-card">
                            <Card our_volunteers image="var(--volunteers-workspace)" title="Currently Employed Statisticians" description="Statisticians who are currently working are valuable contributors to our projects.  Volunteers cannot participate in projects where there is a conflict of interest but are eligible for any projects that do not conflict with their job." />
                        </div>
                        <div className="VolunteersPage-card">
                            <Card our_volunteers image="var(--volunteers-students)" title="Students" description="Although SWB cannot provide statistical training or classes, any students who are looking or real-world experience are welcome to volunteer on our projects" />
                        </div>
                    </div>
                    <div className="VolunteersPage-volunteerfor-card-container">
                        <div className="VolunteersPage-card">
                            <Card our_volunteers image="var(--volunteers-chill)" title="Retirees" description="Anyone who has retired and who would like to continue working in teh statistical community.  SWB accepts projects across multiple disciplines and has a need for any volunteers with years of experience in their specific areas." />
                        </div>
                        <div className="VolunteersPage-card">
                            <Card our_volunteers image="var(--volunteers-community)" title="Non-statisticians" description="Anyone who has knowledge or experience  in related fields (data science, CS, genetics, etc.) and would like more experience working on statistical projects are welcome to volunteer." />
                        </div>
                    </div>
                    </div>
                <div className="VolunteersPage-section">
                    <div className="VolunteersPage-hiw-container">
                    <HowItWorks />
                    </div>
                </div>
                <div className="VolunteersPage-section VolunteersPage-worktogether">
                <h2 className="VolunteersPage-section-title">Let's Work Together!</h2>
                <FormContact volunteer formCallback />
                </div>
            </div>
        )
    }
}

export default VolunteersPage
