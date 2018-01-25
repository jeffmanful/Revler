import React from 'react'


import Link from 'gatsby-link'
import Scrollspy from 'react-scrollspy'

import { Screen, ScreenSlice } from 'react-screen';
// import { FullPage, Slide } from 'react-full-page';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';



// import styles from '../../node_modules/react-screen/dist/react-screen.css'



import Homepage from './homepage/index'
import TermsOfUsePage from './termsOfUse/index'
import HowItWorksPage from './howItWorks/index'
import ContactUsPage from './contact/index'

import styles from '../../node_modules/react-screen/dist/react-screen.css';

import 'bootstrap/dist/css/bootstrap.css';

import './app.css'

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 200,
  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 1000,
  hideScrollBars: true,
  enableArrowKeys: true
};

// const slides = [
//   <Slide><Homepage/></Slide>,
//   <Slide><HowItWorksPage/></Slide>,
//   <Slide><TermsOfUsePage /></Slide>,
//   <Slide><ContactUsPage /></Slide>
// ];
//
// fullPageOptions.slides = slides

class IndexPage extends React.Component {
  render(){
    return(

        // <Fullpage {...fullPageOptions} />
        <Screen showSkip={false} sliceHeight={100} delay={600}>
          <ScreenSlice>
            <Homepage/>
          </ScreenSlice>
          <ScreenSlice>
            <HowItWorksPage/>
          </ScreenSlice>
          <ScreenSlice>
            <TermsOfUsePage/>
          </ScreenSlice>
          <ScreenSlice>
            <ContactUsPage/>
          </ScreenSlice>
      </Screen>

    )
  }
}

export default IndexPage
