import React from 'react';
import { storiesOf } from '@storybook/react';
import MemberCard from './MemberCard';


storiesOf('MemberCard', module)
    .add('MemberCard', () =>{
      return <MemberCard image="var(--about-jean)" name="Jean Opsomer" position="Chair" about="Jean Opsomer is Professor and Chair in the Department of Statistics at Colorado State University. His main areas of statistical expertise are survey statistics and nonparametric methods. He is delighted to be able to assist SWB as it continues to expand its operations and develops a more effective organizational structure."/>
    }
)
    .add('MemberCard', () => {
      return <MemberCard />
    })
    .add('MemberCard', () => {
      return <MemberCard />
    })   .add('MemberCard', () => {
      return <MemberCard />
    })   .add('MemberCard', () => {
      return <MemberCard />
    })   .add('MemberCard', () => {
      return <MemberCard />
    })   .add('MemberCard', () => {
      return <MemberCard />
    })   .add('MemberCard', () => {
      return <MemberCard />
    })   .add('MemberCard', () => {
      return <MemberCard />
    })


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