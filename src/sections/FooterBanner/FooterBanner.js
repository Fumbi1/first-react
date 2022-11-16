import React from 'react';
import './FooterBanner.css';
import bannerImage from '../../imgs/bannerimage.png';


const FooterBanner = () => {
  return (
    <div className='banner'>
      <div className='banner-wrapper'>
        <div className='banner-content'>
          <p className='meta'>Metabnb NFTs</p>
          <p className='discover'>Discover our NFT gift cards collection.
            Loyal customers gets amazing gift cards which are traded as NFTs.
            These NFTs gives our cutomer access to loads of our exclusive services.
          </p>
          <div className='learn_div'><button className='learn'>Learn More</button></div>
        </div>
        
        <div className='bannerImage'>
          <img src={bannerImage} alt='' />
        </div>
      </div> 
    </div>
  )
}

export default FooterBanner