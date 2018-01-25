import React from 'react'
import Link from 'gatsby-link'
import { Button, Form as ReactForm, FormGroup, Label, Input, FormText } from 'reactstrap';


import styles from './form.module.css'


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
        return <a href='mailto:support@revleronline.com?subject=Subscribe&body=email' className={styles.mobileSubmit}><div className={styles.mobileButton}>Send</div></a>
      }
      return <Button className={styles.mobileButton}>Send</Button>;
    }
    return (
      <ButtonSwitch />
    )

  }
}

class Form extends React.Component  {

  render(){
    return (
      <div>
        <div className={styles.formContainer}>
          <p>Comments, questions, complaints, suggestions, or maybe you're
            just saying hello? Leave us an email, and we'll get back to you!
          </p>
          <ReactForm action="mailto:support@revleronline.com" method="post" enctype="text/plain">
            <FormGroup>
              <Input type='email' name='email' placeholder='Email' className={styles.email} />
            </FormGroup>
            <FormGroup>
              <Input type="textarea" name="selectMulti" id="exampleSelectMulti" placeholder='Your message' multiple className={styles.message} />
            </FormGroup>
              <SubmitButton />
          </ReactForm>
      </div>

      {/* <div className={styles.formContainer}>
        <p>Comments, questions, complaints, suggestions, or maybe you're
          just saying hello? Leave us an email, and we'll get back to you!
        </p>
        <form action="mailto:support@revleronline.com" method="post" enctype="text/plain">
          <input type="text" name="email" placeholder="Email" className={styles.email} />
          <textarea type="text" name="message" placeholder="Your message" className={styles.message}  /><br/>
          <input type="submit" value="Send" className={styles.button} />
        </form>
      </div> */}
      </div>
    )
  }
}

export default Form
