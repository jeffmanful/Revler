// crete a carousel for the tutorial on smalller screens
import React from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  UncontrolledCarousel
} from 'reactstrap'

// import the image urls for the slider
import stepOne from '../Carousel/match.png'
import stepTwo from '../Carousel/profile.png'
import stepThree from '../Carousel/matched2.png'
import stepFour from '../Carousel/chat.png'
import stepFive from '../Carousel/chats.png'

import styles from './ReactstrapCarousel.module.css'

/*
* The issue is the first image will always be bigger so will have to swap the components inside the how it works page
* based on screen size.
*/

const items = [
  {
    src: stepOne,
    altText: 'Chat with nearby people anonymously',
    caption: 'Chat with nearby people anonymously',
  },
  {
    src: stepTwo,
    // altText: 'The chat ends after 15mins and your profile is revealed',
    caption: 'The chat ends after 15mins and your profile is revealed',
  },
  {
    src: stepThree,
    // altText: 'If you both swipe you match!',
    caption: 'If you both swipe you match!',
  },
  {
    src: stepFour,
    // altText: 'If you match you can continue the conversation where you left off',
    caption: 'If you match you can continue the conversation where you left off',
  },
  {
    src: stepFive,
    // altText: 'You can have up to 3 anonymous chats at the same time',
    caption: 'You can have up to 3 anonymous chats at the same time',
  },

];

class MobileCarousel extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { activeIndex: 0 };
    // this.next = this.next.bind(this);
    // this.previous = this.previous.bind(this);
    // this.goToIndex = this.goToIndex.bind(this);
    // this.onExiting = this.onExiting.bind(this);
    // this.onExited = this.onExited.bind(this);
  }

  render(){
    return(
      <div className={styles.mobileCarouselContainer}>
        <UncontrolledCarousel items={items} />
      </div>
    )
  }
}

export default MobileCarousel
