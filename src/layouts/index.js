import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
//import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollchor from 'react-scrollchor';
import Scrollspy from 'react-scrollspy'

import { Screen, ScreenSlice } from 'react-screen';


import stylesLayout from './layouts.module.css'

import menuIcon from './menu_icon.png'

import Sidebar from '../components/Sidebar'


import './index.css'
import { convertReactPropstoHtmlAttributes } from 'react-helmet/lib/HelmetUtils';


import Homepage from '../pages/homepage/index'
import TermsOfUsePage from '../pages/termsOfUse/index'
import HowItWorksPage from '../pages/howItWorks/index'
import ContactUsPage from '../pages/contact/index'

const pages =[
  // <Homepage/>
  // <HowItWorksPage/>
  // <TermsOfUsePage />
  // <ContactUsPage/>
]


const TemplateWrapper = ({ children }) => (
  <div style={{backgroundColor:"#24272C", overflow:"hidden", minHeight:"100vh"}}>
    <Helmet
      title="Revler"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100%',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
        {children()}
    </div>
  </div>

)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
