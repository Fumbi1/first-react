import React from "react";
import './Footer.css';
import footer from '../../imgs/footer.svg';
import face from '../../imgs/face.png';
import instagram from '../../imgs/instagram.png';
import twitter from '../../imgs/twitter.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-wrapper">
            <div className="footer-companies">
                <img src={footer} alt="" className="footer-logo" />
                <div className="social">
                    <img src={face} alt=""  className="footer-icon"/>
                    <img src={instagram} alt="" className="footer-icon" />
                    <img src={twitter} alt="" className="footer-icon" />
                </div>
                <p className="footer-text2">© 2022 Metabnb</p>
            </div>
            <div className="footer-link">
                <h5 className="footer-desc">Community</h5>
                <p className="footer-text">NFT</p>
                <p className="footer-text">Tokens</p>
                <p className="footer-text">Landlords</p>
                <p className="footer-text">Discord</p>
            </div>
            <div className="footer-link">
                <h5 className="footer-desc">Places</h5>
                <p className="footer-text">Castle</p>
                <p className="footer-text">Farms </p>
                <p className="footer-text">Beach</p>
                <p className="footer-text">Learn more</p>
            </div>
            <div className="footer-link">
                <h5 className="footer-desc">About us</h5>
                <p className="footer-text">Road map</p>
                <p className="footer-text">Creators</p>
                <p className="footer-text">Career</p>
                <p className="footer-text">Contact us</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
