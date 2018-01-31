import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import styles from './homepage.module.css'


import display from './Display_Style_05.png'
import logo from './Logo.png'
import logo293 from './Logo-293w.png'

import icon from '../icon_arrow.png'
import email from '../ic_email.png'
import appIcon from '../apps_icon.png'


class SubmitButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    let width = this.state.width
    const ButtonSwitch = () => {
      if (width <= 768) {
        return <a href='mailto:support@revleronline.com?subject=Subscribe&body=email' className={styles.mobileSubmit}><div className={styles.mobileButton}>Subscribe now!</div></a>
      }
      return <Button className={styles.submit}>Subscribe now!</Button>;
    }
    return (
      <ButtonSwitch />
    )

  }
}


const Homepage = () => (
        <div className="section section-homepage" id="homepage">
          <div className="section-body">
            {/* <img src={logo} className="main-logo"></img> */}
            <img src={logo293} className="main-logo"></img>
            <div className="tagline"><h1>Time to make a meaningful match</h1></div>
            <div className="introduction">
              <p className="introduction-text">
                Coming soon!
                We haven't launched yet, but sign up to be the first to get onboard. Simply leave your email below and we'll be in touch soon!
            </p>
            </div>

            <div className={styles.submitEmail}>
              <img src={email} className={styles.submitEmailIcon} />
              <Form action="https://formspree.io/support@revleronline.com" method="post" enctype="text/plain" className={styles.form}>
                <FormGroup >
                  <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" className={styles.submitEmailInput} />
                  <SubmitButton />
                </FormGroup>
              </Form>
            </div>

            <div className="store-buttons">
               <h5 style={{color:'white'}}>Coming very soon!</h5>
              <img src={appIcon} />
            </div>
          </div>
          <img src={display} className={styles.sideImage}/>

        </div>
    )



export default Homepage
