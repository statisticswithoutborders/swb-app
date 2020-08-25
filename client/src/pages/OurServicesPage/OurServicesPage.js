import React from 'react';
import "./OurServicesPage.css";
import Service from "../../components/Service/Service.js"


const OurServicesPage = (props) => {

  let classList = `OurServicesPage`;


  return (
    <div className={classList}>
      <div class="title-services">
        <h1>What We Do</h1>
      </div>
      <div class="intro-services">
        <p>We work to improve decision making and knowledge in efforts that promote welfare through the proper
        application of statistical principles and best practices, where access to such resources is limited.
        </p>
      </div>
      <div class="section-services">
        <Service
          title="Data Science Consulting"
          description="Our projects are the core of our mission. Throught these projects, we help workers in
          resource-limited settings who do not have statistical training by partnering them with
          professional and student statisticians. The scope of our work is diverse, ranging from
          survey design to analysis to efforts to provide statistical software for developing nations."
          image="var(--services-consulting)"
          alt="Services: Data Science Consulting"
        />
      </div>
      <div class="section-services">
        <Service
          title="Monitoring &amp; Evaluation"
          description="Our projects are the core of our mission. Through these projects we help workers in
          resource-limited settings who do not have statistical training by partnering them with
          professional and student statisticians. The scope of our work is diverse, ranging from
          survey design to analysis to efforts to provide statistical software for developing nations."
          image="var(--services-monitor)"
          alt="Services: Monitoring &amp; Evaluation"
        />
      </div>
      <div class="section-services">
        <Service
          title="Dashboard Data"
          description="Our projects are the core of our mission. Through these projects we help workers in
          resource-limited settings who do not have statistical training by partnering them with 
          professional and student statisticians. The scope of our work is diverse, ranging from
          survey design to analysis to efforts to provide statistical software for developing nations."
          image="var(--services-dashboard)"
          alt="Services: Dashboard Data"
        />
      </div>
      <div class="section-services">
        <Service
          title="Survey Sampling"
          description="Our projects are the core of our mission. Through these projects we help workers in
          resource-limited settings who do not have statistical training by partnering them with 
          professional and student statisticians. The scope of our work is diverse, ranging from
          survey design to analysis to efforts to provide statistical software for developing nations."
          image="var(--services-survey)"
          alt="Services: Survey Sampling"
        />
      </div>
      <div class="section-services">
        <Service
          title="Data Analysis"
          description="Our projects are the core of our mission. Through these projects we help workers in
          resource-limited settings who do not have statistical training by partnering them with 
          professional and student statisticians. The scope of our work is diverse, ranging from
          survey design to analysis to efforts to provide statistical software for developing nations."
          image="var(--services-data-analysis)"
          alt="Services: Data Analysis"
        />
      </div>
      <div class="section-services">
        <Service
          title="Statistical Model"
          description="Our projects are the core of our mission. Through these projects we help workers in
          resource-limited settings who do not have statistical training by partnering them with 
          professional and student statisticians. The scope of our work is diverse, ranging from
          survey design to analysis to efforts to provide statistical software for developing nations."
          image="var(--services-stat-model)"
          alt="Services: Statistical Model"
        />
      </div>
    </div>
  );
}

export default OurServicesPage;