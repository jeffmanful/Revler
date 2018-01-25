import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
//import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Screen, ScreenSlice } from 'react-screen';
import stylesLayout from './layouts.module.css'
import menuIcon from './menu_icon.png'

import { FullPage, Slide } from 'react-full-page';




import './index.css'
// import { convertReactPropstoHtmlAttributes } from 'react-helmet/lib/HelmetUtils';






const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet
      title="Revler"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

        {children()}
    </div>




)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
