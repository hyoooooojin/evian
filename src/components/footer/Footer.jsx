import React from 'react'
import './footer.scss'
import logo from '../../assets/images/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerContainer">
            <div className="footerBlock">
                    <div className="footerLogo"><img src={logo} alt="" /></div>
                    <div className="footerIcon">
                        <InstagramIcon className="snsIcon"/>
                        <FacebookIcon className="snsIcon"/>
                        <TwitterIcon className="snsIcon"/>
                        <XIcon className="snsIcon" style={{ fontSize: '20px' }}/>
                        <YouTubeIcon className="snsIcon"/>
                    </div>
                </div>
            <div className="footerBlock">
                <h4>Our products</h4>
                <ul>
                    <li>Natural spring water</li>
                    <li>Everyday bottled water range</li>
                    <li>Evian Sparkling</li>
                    <li>Glass bottle range</li>
                    <li>Designer bottles</li>
                    <li>Where to buy</li>
                </ul>
            </div>
            <div className="footerBlock">
                <h4>Our water</h4>
                <ul>
                    <li>Water attributes</li>
                    <li>Water quality reports</li>
                </ul>
            </div>
            <div className="footerBlock">
                <h4>Our sustainability actions</h4>
                <ul>
                    <li>Sustainability</li>
                    <li>Packaging & recycling</li>
                    <li>Source protection</li>
                    <li>Climate impact</li>
                </ul>
            </div>
            <div className="footerBlock">
                <h4>Our story</h4>
                <ul>
                    <li>Our Story</li>
                    <li>Our Partnerships</li>
                    <li>Health & Hydration</li>
                </ul>
            </div>
            <div className="footerBlock">
                <h4>Our company</h4>
                <ul>
                    <li>Privacy policy</li>
                    <li>Terms & conditions</li>
                    <li>FAQ</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
        <div className="copyright"><p>© 2025 Hwanghyojin, All Rights Reserved.</p></div>
    </div>
  )
}

export default Footer
