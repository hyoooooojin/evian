import React from 'react';
import './instagram.scss';
import instagram1 from '../../assets/images/instagram1.jpg';
import instagram2 from '../../assets/images/instagram2.jpg';
import instagram3 from '../../assets/images/instagram3.jpg';
import instagram4 from '../../assets/images/instagram4.jpg';
import instagram5 from '../../assets/images/instagram5.jpg';
import instagram6 from '../../assets/images/instagram6.jpg';
import instagram7 from '../../assets/images/instagram7.jpg';
import instagram8 from '../../assets/images/instagram8.jpg';
import instagram9 from '../../assets/images/instagram9.jpg';
import instagram10 from '../../assets/images/instagram10.jpg';
import instagram11 from '../../assets/images/instagram11.jpg';
import instagram12 from '../../assets/images/instagram12.jpg';

const images = [
  instagram1,
  instagram2,
  instagram3,
  instagram4,
  instagram5,
  instagram6,
  instagram7,
  instagram8,
  instagram9,
  instagram10,
  instagram11,
  instagram12
];

const Instagram = () => {
  return (
    <div className="instagram">
      <div className="instagramContainer">
        <h1 className="instagramTitle" id="instagramTitle">INSTAGRAM</h1>
        <div className="instagramSlider">
          <div className="instagramSlideContainer">
            {/* 두 번 반복된 이미지 배열 */}
            {images.concat(images).map((src, index) => (
              <div key={index} className="image-box">
                <img src={src} alt={`Instagram ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
