import React, { useState } from 'react';
import './products.scss';
import mainProduct1 from '../../assets/images/mainProduct1.jpg';
import mainProduct2 from '../../assets/images/mainProduct2.jpg';
import mainProduct3 from '../../assets/images/mainProduct3.jpg';
import mainProduct1_2 from '../../assets/images/mainProduct1_2.png';
import mainProduct1_1 from '../../assets/images/mainProduct1_1.png';
import mainProduct1_3 from '../../assets/images/mainProduct1_3.png';
import mainProduct1_4 from '../../assets/images/mainProduct1_4.png';
import mainProduct2_1 from '../../assets/images/mainProduct2_1.png';
import mainProduct2_2 from '../../assets/images/mainProduct2_2.png';
import mainProduct2_3 from '../../assets/images/mainProduct2_3.png';
import mainProduct3_1 from '../../assets/images/mainProduct3_1.png';
import mainProduct3_2 from '../../assets/images/mainProduct3_2.png';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Products = () => {
  const [slideIndex1, setSlideIndex1] = useState(0);
  const [slideIndex2, setSlideIndex2] = useState(0);
  const [slideIndex3, setSlideIndex3] = useState(0);

  const handlePrev = (setSlideIndex) => {
    setSlideIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = (setSlideIndex, maxIndex) => {
    setSlideIndex(prev => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="products">
      <div className="productsContainer">

        {/* first */}
        <div className="product">
          <div className="productLeft">
            <img src={mainProduct1} alt="mainProduct1" />
          </div>

          <div className="productRight">
            <p className="productTitle" id="productTitle">Natural mineral water</p>
            <p className="productDesc">No matter where life takes you, we believe that bottled natural mineral water should be a convenient and essential part of every day. Our natural mineral water is offered in a wide range of convenient plastic water bottles to help you hydrate throughout the day, whether you’re in the office, at the gym, on the go, or entertaining at home. Evian water bottles come in a variety of sizes. They also come in singles or multipacks</p>

            <div className="sliderContainer">
              <KeyboardArrowLeftIcon 
                className="sliderButton" 
                onClick={() => handlePrev(setSlideIndex1)}
                style={{ opacity: slideIndex1 === 0 ? 0.3 : 1, pointerEvents: slideIndex1 === 0 ? 'none' : 'auto' }}
              />

              <div className="slider">
                <div 
                  className="slideContainer"
                  style={{ transform: `translateX(-${slideIndex1 * 33.3333}%)`, transition: 'transform 0.5s ease' }}
                >
                  <div className="slide"><img src={mainProduct1_1} alt="" /><span>330ml</span></div>
                  <div className="slide"><img src={mainProduct1_2} alt="" /><span>500ml</span></div>
                  <div className="slide"><img src={mainProduct1_3} alt="" /><span>1L</span></div>
                  <div className="slide"><img src={mainProduct1_4} alt="" /><span>1.5L</span></div>
                </div>
              </div>

              <KeyboardArrowRightIcon 
                className="sliderButton" 
                onClick={() => handleNext(setSlideIndex1, 1)}
                style={{ opacity: slideIndex1 === 1 ? 0.3 : 1, pointerEvents: slideIndex1 === 1 ? 'none' : 'auto' }}
              />
            </div>

          </div>
        </div>

        {/* second */}
        <div className="product">
          <div className="productLeft">
            <img src={mainProduct2} alt="mainProduct2" />
          </div>

          <div className="productRight">
            <p className="productTitle" id="productTitle2">Natural mineral water in a glass bottle</p>
            <p className="productDesc">Elevate any occasion with our iconic evian glass water bottles. Add an elegant touch with evian natural mineral water in glass bottles, whether you’re dining at home or at a restaurant, bar, or hotel. All evian glass bottles are recyclable</p>

            <div className="sliderContainer">
              <KeyboardArrowLeftIcon 
                className="sliderButton" 
                onClick={() => handlePrev(setSlideIndex2)}
                style={{ opacity: slideIndex2 === 0 ? 0.3 : 1, pointerEvents: slideIndex2 === 0 ? 'none' : 'auto' }}
              />

              <div className="slider">
                <div 
                  className="slideContainer"
                  style={{ transform: `translateX(-${slideIndex2 * 33.3333}%)`, transition: 'transform 0.5s ease' }}
                >
                  <div className="slide"><img src={mainProduct2_1} alt="" /><span>Lime</span></div>
                  <div className="slide"><img src={mainProduct2_2} alt="" /><span>Lemon</span></div>
                  <div className="slide"><img src={mainProduct2_3} alt="" /><span>Peach</span></div>
                </div>
              </div>

              <KeyboardArrowRightIcon 
                className="sliderButton" 
                onClick={() => handleNext(setSlideIndex2, 0)}
                style={{ opacity: slideIndex2 === 0 ? 0.3 : 1, pointerEvents: slideIndex2 === 0 ? 'none' : 'auto' }}
              />
            </div>

          </div>
        </div>

        {/* third */}
        <div className="product">
          <div className="productLeft">
            <img src={mainProduct3} alt="mainProduct3" />
          </div>

          <div className="productRight">
            <p className="productTitle" id="productTitle3">Sparkling water</p>
            <p className="productDesc">We've added sparkles. Experience the freshness and taste of evian natural spring water, available with light, fine sparkles. Enjoy the refreshing sparkling sensation of evian Sparkling™ carbonated natural spring water and let it awaken your senses.</p>

            <div className="sliderContainer">
              <KeyboardArrowLeftIcon 
                className="sliderButton" 
                onClick={() => handlePrev(setSlideIndex3)}
                style={{ opacity: slideIndex3 === 0 ? 0.3 : 1, pointerEvents: slideIndex3 === 0 ? 'none' : 'auto' }}
              />

              <div className="slider">
                <div 
                  className="slideContainer"
                  style={{ transform: `translateX(-${slideIndex3 * 33.3333}%)`, transition: 'transform 0.5s ease' }}
                >
                  <div className="slide"><img src={mainProduct3_1} alt="" /><span>Vitamin C</span></div>
                  <div className="slide"><img src={mainProduct3_2} alt="" /><span>Vitamin B</span></div>
                </div>
              </div>

              <KeyboardArrowRightIcon 
                className="sliderButton" 
                onClick={() => handleNext(setSlideIndex3, 0)}
                style={{ opacity: slideIndex3 === 0 ? 0.3 : 1, pointerEvents: slideIndex3 === 0 ? 'none' : 'auto' }}
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;