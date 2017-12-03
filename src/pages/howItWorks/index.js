import React from 'react'
import Link from 'gatsby-link'

import Carousel from '../../components/Carousel'

import styles from './howItworks.module.css'
import logo from '../Logo.png'



// pass the props for the onClick event on the arrows
//


const HowItWorksPage = () => (
  <div className="section" id="howItWorksPage">
    <img src={logo} className="section-logo" />
    <section id="section-4"></section>
    <div className={styles.sectionTitle}>
      <h1>How it works</h1>
    </div>
    <section id="section-5"></section>
    <Carousel/>
    <section id="section-6"></section>
    <p className={styles.revealed}>We want to help you meet people in  a more meaningful way! Every conversation
      is anonymous at first but when the times up, the mystery is <span style={{color:'gold'}}>Revealed!</span>
    </p>

  </div>

)

export default HowItWorksPage
