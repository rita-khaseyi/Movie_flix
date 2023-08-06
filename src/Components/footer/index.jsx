
import React from "react";
import './style.css'
const Footer = () =>{
    return(
        <>
     <footer>
            <div class="footer">
        <div class="one">
          <h3>Download Our App</h3>
            <div>
                    <h1 className="logo">M<span>oo</span>vie</h1>
                </div>
        </div>
        <div class="two">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>My List</p>
            <p>About Us</p>
        </div>
        <div class="two">
            <h3>Legal</h3>
            <p>General info</p>
            <p>Smart Gadget</p>
            <p>Bill Payment Verification</p>
        </div>
        <div class="two">
            <h3>Contact Us:</h3>
            <p>ritakhaseyi@gmail.com</p>
            <p>OR By Using:</p>
            <p>tel: +254757770427</p>
            
            <div className="icons">
            </div>
        </div>
        <div class="two">
            <h3>Share Website Via:</h3>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
        </div>
        <hr/>
        <p className="Copyright"><h3 className="logo"> @2023. M<span>oo</span>vie   all rights reserved Rita</h3></p>
    </footer>
        </>
    );
}
export default Footer;