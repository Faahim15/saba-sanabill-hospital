import React from 'react';
import img from '../../../images/footer/location.png'
import logo from '../../../images/logo/logo.png';
import { MdLocationOn , MdEmail} from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
    return (
    
        <div className="row">
            <div id="footer-area-first" className="col-md-4 col-12 pb-0">
            <div id="footer-img" className="card border-0   text-white">
                <img src={img} className="card-img p-md-5 p-0 m-0 opacity-25" alt="..."/>
                <div className="card-img-overlay text-black p-0">
                    <img src={logo} alt="" />
                    <p className="card-text fw-bolder my-md-5 ms-5 my-3"><MdLocationOn/> <small>
                    350 Fifth Avenue, 8th floor, <br />
                    Arshinagar,Bangladesh.
                    </small> </p>
                    <p className="card-text fw-bolder my-md-5 my-2 ms-5"><small>
                    <BsFillTelephoneFill/> +8801891634315
                    </small> </p>
                    <p className="card-text fw-bolder my-md-5 my-2 ms-5"><small>
                    <MdEmail/> abdulkaderfahim6@gmail.com
                    </small> </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 pb-0 d-md-block d-none py-3">
                <h2>Our All Services</h2>
                <ul className="fw-bolder">
                    <li className="my-2">Gynecology</li>
                    <li className="my-2">Neurology</li>
                    <li className="my-2">Cardiology</li>
                    <li className="my-2">Pulmonology</li>
                    <li className="my-2">Osteology</li>
                    <li className="my-2">Nephrology</li>
                </ul>
            </div>
            <div className="col-md-4 col-12">
            <div className="card border-0   text-black footer">
               <div className="w-75 m-auto">
               <h2>NEWSLETTER</h2>
               <p>Subscribe to our newsletter to receive our latest news and updates. We do not spam.</p>
               <input type="email" className="w-100 my-2"/>
               <input type="submit" className="btn btn-primary w-100 mb-2" />
               </div>
                
                </div>
            </div>
            </div> 
            
    );
};

export default Footer;