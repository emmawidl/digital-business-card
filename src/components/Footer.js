import React from 'react';
import facebook from "../images/Facebook.png";
import twitter from "../images/Twitter.png";
import github from "../images/GitHub.png";
import instagram from "../images/Instagram.png";

export default function Footer() {
    return (
        <footer>
            <img className="footer--twitter" src={twitter} alt="twitter"/>
            <img className="footer--facebook" src={facebook} alt="facebook"/>
            <img className="footer--instagram" src={instagram} alt="instagram"/>
            <img className="footer--github" src={github} alt="github"/>
        </footer>
    )
}