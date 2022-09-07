import React from 'react';
import profileImage from "../images/profile.jpeg";
import emailIcon from "../images/Mail.png";
import linkedInIcon from "../images/linkedin.png";

export default function Info() {
    return (
        <div>
            <img src={profileImage} alt="Profile" className="info--image"/>
            <h2 className="info--name">Emma Widl</h2>
            <h3 className="info--job">Software Engineer</h3>
            <h4 className="info--website">emmawidl.com</h4>
            <div className="info--buttons">
                <div className="info--email">
                    <img src={emailIcon} alt="Email"/>
                    <p className="info--email-content">Email</p>
                </div>
                <div className="info--linkedin">
                    <img src={linkedInIcon} alt="LinkedIn"/>
                    <p className="info--linkedin-content">LinkedIn</p>
                </div>
            </div>
        </div>
    )
}