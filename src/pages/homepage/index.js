import React from 'react'

import styles from './homepage.module.css'

// import display from '../Display_Style_05.png'
import display from './Display_Style_05.png'
import displayLarger from './Display_Style_05@2x.png'
import displayLargest from './Display_Style_05@3x.png'

import logo from './Logo.png'
import logo293 from './Logo-293w.png'
import logo568 from './Logo-586w.png'
import logo879 from './Logo-879w.png'
import icon from '../icon_arrow.png'
import email from '../ic_email.png'
import letMeKnowButton from '../Let_me_know_button.png'
import appIcon from '../apps_icon.png'





const Homepage = () => (
        <div className="section section-homepage" id="homepage">
          <div className="section-body">
            {/* <img src={logo} className="main-logo"></img> */}
            <img src={logo293} className="main-logo"></img>
            <div className="tagline"><h1>Time to make a meaningful match</h1></div>
            <div className="introduction">
              <p className="introduction-text">
              We haven’t launched yet, but we will let you know as soon as we
              do just leave your email below and we’ll get back to you!
            </p>
            </div>

            <div className="submit-email">
              {/* <p className="submit-email-label">
                YOUR EMAIL HERE
              </p> */}

              <img src={email} className="submit-email-icon" />

              <form action="mailto:jeffrey.manful@gmail.com" method="post" enctype="text/plain" className={styles.form} style={{marginBottom:0}}>
                <input type="text" name="submitEmail" placeholder="E-mail" className={styles.submitEmailInput}></input>
                <input className={styles.submit} type="submit" value='Let me know' />
              </form>


            </div>
            {/* <button className="let-me-know-button">Let me know</button> */}

            <div className="store-buttons">
               <h5 style={{color:'white'}}>Very soon on</h5>
              <img src={appIcon} />
            </div>
          </div>

            <img src={display} className={styles.sideImage}/>

        </div>
    )



export default Homepage
