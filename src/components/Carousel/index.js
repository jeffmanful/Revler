// DEPENDENCIES
import React from 'react'
import Link from 'gatsby-link'

// IMAGES
  import stepOne from './match.png'
  import stepTwo from './profile.png'
  import stepThree from './matched2.png'
  import stepFour from './chat.png'
  import stepFive from './chats.png'
import right from './arrow_right.png'
import left from './arrowleft.png'

// STYLES
import styles from './Carousel.module.css'
import Horizontal from 'react-scroll-horizontal'



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
      imageIndex: 1,
      images :  [
        {
          src : stepOne,
          isSelected : true,
          id : 1,
          width : '70%',
          body : "Chat with nearby people anonymously",
          scale : 0.6
        },
        {
          src: stepTwo,
          isSelected : false,
          id : 2,
          width : '70%',
          body : "The chat ends after 15mins and your profile is revealed",
          scale : 0.6

        },
        {
          src: stepThree,
          isSelected : false,
          id : 3,
          width : '70%',
          body: 'If you both swipe you match!',
          scale : 0.6

        },
        {
          src: stepFour,
          isSelected : false,
          id : 4,
          width : '70%',
          body : 'If you match you can continue the conversation where you left off',
          scale : 0.6

        },
        {
          src: stepFive,
          isSelected : false,
          id : 5,
          width : '70%',
          body : 'You can have up to 3 anonymous chats at the same time',
          scale : 0.6

        }
      ]
    }

  }

  componentDidMount() {
    this.setState({
       // currentImage : 0,
    })
    console.log(this.state.currentIndex + 'is index')

    // this.focusImage()
    //get thevalue from the state

  }

  // focus on the next image in the array
  nextImage(e){
    let currentImage = this.state.currentImage
    let images = this.state.images

    if (currentImage === images.length-1 ){
      currentImage = -1
    }

    ++currentImage

    // increment the value of currentImage
    // currentImage = currentImage + 1
    // loop the value around if below range

    console.log(currentImage);

    let ind = 0

    for ( ind; ind < images.length; ind++){
        // images[ind].width = "70%"
        images[ind].scale = 0.6
      }


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
         // images[ind].width = "70%"
        images[ind].scale = 0.6
      }

    images[currentImage].scale = 1

    // set the state causing a call to the render() method.
    this.setState({
      currentImage : currentImage,
      images : images
    })
  }

  render() {

    let images = this.state.images

    let max = images.length
    let current = this.state.currentImage
    // let index = images[current].id
    let index = images[current].id


    console.log(this.state.currentImage )

    return (

      <div>
        <div className={styles.carousel}>
          <div className={styles.focusGallery}>
            { images
                .map(image => (
                  <div key={image.id.toString()} style={{ textAlign:'center' }} className={styles.carouselBox}>
                    <img src={image.src}
                      style={{transform : 'scale'+'('+ image.scale+')' }}
                      className={styles.image}  />
                      <p className={styles.imageBody} style={{ width:'100%', color:'white'  }}>{image.body}</p>
                  </div>
                )
              )}

            </div>
        </div>
        <div className={styles.carouselControls} style={{color:'white'}}>
          <img src={left} onClick={e => this.prevImage(e)} className={styles.left} />
          <p className={styles.steps}>Step <span style={{color:'gold'}}>{index}</span> of {max}</p>
          <img src={right} onClick={e => this.nextImage(e)} className={styles.right} />
        </div>
      </div>
  );
}
}



export default Carousel
