import React from 'react'
import Link from 'gatsby-link'

import styles from './termsOfUse.module.css'

import right from './arrow_right.png'
import left from './arrow_left.png'
import logo from '../Logo.png'

// import the page text from the text.js file then load in the state.

class TermsOfUsePage extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        currentPage : 1
      }
    }
    render() {
      let currentPage = this.state.currentPage


      return (
        <div className="section" id="termsOfUsePage">
          <section id="section-7"></section>
          <img src={logo} className="section-logo" />
          <h1 className={styles.title}>Terms of service and private policy </h1>
          <div className={styles.textBox} >

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum. Sit amet porttitor eget dolor morbi. Nunc faucibus a pellentesque sit amet porttitor eget. Dui ut ornare lectus sit amet est placerat in egestas. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Cursus eget nunc scelerisque viverra. Ipsum nunc aliquet bibendum enim facilisis gravida. Tincidunt ornare massa eget egestas. Leo a diam sollicitudin tempor id eu nisl nunc. Volutpat est velit egestas dui. Quis auctor elit sed vulputate mi sit amet.

              Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Id semper risus in hendrerit gravida rutrum quisque non. Feugiat in fermentum posuere urna nec tincidunt praesent. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus mattis molestie a iaculis at erat pellentesque. Odio facilisis mauris sit amet massa vitae. Mattis aliquam faucibus purus in massa tempor nec. Venenatis tellus in metus vulputate. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Vivamus at augue eget arcu dictum. Volutpat est velit egestas dui id ornare arcu odio ut. Lorem ipsum dolor sit amet consectetur adipiscing. Sollicitudin nibh sit amet commodo nulla. Eget nunc lobortis mattis aliquam faucibus. Risus ultricies tristique nulla aliquet enim. Id ornare arcu odio ut sem nulla. Fermentum odio eu feugiat pretium. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. In mollis nunc sed id semper.

              <br />
              Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Id semper risus in hendrerit gravida rutrum quisque non. Feugiat in fermentum posuere urna nec tincidunt praesent. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus mattis molestie a iaculis at erat pellentesque. Odio facilisis mauris sit amet massa vitae. Mattis aliquam faucibus purus in massa tempor nec. Venenatis tellus in metus vulputate. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Vivamus at augue eget arcu dictum. Volutpat est velit egestas dui id ornare arcu odio ut. Lorem ipsum dolor sit amet consectetur adipiscing. Sollicitudin nibh sit amet commodo nulla. Eget nunc lobortis mattis aliquam faucibus. Risus ultricies tristique nulla aliquet enim. Id ornare arcu odio ut sem nulla. Fermentum odio eu feugiat pretium. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. In mollis nunc sed id semper.

            </p>


            <section id="section-8"></section>
          </div>

          <div className={styles.carouselControls}>
            <img src={left} onClick={this.prevImage} />
            <section id="section-9"></section>
            <p>Step {currentPage} of 26 </p>
            <img src={right} onClick={this.nextImage} />
          </div>

        </div>
      )
    }
}



export default TermsOfUsePage
