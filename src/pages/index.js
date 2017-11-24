import React from 'react'
import Link from 'gatsby-link'
import Scrollspy from 'react-scrollspy'

import TermsOfUsePage from './termsOfUse/index'
import HowItWorksPage from './howItWorks/index'
import ContactUsPage from './contact/index'

import './app.css'

import display from './Display_Style_05.png'
import logo from './Logo.png'
import icon from './icon_arrow.png'
import email from './ic_email.png'
import letMeKnowButton from './Let_me_know_button.png'
import appIcon from './apps_icon.png'

class IndexPage extends React.Component {
  render(){
    return(
      <div className="main" style={{paddingBottom: '8rem'}}>
        <div className="section section-homepage" id="homepage">
          <div className="section-body">
            <section id="section-1"></section>
            <img src={logo}></img>
            <div className="tagline"><h1>Time to make a meaningful match</h1></div>
            <div className="introduction">
              <p className="introduction-text">
              We haven’t launched yet, but we will let you know as soon as we
              do just leave your email below and we’ll get back to you!
            </p>
            </div>

            <div className="submit-email">
            <p className="submit-email-label">
              YOUR EMAIL HERE
            </p>
            {/* <img src={icon} className="submit-email-arrow" /> */}
            <img src={email} className="submit-email-icon" />
            <input type="text" name="submitEmail" placeholder="" className="submit-email-form"></input>
            </div>
            <section id="section-2"></section>
            <button className="let-me-know-button"><img src={letMeKnowButton}  /></button>
            <div className="store-buttons">
               <h5 style={{color:'white'}}>Very soon on</h5>
              <img src={appIcon} />
            </div>
          </div>
          <section id="section-3"></section>
          <img src={display} className="section-side-image"></img>
          {/* <div className="section-side">
          </div> */}

        </div>



        <HowItWorksPage/>
        <TermsOfUsePage/>
        <ContactUsPage/>



      </div>
    )
  }
}

export default IndexPage
