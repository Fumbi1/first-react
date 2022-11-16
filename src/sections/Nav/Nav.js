import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/Logo.png';
import Modal from '../Modal/Modal';
import Backdrop from '../Modal/Backdrop';
import './Nav.css';

function Navigation() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalHandler = () => {
    setModalIsOpen(true);
  }

  const closemodalHandler = () => {
    setModalIsOpen(false);
  }

    return (
        <div className='nav'>
          <div className='logo'>
          <img src={Logo} alt="logo" />
          </div>
          <div className='links'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/nfts-place-to-stay'>Place To Stay</Link>
            <Link className='link' to='#'>NFTs</Link>
            <Link className='link' to='#'>Community</Link>
          </div>
          <div className='wallet'>
            <button className='Connect' onClick={modalHandler}>Connect Wallet</button>
          </div>
          
          {modalIsOpen && <Modal /> }
          {modalIsOpen && <Backdrop onClick={closemodalHandler} />}
          {modalIsOpen && <Modal onClick={closemodalHandler} />}

        </div>
    );
}


export default Navigation;