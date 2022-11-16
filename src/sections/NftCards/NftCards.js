import React from "react";
import { Link } from "react-router-dom";
import "./NftCards.js";
import './NftCards.css';
import Footer from "../Footer/Footer.js";
import Navigation from "../Nav/Nav.js";
import NftDetails from "../NftDetails/NftDetails.js";
import Stars from "../../imgs/stars.png";
import Frame1 from "../../imgs/Frame1.png";
import Frame2 from "../../imgs/Frame2.png";
import Frame3 from "../../imgs/Frame3.png";
import Frame4 from "../../imgs/Frame4.png";
import Frame5 from "../../imgs/Frame5.png";
import Frame6 from "../../imgs/Frame6.png";
import Frame7 from "../../imgs/Frame7.png";
import Frame8 from "../../imgs/Frame8.png";
import Frame9 from "../../imgs/Frame9.png";
import Frame10 from "../../imgs/Frame10.png";
import Frame11 from "../../imgs/Frame11.png";
import Frame12 from "../../imgs/Frame12.png";
import Frame13 from "../../imgs/Frame13.png";
import Frame14 from "../../imgs/Frame14.png";
import Frame15 from "../../imgs/Frame15.png";
import Frame16 from "../../imgs/Frame16.png";
import Setting from "../../imgs/setting-5.svg"

const NftCard = () => {
  const datas = [
    {
      image: Frame5,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame6,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame7,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame16,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame1,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame2,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame3,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame4,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame8,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame10,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame15,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame11,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame14,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame9,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame12,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
    {
      image: Frame13,
      desc: "Desert king",
      night: "1MBT per night",
      distance: "2345km away",
      availaibility: "available for 2weeks stay",
      stars: Stars,
    },
  ];

  return (
    <div>
      <Navigation />
      <div className="nftdetails-wrapper">
        <div className="nft-link">
          <Link className="link" to="#">Resturant</Link>
          <Link className="link" to="#">Cottage</Link>
          <Link className="link" to="#">Castle</Link>
          <Link className="link" to="#">fantast city</Link>
          <Link className="link" to="#">beach</Link>
          <Link className="link" to="#">Carbins</Link>
          <Link className="link" to="#">Off-grid</Link>
          <Link className="link" to="#">Farm</Link>
          <button id="location"><p>location</p> <img src={Setting} alt="" /></button>
        </div>

        <div className="NftCards">
          {datas?.map((item, index) => {
            return (
              <NftDetails
                key={index}
                image={item.image}
                desc={item.desc}
                night={item.night}
                distance={item.distance}
                availaibility={item.availaibility}
                stars={item.stars}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NftCard;
