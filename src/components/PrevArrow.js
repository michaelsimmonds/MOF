import React from 'react'

const PrevArrow = function PrevArrow(props) {
  const {style, onClick } = props
  return (
    <div
      className='slick-prev'
      style={{...style, display: 'block'}}
      onClick={onClick}
    >
      <img src="./assets/prevArrow.png" alt="prev arrow" className="arrow"/>
    </div>
  )
}

export default PrevArrow
