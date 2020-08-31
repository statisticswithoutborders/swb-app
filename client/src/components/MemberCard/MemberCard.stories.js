import React from 'react';
import { storiesOf } from '@storybook/react';
import MemberCard from './MemberCard';
import "../../index.css"
import StoryRouter from 'storybook-react-router'
import IconDownArrow from "../IconDownArrow/IconDownArrow"



storiesOf('MemberCard', module)
    .addDecorator(StoryRouter())
    .add('Jean Opsomer', () =>{
      return <MemberCard image="var(--about-jean)" name="Jean Opsomer" position="Chair" about="Jean Opsomer is Professor and Chair in the Department of Statistics at Colorado State University. His main areas of statistical expertise are survey statistics and nonparametric methods. He is delighted to be able to assist SWB as it continues to expand its operations and develops a more effective organizational structure." />
    }
)
    .add('Jae Brodsky', () => {
      return <MemberCard image="var( --about-jae)" name="Jae Brodsky" position="Vice Chair" about="Jae Brodsky works in statistical genetics on problems in machine learning, big data analysis, and Bayesian techniques. She has a Ph.D. in statistics from UCLA and previously worked at the FDA." />
    })
    .add('Davina Durgana', () => {
      return <MemberCard image="var(--about-davina)" name="Davina Durgana" position="Vice-Chair Elect" about="
      Davina P. Durgana, PhD is an award-winning international human rights statistician who has developed leading global models to assess risk and vulnerability to modern slavery. Dr. Durgana is a Report Co-Author and Senior Statistician on the Global Slavery Index of the Minderoo Foundation’s Walk Free Initiative...   Voluptate magna dolor ex aliquip. Magna fugiat mollit ad consectetur cupidatat ea enim esse ut quis laboris cillum. Laboris minim eu ex mollit culpa eu do tempor fugiat quis eu. Magna dolore eiusmod proident reprehenderit laborum laboris qui fugiat ea elit. Fugiat qui incididunt fugiat Lorem.The End" IconDownArrow />
    })   
    .add('David Whitford', () => {
      return <MemberCard image="var(--about-david)" name="David Whitford" position="Engagement Director" about="
      David Whitford was formerly with the U.S Census Bureau and led the division of statisticians responsible for statistical aspects of the Decennial Censuses and the monthly American Community Survey. He currently provides consultation on survey methodology to developing countries, governments, and NGOs. His interests are dual system estimation, record linkage, R, tennis, and travel."/>
    })   
    .add('Smita Skrivanek', () => {
      return <MemberCard image="var(--about-smita)" name="Smita Skrivanek" position="Operations Director" about="
      Smita Skrivanek works in the field of quality and continuous improvement and consults on process improvement projects. She is interested in human rights, animal rights, environmental and social justice issues."/>
    })   
    .add('Matt Brems', () => {
      return <MemberCard image="var(--about-matt)" name="Matt Brems" position="Marketing & Communications Director" about="
      Matt Brems works at General Assembly as a data science instructor and is managing partner of a consultancy, BetaVector. He is interested in data visualization, missing data, and Python programming. He holds a Master's degree in statistics from The Ohio State University." />
    })   
    .add('Cathy Furlong', () => {
      return <MemberCard image="var(--about-cathy)" name="Cathy Furlong" position="Past Chair (emeritus)" about="
      Client acquisition co-chair. Cathy Furlong is currently employed in the Medicare fraud industry where she works on data mining, sampling/extrapolations, and Administrative Law Hearings with Medicare data. She holds a Masters in Statistics from American University. Her areas of interest are human rights and nature. Other areas of volunteer work are as a Fair Fax County Master Gardener, on the Glen Echo Park Waltz Committee, and with the Caucus for Women in Statistics." />
    })  
     .add('Gary Shapiro', () => {
      return <MemberCard image="var(--about-gary)" name="Gary Shapiro" position="Co-Founder" about="Currently the new client acquisition co-chair. Gary Shapiro is retired from Westat, where he was Senior Statistician from 1996 to 2009. Gary was the lead statistician, senior statistician, or/and task leader on over 30 projects, mostly involving survey sample design, weighting, and variance estimation. Prior to being at Westat, Gary was a Senior Statistician at Abt Associates from 1993 to 1996, where he was the lead statistician for a number of surveys. From 1965 to 1993 Gary was at the US..." IconDownArrow  />
    })   
    .add('Steve Pierson', () => {
      return <MemberCard image="var(--about-steve)" name="Steve Pierson" position="Co-Founder" about="And also an ASA ex officio board member. Steve has been ASA Director of Science Policy since March, 2008. Previously, he was Head of Government Relations for the American Physical Society and Associate Professor of Physics at Worcester Polytechnic Institute in Worcester, MA."/>
    })
