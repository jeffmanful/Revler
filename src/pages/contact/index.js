import React from 'react'
import Link from 'gatsby-link'

import Map from '../../components/Map'
import Form from '../../components/Form'

import Logo from '../Logo.png'

import styles from './contact.module.css'

class ContactUsPage extends React.Component {
  render(){
    return (
      <div className="section" id="contactPage" >
        <img src={Logo} className="section-logo" />
        <h1 className={styles.title}>Contact Us</h1>
        <Map/>
        <Form/>
      </div>
    )
  }

}

export default ContactUsPage
