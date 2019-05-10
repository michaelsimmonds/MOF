import React from 'react'
import Slider from 'react-slick'

class Home extends React.Component {
  render() {
    var settings = {
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true
    }

    return (
      <div>
        <h1 id="title">our charter destinations</h1>
        <Slider {...settings}>

          <div className="slide">
            <h2 className="country">cuba</h2>
            <h3 className="area">BAHAMAS & CARIBBEAN</h3>
            <h3 className="view-itinery">View Itinery</h3>
            <img className="front-image" src="assets/Img4.png" alt="seascape"/>
            <img className="back-image" src="assets/Img1.png" alt="seascape"/>
          </div>

          <div className="slide">
            <h2 className="country">florida</h2>
            <h3 className="area">BAHAMAS & CARIBBEAN</h3>
            <h3 className="view-itinery">View Itinery</h3>
            <img className="front-image" src="assets/Img5.png" alt="seascape"/>
            <img className="back-image" src="assets/Img4.png" alt="seascape"/>
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
