import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer p-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <p>Home</p>
                        <p>About us</p>
                        <p>Contact</p>
                        <p>News</p>
                    </div>
                    <div className="col-lg-3">
                        <p>Eye Surgery</p>
                        <p>Home RTL</p>
                        <p>Our Doctors</p>
                        <p>Faqs</p>
                    </div>
                    <div className="col-lg-3">
                        <p>Terms</p>
                        <p>Licenses</p>
                        <p>Privacy Policy</p>
                        <p>Web mail</p>
                    </div>
                    <div className="col-lg-3">
                        <p><i className="fab fa-facebook-square me-2"></i> Facebook</p>
                        <p><i className="fab fa-instagram-square me-2"></i>Instagram</p>
                        <p><i className="fab fa-twitter-square me-2"></i>Twitter</p>
                        <p><i className="fab fa-youtube-square me-2"></i>YouTube</p>


                    </div>
                </div>
            </div>

            <hr />
            <div className="text-center">
                <small>Copyright © 2021 Eye-Care. All rights reserved by MD. Asrafuzzaman khan</small>
            </div>
        </div>
    );
};

export default Footer;