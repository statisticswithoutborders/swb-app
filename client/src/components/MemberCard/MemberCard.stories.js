import React from 'react';
import { storiesOf } from '@storybook/react';
import MemberCard from './MemberCard';


storiesOf('MemberCard', module)
    .add('Jean Opsomer', () =>{
      return <MemberCard image="var(--about-jean)" name="Jean Opsomer" position="Chair" about="Jean Opsomer is Professor and Chair in the Department of Statistics at Colorado State University. His main areas of statistical expertise are survey statistics and nonparametric methods. He is delighted to be able to assist SWB as it continues to expand its operations and develops a more effective organizational structure."/>
    }
)
    .add('Jae Brodsky', () => {
      return <MemberCard image="var( --about-jae)" name="Jae Brodsky" position="Vice Chair" about="Jae Brodsky works in statistical genetics on problems in machine learning, big data analysis, and Bayesian techniques. She has a Ph.D. in statistics from UCLA and previously worked at the FDA." />
    })
    .add('Davina Durgana', () => {
      return <MemberCard image="var(--about-davina)" name="Davina Durgana" position="Vice-Chair Elect" about="
      Davina P. Durgana, PhD is an award-winning international human rights statistician who has developed leading global models to assess risk and vulnerability to modern slavery. Dr. Durgana is a Report Co-Author and Senior Statistician on the Global Slavery Index of the Minderoo Foundation’s Walk Free Initiative..." />
    })   
    .add('David Whitford', () => {
      return <MemberCard image="var(--about-david)" name="David Whitford" position="Engagement Director" about="
      David Whitford was formerly with the U.S Census Bureau and led the division of statisticians responsible for statistical aspects of the Decennial Censuses and the monthly American Community Survey. He currently provides consultation on survey methodology to developing countries, governments, and NGOs. His interests are dual system estimation, record linkage, R, tennis, and travel."/>
    })   
    .add('Smita Skrivanek', () => {
      return <MemberCard image="var(--about-smita)" name="Smita Skrivanek" position="Operations Director" about="
      Smita Skrivanek works in the field of quality and continuous improvement and consults on process improvement projects. She is interested in human rights, animal rights, environmental and social justice issues."/>
    })   
    // .add('MemberCard', () => {
    //   return <MemberCard image name position about/>
    // })   .add('MemberCard', () => {
    //   return <MemberCard image name position about/>
    // })   .add('MemberCard', () => {
    //   return <MemberCard image name position about/>
    // })   .add('MemberCard', () => {
    //   return <MemberCard image name position about/>
    // })


// --about-swb: url("./assets/images/about_swb_two_people.png");

//   --about-jae: url("./assets/images/about_jae_brodsky.png");
//   --about-davina: url("./assets/images/about_davina_durgana.png");
//   --about-david: url("./assets/images/about_david_whitford.png");
//   --about-smita: url("./assets/images/about_smita_skrivanek.png");
//   --about-matt: url("./assets/images/about_matt_brems.png");
//   --about-cathy: url("./assets/images/about_cathy_furlong.png");
//   --about-gary: url("./assets/images/about_gary_shapiro.png");
//   --about-steve: url("./assets/images/about_steve_pierson.png");
//   --about-give-heart: url("./assets/images/about_give_heart.png");
//   --about-receive-heart: url("./assets/images/about_receive_heart.png");