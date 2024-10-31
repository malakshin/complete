import React from 'react'
import './Footer.css'
const Footer = () => {
        return (
<footer>
    <div className="footer-container">
        <div className="left">
            <a href='https://maps.app.goo.gl/U1p4s3ro9Md7d7yH8' target="_blank" rel="noopener noreferrer">
                <img src="/images/map.png" alt="map" className="map-image"/>
                <span style={{ display: 'none' }}>Visit Academy map</span>
                </a>
            
            <div className="info-row">
                <img className="mapicon icon" src="/images/locationicon.png" alt="mapicon"/>
                <span>Academy,Baghdad</span>
            </div>
            <div className="info-row">
                <i className="icon">📞</i>
                <span>+964  7734977237</span>
            </div>
            <div className="info-row">
                <img className="mailicon" src="/images/emailicon.png" alt="mailicon"/>
                <span>TechAcademy@gmail.com</span>
            </div>
        </div>
        <div className="right">
            <input type="text" placeholder="Full Name" className="input-field"/>
            <input type="text" placeholder="Message" className="input-field mes"/>
            <button type="submit" className="submit-btn">Send Message</button>
        </div>
    </div>
    </footer>

    )
}

export default Footer