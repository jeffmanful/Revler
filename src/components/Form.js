import React from 'react'
import Link from 'gatsby-link'

import styles from './form.module.css'


class Form extends React.Component  {
  render(){
    return (
      <div className={styles.formContainer}>
        <p>Comments, questions, complaints, suggestions, or maybe you're
          just saying hello? Leave us an email, and we'll get back to you!
        </p>
        <form>
          <input type="text" name="email" placeholder="Email" className={styles.email} />
          <textarea type="text" name="message" placeholder="Your message" className={styles.message}  /><br/>
          <input type="submit" value="Send" className={styles.button} />
        </form>
      </div>
    )
  }
}

export default Form
