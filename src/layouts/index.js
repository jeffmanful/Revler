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
import OverScroll from 'react-over-scroll'

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


const Header = () => (
  <div>
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        padding: '1.45rem 1.0875rem',
      }}
    >

    </div>
  </div>
)

const Nav = () => (
  <div className={stylesLayout.navbar}>
    <ul>
        <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4','section-5','section-6','section-7','section-8','section-9','homepage', 'howItWorksPage','termsOfUsePage','contactPage'] }
                    currentClassName={stylesLayout.current}
                    scrolledPastClassName={stylesLayout.scrolled}
                    className={stylesLayout.navbarList}
                    >
              <img src={menuIcon} className={stylesLayout.menuIcon} />
              <li><Scrollchor to='#homepage'><a>01 Home page</a></Scrollchor></li>
              <li><a href="#section-1" ><div className={stylesLayout.dot}></div></a></li>
              <li><a href="#section-2"><div className={stylesLayout.dot}></div></a></li>
              <li><a href="#section-3"><div className={stylesLayout.dot}></div></a> </li>
              <li><Scrollchor to='#howItWorksPage'><a>02 How it works</a></Scrollchor></li>
              <li> <a href="#section-4"><div className={stylesLayout.dot}></div></a></li>
              <li> <a href="#section-5"><div className={stylesLayout.dot}></div></a></li>
              <li> <a href="#section-6"><div className={stylesLayout.dot}></div></a> </li>
              <li><Scrollchor to="#termsOfUsePage" ><a>03 Terms of use</a></Scrollchor></li>
              <li> <a href="#section-7"><div className={stylesLayout.dot}></div></a></li>
              <li> <a href="#section-8"><div className={stylesLayout.dot}></div></a></li>
              <li> <a href="#section-9"><div className={stylesLayout.dot}></div></a> </li>
              <li><Scrollchor to="#contactPage"><a>04 Contact Us</a></Scrollchor></li>
              <li> <a href="#section-10"><div className={stylesLayout.dot}></div></a></li>
              <li> <a href="#section-11"><div className={stylesLayout.dot}></div></a></li>
              <li> <a href="#section-12"><div className={stylesLayout.dot}></div></a> </li>
        </Scrollspy>
    </ul>
  </div>
)

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
