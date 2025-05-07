import React from 'react'
import './hero.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <div className="hero">
        <div className="heroContainer">
            <div className="heroContent">
                <h1 className="heroTitle">evian is water the way<br/>nature intended</h1>
                <p className="heroDesc">It’s a uniquely sourced mineral water that’s always naturally hydrating and refreshing, with nothing added for taste or enhanced with extras - so you can reach your natural peak.</p>
                <span className="shopButton">SHOP<ArrowForwardIcon className="arrowIcon"/></span>
            </div>
        </div>
    </div>
  )
}

export default Hero