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



class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);

    // I should store image date outside of state as it does not change
    this.state = {
      // store an array of images
      currentImage : 0,
      currentIndex : 1,
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
          id : 5,
          width : '70%',
          body : 'You can have up to 3 anonymous chats at the same time',
          scale : 0.8

        }
      ]
    }

  }

  componentDidMount() {
    this.setState({
       //currentImage : 0,

    })
    console.log(this.state.currentIndex + 'is index')

    // this.focusImage()
    //get thevalue from the state

  }

  // focus on the next image in the array
  nextImage(e){
    // e.preventDefault();
    console.log('next image')
    let currentImage = this.state.currentImage

    let images = this.state.images



    if (currentImage === images.length-1){
      currentImage = -1
    }

    ++currentImage

    // increment the value of currentImage
    // currentImage = currentImage + 1
    // loop the value around if below range

    console.log(currentImage);


    let ind = 0

    for ( ind; ind < images.length; ind++){
        images[ind].width = "60%"
        images[ind].scale = 0.6
      }

    images[currentImage].width = "100%"
    images[currentImage].scale = 1


    this.setState({
      currentImage : currentImage,
      images : images
    })



  }

  prevImage(e){
    // e.preventDefault();
    console.log('previous image')
    // load the images
    let currentImage = this.state.currentImage
    let index = this.state.currentIndex
    let images = this.state.images
    // decremnt the value of currentImage



    // loop the value around if below range
    if ( currentImage < 1 ) {
        currentImage = images.length
    }


      --currentImage




      let ind = 0
      for ( ind; ind < images.length; ind++){
          images[ind].width = "70%"
          images[ind].scale = 0.7
        }

      images[currentImage].width = "100%"
      images[currentImage].scale = 1.1

      // set the state causing a call to the render() method.
      this.setState({
        currentImage : currentImage,
        images : images
      })


    // focus on the currentImage

    //this.currentImage--
  }

  render() {

    let images = this.state.images

    let max = images.length
    let current = this.state.currentImage
    // let index = images[current].id
    let index = images[current].id


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
                  <div key={image.id.toString()} style={{width : '100%', textAlign:'center' }}>
                    <img src={image.src}
                      style={{transform : 'scale'+'('+ image.scale+')' }}
                      className={styles.image}  />
                      <p className={styles.imageBody} style={{width: '70%', margin: '0 auto', color:'white',transform : 'scale'+'('+ image.scale+')'  }}>{image.body}</p>
                  </div>
                )
              )}

            </div>
        </div>
        <div className={styles.carouselControls} style={{color:'white'}}>
          <img src={left} onClick={e => this.prevImage(e)} className={styles.left} />
          <p className={styles.steps}>Step <span style={{color:'gold'}}>{index}</span> of ...{max}</p>
          <img src={right} onClick={e => this.nextImage(e)} className={styles.right} />
        </div>
      </div>
  );
}
}



export default Carousel
