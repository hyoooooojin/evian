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
            <ul className="hambergerMenu">
              <li className="menuItem"><a href="#">OUR WATER</a></li>
              <li className="menuItem"><a href="#">OUR STORY</a></li>
              <li className="menuItem"><a href="#">SHOP</a></li>
              <li className="menuItem"><a href="#">MY ACCOUNT</a></li>
              <li className="menuItem"><a href="#">CART</a></li>
            </ul>
          </div>
        )}

        <div className="navContainer">

          <div className="left">
            <ul className="leftGnbList">
              <li className="leftGnb"><a href="#">OUR WATER</a></li>
              <li className="leftGnb"><a href="#">OUR STORY</a></li>
              <li className="leftGnb"><a href="#">SHOP</a></li>
            </ul>
            <button
              className={`leftHamberger ${isMenuOpen ? 'open' : ''}`}
              onClick={handleMenuToggle}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="closed"></span>
              <span className="closed"></span>
              <span className="closed"></span>
            </button>
          </div>
          
          <div className="center">
            <div className="logo">
              <img src={logo} alt="Evian Logo" />
            </div>
          </div>

          <div className="right">
            <button className="rightIcon" aria-label="Cart"><LocalMallIcon className="navIcon" /></button>
            <button className="rightIcon notiIcon" aria-label="Notifications"><NotificationsIcon className="navIcon" /></button>
            <button  className="rightIcon" aria-label="My Account"><PersonIcon className="navIcon" /></button>
          </div>

        </div> {/* navContainer */}

      </div> {/* nav */}
    </>
  );
};

export default Nav;