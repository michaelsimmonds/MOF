import React from 'react'
import Slider from 'react-slick'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

class Home extends React.Component {
  render() {
    var settings = {
      centerMode: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      centerPadding: '28%',
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            centerPadding: '30%'
          }
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 1,
            centerPadding: '22%'
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            centerPadding: '20%',
            arrows: false
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            centerPadding: '15%',
            arrows: false
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            centerPadding: '12%',
            arrows: false
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }
      ]
    }

    return (
      <div>
        <h1 id="title">our charter destinations</h1>
        <Slider {...settings}>

          <div className="slide">
            <h2 className="country">cuba</h2>
            <h3 className="area">BAHAMAS & CARIBBEAN</h3>
            <h3 className="view-itinery">View Itinery</h3>
            <img className="front-image" src="assets/Img4.png" alt="turtle"/>
            <img className="back-image" src="assets/Img1.png" alt="seascape"/>
          </div>

          <div className="slide">
            <h2 className="country">florida</h2>
            <h3 className="area">BAHAMAS & CARIBBEAN</h3>
            <h3 className="view-itinery">View Itinery</h3>
            <img className="front-image" src="assets/Img5.png" alt="seascape"/>
            <img className="back-image" src="assets/Img4.png" alt="turtle"/>
          </div>

          <div className="slide">
            <h2 className="country">croatia</h2>
            <h3 className="area">MEDITERRANEAN</h3>
            <h3 className="view-itinery">View Itinery</h3>
            <img className="front-image" src="assets/Img3.png" alt="seascape"/>
            <img className="back-image" src="assets/Img5.png" alt="seascape"/>
          </div>

          <div className="slide">
            <h2 className="country">barbados</h2>
            <h3 className="area">MEDITERRANEAN</h3>
            <h3 className="view-itinery">View Itinery</h3>
            <img className="front-image" src="assets/Img2.png" alt="seascape"/>
            <img className="back-image" src="assets/Img3.png" alt="seascape"/>
          </div>

          <div className="slide">
            <h2 className="country">croatia</h2>
            <h3 className="area">MEDITERRANEAN</h3>
            <h3 className="view-itinery">View Itinery</h3>
            <img className="front-image" src="assets/Img1.png" alt="seascape"/>
            <img className="back-image" src="assets/Img2.png" alt="seascape"/>
          </div>

        </Slider>
        <h3 id="end-note">View all destinations</h3>
      </div>
    )
  }
}

export default Home
