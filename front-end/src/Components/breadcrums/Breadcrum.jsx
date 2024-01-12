import React from 'react'
import './breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME<img src={arrow_icon} alt="arrwIcon" />SHOP<img src={arrow_icon} alt="arrwIcon" />{product.category}<img src={arrow_icon} alt="arrwIcon" />{product.name}
    </div>
  )
}

export default Breadcrum