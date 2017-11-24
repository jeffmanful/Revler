import React from 'react'
import Link from 'gatsby-link'

import styles from './carousel.module.css'

import stepOne from '../pages/./Lara_copy.png'
import stepTwo from '../pages/You_can_only_see_each__others_photos_when_the_chat_ends_.png'
import stepThree from '../pages/4_5_Matched_.png'
import stepFour from '../pages/4_2_Chat_screen_2.png'
import stepFive from '../pages/3_copy.png'

import right from '../pages/howItWorks/arrow_right.png'
import left from '../pages/howItWorks/arrowleft.png'

const style = {
  width : 50 + '%'
}

const focusStyle = {
  width : 70 + '%'
}


class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.nextImage = this.nextImage.bind(this)
    this.prevImage = this.prevImage.bind(this)

    // I should store image date outside of state as it does not change
    this.state = {
      // store an array of images
      currentImage : 0,
      defaultWidth : '50%',
      focusWidth : '80%',
      images :  [
        {
          src : stepOne,
          isSelected : true,
          id : 1,
          width : '70%',
          body : "Chat with nearby people anonymously",
          scale : 1
        },
        {
          src: stepTwo,
          isSelected : false,
          id : 2,
          width : '70%',
          body : "The chat ends after 15mins and your profile is revealed",
          scale : 0.8

        },
        {
          src: stepThree,
          isSelected : false,
          id : 3,
          width : '70%',
          body: 'If you both swipe you match!',
          scale : 0.8

        },
        {
          src: stepFour,
          isSelected : false,
          id : 4,
          width : '70%',
          body : 'If you match you can continue the conversation where you left off',
          scale : 0.8

        },
        {
          src: stepFive,
          isSelected : false,
          id : 4,
          width : '70%',
          body : 'You can have up to 3 anonymous chats at the same time',
          scale : 0.8

        }
      ]
    }

  }

  componentDidMount() {
    this.setState({currentImage : 0})

    this.focusImage()
    //get thevalue from the state

  }

  // focus on the next image in the array
  nextImage(e){
    console.log('next image')
    let currentImage = this.state.currentImage

    currentImage = currentImage + 1
    // decremnt the value of currentImage

    // loop the value around if below range
    if (currentImage > 4){
      currentImage = 0

    }
    console.log(currentImage);

    this.setState({
      currentImage : currentImage
    })

    // focus on the currentImage
    this.focusImage()

    //this.currentImage--

  }

  prevImage(e){
    console.log('previous image')
    // load the images
    let currentImage = this.state.currentImage
    // decremnt the value of currentImage
    currentImage = currentImage - 1
    // loop the value around if below range
    if ( currentImage < 0 ) {
        currentImage = 4
    }
    //console.log(currentImage);

    // update currentImage state
    this.setState({
      currentImage : currentImage,
    })
    // focus on the currentImage
    this.focusImage()
    //this.currentImage--
  }

  // set the image isSelected to True
  // change the width of the image
  focusImage(){
    console.log('focus image')

    // get the imagess from the state
    let images = this.state.images
    // get the currentTarget from the state
    let currentImage = this.state.currentImage



    //images[currentImage].width = "100%"
    // set the values of the other items in the array to false apart from
    for (let i in images) {
      images[i].isSelected = false
      if (i == currentImage) { // if the index matches the current image
        images[currentImage].isSelected = true
      }
    }

    //if the images.isSelected = true then its width becomes 120% else its width is 100%
    for (let i in images) {
      if ( images[i].isSelected ) {
        //images[i].width = "100%"
        images[i].scale = 1
      } else {
        //images[i].width = "70%"
        images[i].scale = 0.8
      }
    }

    // update the state
    this.setState({
      images : images
    });
  }
  render() {

    let images = this.state.images

    let max = images.length
    let current = this.state.currentImage



    //let width = style.width
    //this.state.images[this.currentImage].width
    // if the
    console.log(this.state.currentImage )

    return (
      <div>
        <div className={styles.carousel}>
          <section id="section-6"></section>
          <div className={styles.focusGallery}>
            { images
                .map(image => (
                  <div style={{width : '100%', textAlign:'center' }}>
                    <img src={image.src}
                      style={{transform : 'scale'+'('+ image.scale+')' }}
                      key={image.id}
                      className={styles.image}  />
                      <p className={styles.imageBody} style={{width: '70%', margin: '0 auto', color:'white',transform : 'scale'+'('+ image.scale+')', fontSize:'1.1rem'  }}>{image.body}</p>
                  </div>
                )
              )}
            </div>
        </div>
        <div className={styles.carouselControls} style={{color:'white'}}>
          <img src={left} onClick={this.prevImage} className={styles.left} />
          <p className={styles.steps}>Step <span style={{color:'gold'}}>{current}</span> of ...{max}</p>
          <img src={right} onClick={this.nextImage} className={styles.right} />
        </div>
      </div>
  );
}
}



export default Carousel
