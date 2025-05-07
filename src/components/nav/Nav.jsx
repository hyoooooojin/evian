import React, { useState, useEffect } from 'react';
import './nav.scss';
import logo from '../../assets/images/logo.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
      
      // 스크롤 시 메뉴 블록 닫기
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`nav ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
        {isMenuOpen && (
          <div className="hambergerBlock open">
            <div className="hambergerMenu">
              <p>OUR WATER</p>
              <p>OUR STORY</p>
              <p>SHOP</p>
              <p>MY ACCOUNT</p>
              <p>CART</p>
            </div>
          </div>
        )}
        <div className="navContainer">
          <div className="left">
            <span className="leftGnb">OUR WATER</span>
            <span className="leftGnb">OUR STORY</span>
            <span className="leftGnb">SHOP</span>
            <div className={`leftHamberger ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
              <span className="closed"></span>
              <span className="closed"></span>
              <span className="closed"></span>
            </div>
          </div>
          <div className="center">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="right">
            <span><LocalMallIcon className="navIcon" /></span>
            <span className="notiIcon"><NotificationsIcon className="navIcon" /></span>
            <span><PersonIcon className="navIcon" /></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;