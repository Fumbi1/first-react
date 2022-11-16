import React from 'react';
import X from '../../imgs/x.png';
import metamask from '../../imgs/metamask.png';
import walletconnect from '../../imgs/walletconnect.png';
import Vector from '../../imgs/Vector.png';
import './Modal.css';

const Modal = (prop) => {
  return (
    <div className='modal-card'>
        <div className='modal-heading'>
            <p id='wallet-connect'>Connect Wallet</p>
            <img src={X} alt="" id='x-icon' onClick={prop.onClick}/>
        </div>
        <hr />
        <div>
            <p id='choice'>Choose your preferred wallet:</p>

            <div className='wallet-address'>
                <div className='wallet-select'>
                    <img src={metamask} alt="" />
                    <p className='wallet-name'>Metamask</p>
                </div>

                <img src={Vector} alt=''/>
            </div>

            <div className='wallet-address2'>
                <div className='wallet-select'>
                    <img src={walletconnect} alt="" />
                    <p className='wallet-name'>WalletConnect</p>
                </div>

                <img src={Vector} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Modal;