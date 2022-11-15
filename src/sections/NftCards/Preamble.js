import React from 'react';
import './Preamle.css'

const Preamble = ({color, firstText, secondText}) => {
  return (
    <div>
        <div className='wrapper'>
            <div className="nftimage" style={{backgroundColor: color}}>

            </div>  
            <div className="information">
                <p>{firstText}</p>
                <p>{secondText}</p>
            </div>
            <div className="information">
                <p>Desert king</p>
                <p>1MBT per night</p>
            </div>
            <div className="stars"></div>
        </div>
    </div>
  )
}

export default Preamble;