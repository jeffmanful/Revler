import React from 'react'


import Link from 'gatsby-link'
import Scrollspy from 'react-scrollspy'

import { Screen, ScreenSlice } from 'react-screen';
import styles from '../../node_modules/react-screen/dist/react-screen.css'


import Homepage from './homepage/index'
import TermsOfUsePage from './termsOfUse/index'
import HowItWorksPage from './howItWorks/index'
import ContactUsPage from './contact/index'



import 'bootstrap/dist/css/bootstrap.css';

import './app.css'


class IndexPage extends React.Component {
  render(){
    return(
      <div>
        <Screen showSkip={false} sliceHeight={300}>
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
      </div>
    )
  }
}

export default IndexPage
