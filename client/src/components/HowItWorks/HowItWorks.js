import React from 'react';
import "./HowItWorks.css";
import volunteersReview from '../../assets/images/volunteers_review.png'
import volunteersEmailReceive from '../../assets/images/volunteers_email_receive.png'
import volunteersEmailRespond from '../../assets/images/volunteers_email_respond.png'
import volunteersCrown from '../../assets/images/volunteers_crown.png'
import volunteersPath from '../../assets/images/volunteers_path.png'

// Function based React Component
const HowItWorks = (props) => {

  // Default Class to apply to Component
  let classList = `HowItWorks`;


  return(
    <div className={classList}>
      <h2>How It Works</h2>
      <div className="HowItWorks-body-container">
        <div className="HowItWorks-step-image-container-top">
          <img className="HowItWorks-step-image" src={volunteersReview} />
          <img className="HowItWorks-step-image" src={volunteersEmailRespond} />
        </div>
        <div className="HowItWorks-step-image-container-bottom">
          <img className="HowItWorks-step-image" src={volunteersEmailReceive} />
          <img className="HowItWorks-step-image" src={volunteersCrown} />
        </div>
        <div className="HowItWorks-path-container" >
          <img className="HowItWorks-path-image" src={volunteersPath} />
        </div>
        <div className="HowItWorks-details-container" >
          <div className="HowItWorks-detail">
            <div className="HowItWorks-detail-header">
              <h3 className="HowItWorks-detail-title">
                Fill Out The Application Form
              </h3>
              <div className="HowItWorks-detail-header-imgcontainer">
                <img src={volunteersReview} />
              </div>
            </div>
            <p className="HowItWorks-detail-body">Contacting us to match with appropriate volunteer projects.</p>
          </div> 
          <div className="HowItWorks-detail">
            <div className="HowItWorks-detail-header">
              <h3 className="HowItWorks-detail-title">
                Receive An Email About Projects
              </h3>
              <div className="HowItWorks-detail-header-imgcontainer">
                <img src={volunteersEmailRespond} />
              </div>
            </div>
            <p className="HowItWorks-detail-body">SWB sends out calls for volunteers via email when a new project is starting or when additional members are needed for one of the teams working on non-project tasks. A call for volunteers contains a description of the project or task, how long it is expected to last, and if any expertise or background is needed.</p>
          </div> 
          <div className="HowItWorks-detail">
            <div className="HowItWorks-detail-header">
              <h3 className="HowItWorks-detail-title">
                Respond To The Call
              </h3>
              <div className="HowItWorks-detail-header-imgcontainer">
                <img src={volunteersEmailReceive} />
              </div>
            </div>
            <p className="HowItWorks-detail-body">To volunteer for a project, simply respond to the call for volunteers. When a project or task is staffed, a second email announcing that the call is closed is sent to all SWB volunteers.</p>
          </div> 
          <div className="HowItWorks-detail">
            <div className="HowItWorks-detail-header">
              <h3 className="HowItWorks-detail-title">
                Become An Executive
              </h3>
              <div className="HowItWorks-detail-header-imgcontainer">
                <img src={volunteersCrown} />
              </div>
            </div>
            <p className="HowItWorks-detail-body">In addition, elections for the executive committee are held every two years and any SWB volunteer can be nominated or can nominate themselves for a position.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;