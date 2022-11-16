import React from 'react'

const NftDetails = ({image, desc, night, distance, availaibility, stars}) => {
  return (
    <>
        <div className='nftcards'>
            <div className='wrapper'>
                <div className="nftimage">
                    <img src={image} alt="NFTs" className='nft-image'/>
                </div>
                <div className="information">
                    <p className='info_p'>{desc}</p>
                    <p id='info_p2'>{night}</p>
                </div>
                <div className="information2">
                    <p className='info_p'>{distance}</p>
                    <p className='info_p'>{availaibility}</p>
                </div>
                <div className="stars">
                    <img src={stars} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default NftDetails