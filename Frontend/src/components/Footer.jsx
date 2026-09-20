import './component.css'
import React from 'react'
import { FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa'; // Install react-icons

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
              <div className="footer-section">
                <h2 className='footerheading'>SIGN-UP FOR CONTENT</h2>
                <p className='footercontent'>By entering your email address below, you consent to
                    receiving our newsletter with access to our latest
                    collections, events, and initiatives. More details on this are
                    provided in our Privacy Policy, which outlines our
                    commitment to handling your personal concierge data and
                    style preferences with the highest level of discretion.</p>
                    <input type="email" placeholder='Enter Email' className='enterinfo'></input>
                <p className="footer-label">CONTACT US</p>
                <a href="https://wa.me/123434546" className="footer-link">
                  <FaWhatsapp /> 7614056695
                </a>
                <a href="mailto:COKEXclub@gmail.com" className="footer-link">
                  <FaEnvelope /> kp346949@gmail.com
                </a>
                <p className="footer-label">COUNTRY/REGION</p>
                <p className="footer-link underline"><FaGlobe /> INDIA</p>
              </div>
            </div>
            <hr className="footer-divider"/>
            <div className="footer-bottom">
              <h2 className="main-footer-logo">ZYNDICO</h2>
               <p className="copyright">
                © 2026 ZYNDICO  - All rights reserved.
              </p>
            </div>
    </div>
  )
}

export default Footer