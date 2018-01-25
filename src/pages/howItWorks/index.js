import React from 'react'
import Link from 'gatsby-link'

import Carousel from '../../components/Carousel'
import Horizontal from 'react-scroll-horizontal'
import MobileCarousel from '../../components/MobileCarousel'



import styles from './howItworks.module.css'
import logo from './Logo-293w.png'


class HowItWorksPage extends React.Component {
  constructor(props) {
    super(props);
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

    const CarouselSwitch = () => {
      if (width <= 668) {
        return <MobileCarousel />;
      }
      return <Carousel />

    }

    return (
      <div className="section" id="howItWorksPage">
        <img src={logo} className={styles.logo} />

        <div className={styles.sectionTitle}>
          <h1>How it works</h1>
        </div>

        <CarouselSwitch />

        <p className={styles.revealed}>We want to help you meet people in  a more meaningful way! Every conversation
          is anonymous at first but when the times up, the mystery is <span style={{color:'gold'}}>Revealed!</span>
        </p>

      </div>
    )
  }
}


export default HowItWorksPage
