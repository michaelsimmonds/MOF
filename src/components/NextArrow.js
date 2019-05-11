import React from 'react'

const NextArrow = function NextArrow(props) {
  const {style, onClick } = props
  return (
    <div
      className='slick-next'
      style={{...style, display: 'block'}}
      onClick={onClick}
    >
      <img src="./assets/nextArrow.png" alt="next arrow" className="arrow"/>
    </div>
  )
}

export default NextArrow
