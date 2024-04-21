import React from "react";
import './footer.css';
import port_logo from '../../assets/port-logo.png';
export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title"><img className="footer__logo" src={port_logo} alt="" /></h1>

                <ul className="footer__list">
                        <a href="#about" className="footer__link">About</a>

                        <a href="#portfolio" className="footer__link">Projects</a>

                        <a href="#testimonial" className="footer__link">Testimonials</a>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/" className="footer__social-link" target="_blank"><i class="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/" className="footer__social-link" target="_blank"><i class="bx bxl-instagram"></i></a>
                    <a href="https://twitter.com/" className="footer__social-link" target="_blank"><i class="bx bxl-twitter"></i></a>
                </div>

                <span className="footer__copy">&#169; ajay. All rigths reserved</span>
            </div>
        </footer>
    )
}