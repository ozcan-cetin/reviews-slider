import React from 'react'
import { FaQuoteRight } from "react-icons/fa";


const Slider = ({people, index, setIndex}) => {
    const {id, image, name, title, quote} = people[index]

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='imgDiv'>
            <img src={image} alt={title} />
        </div>,
        <div>
            <h3 className='text-center'>{name}</h3>
            <p className='text-center'>{title}</p>
        </div>
        <div>
            <p className='mx-auto text-center w-75 mt-5'>{quote}</p>
        </div>
        <span className='fs-1 text-warning'><FaQuoteRight/></span>
    </div>
  )
}

export default Slider