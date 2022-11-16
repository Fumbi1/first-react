import React from "react";


import Stars from '../../imgs/stars.png';
import Frame1 from '../../imgs/Frame1.png'
import Frame2 from '../../imgs/Frame2.png'
import Frame3 from '../../imgs/Frame3.png'
import Frame4 from '../../imgs/Frame4.png'
import Frame5 from '../../imgs/Frame5.png'
import Frame6 from '../../imgs/Frame6.png'
import Frame7 from '../../imgs/Frame7.png'
import Frame8 from '../../imgs/Frame8.png'

import Navigation from '../Nav/Nav';
import Header from '../Header/Header';
import FooterBanner from '../FooterBanner/FooterBanner';
import NftsWalletsCards from '../NftWalletsCards/NftsWalletsCards';
import Footer from '../Footer/Footer';

const Homepage = () => {
    const datas = [
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
          image: Frame8,
          desc: "Desert king",
          night: "1MBT per night",
          distance: "2345km away",
          availaibility: "available for 2weeks stay",
          stars: Stars,
        },
    ]

  return (
    <>
      <Navigation />
      <Header />
      <div className="NftCards">
        {datas?.map((item, index) => {
          return (
            <NftsWalletsCards
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
      <FooterBanner />
      <Footer />
    </>
  );
};

export default Homepage;
