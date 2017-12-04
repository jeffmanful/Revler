import React from 'react'
import Link from 'gatsby-link'

import TextCarousel from './textCarousel'

import styles from './termsOfUse.module.css'

import right from './arrow_right.png'
import left from './arrow_left.png'
import logo from '../Logo.png'

// import the page text from the text.js file then load in the state.

class TermsOfUsePage extends React.Component {
    render() {
      return (
        <div className="section" id="termsOfUsePage" >
          <img src={logo} className="section-logo" />
          <h1 className={styles.title}>Terms of service and private policy </h1>
          <div style={{width:'100%', background:'transparent'}}><TextCarousel/></div>

        </div>
      )
    }

}



export default TermsOfUsePage
