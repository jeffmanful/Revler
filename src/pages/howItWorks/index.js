import React from 'react'
import Link from 'gatsby-link'

import Carousel from '../../components/Carousel'

import styles from './howItworks.module.css'
import logo from './Logo-293w.png'



// pass the props for the onClick event on the arrows
//


const HowItWorksPage = () => (
  <div className="section" id="howItWorksPage">
    <img src={logo} className={styles.logo} />

    <div className={styles.sectionTitle}>
      <h1>How it works</h1>
    </div>

    <Carousel/>

    <p className={styles.revealed}>We want to help you meet people in  a more meaningful way! Every conversation
      is anonymous at first but when the times up, the mystery is <span style={{color:'gold'}}>Revealed!</span>
    </p>

  </div>

)

export default HowItWorksPage
