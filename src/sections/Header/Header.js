import React from 'react';
import './Header.css';
import header from '../../imgs/Header.png';
import MbToken from '../../imgs/mbtoken.svg';
import Metamask from '../../imgs/metamask.svg';
import Opensea from '../../imgs/opensea.svg';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-content'>
                <p id='text'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span> </p>
                <p id='subtext'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className='search'>
                    <input type="search"  placeholder='Search for location'/>
                    <button id='Search_btn'>Search</button>
                </div>
            </div>
            <div className='header-image'>
             <img src={header} alt="header-img" />
            </div>
        </div>
        <div className='companies'>
         <img src={MbToken} alt="mbtoken" />
         <img src={Metamask} alt="metamask" />
         <img src={Opensea} alt="opensea" />
        </div>
        <div className='desc'>
            <p>Inspiration for your next adventure</p>
        </div>
    </div>
  )
}

export default Header;