import React from 'react'
import Link from 'gatsby-link'

import Map from '../../components/Map'
import Form from '../../components/Form'

import Logo from '../Logo.png'

class ContactUsPage extends React.Component {
  render(){
    return (
      <div className="section" id="contactPage" style={{  }}>
        <img src={Logo} className="section-logo" />
        <h1>Contact Us</h1>
        <Map/>
        <Form/>
      </div>
    )
  }

}

export default ContactUsPage
