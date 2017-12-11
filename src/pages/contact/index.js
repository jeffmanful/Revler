import React from 'react'
import Link from 'gatsby-link'
//import Map from '../../components/Map'
import Form from '../../components/Form'

import Logo from '../Logo.png'
import Map from './map.png'

import styles from './contact.module.css'

const ContactUsPage = () => (
      <div className="section" id="contactPage">
        <img src={Logo} className="section-logo" />
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.contactContainer}>
          <Form/>
        </div>

        {/* <Map/> */}

      </div>
)


export default ContactUsPage
