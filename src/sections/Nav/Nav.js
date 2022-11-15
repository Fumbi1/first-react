
import { Link } from 'react-router-dom';
import Logo from '../../imgs/Logo.png';
import './Nav.css';

function Navigation() {
    return (
        <div className='nav'>
           <div className='logo'>
            <img src={Logo} alt="logo" />
           </div>
           <div className='links'>
             <Link className='link' to='#'>Home</Link>
             <Link className='link' to='/nftcards'>Place To Stay</Link>
             <Link className='link' to='#'>NFTs</Link>
             <Link className='link' to='#'>Community</Link>
           </div>
           <div className='wallet'>
            <button className='button'>Connect Wallet</button>
           </div>
        </div>
    );
}


export default Navigation;