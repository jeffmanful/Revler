import React from 'react'


import display from '../Display_Style_05.png'
import logo from '../Logo.png'
import icon from '../icon_arrow.png'
import email from '../ic_email.png'
import letMeKnowButton from '../Let_me_know_button.png'
import appIcon from '../apps_icon.png'

import styles from './homepage.module.css'


const Homepage = () => (

        <div className="section section-homepage" id="homepage">
          <div className="section-body">

            <img src={logo} className="main-logo"></img>
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
            <img src={icon} className="submit-email-arrow" />

            <input type="text" name="submitEmail" placeholder="email" className="submit-email-form"></input>
            </div>

            <button className="let-me-know-button">Let me know</button>
            <div className="store-buttons">
               <h5 style={{color:'white'}}>Very soon on</h5>
              <img src={appIcon} />
            </div>
          </div>
          <div className="section-side-image" >
            <img src={display}/>
          </div>

        </div>

    )



export default Homepage