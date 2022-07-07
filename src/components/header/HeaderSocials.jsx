import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsLinkedin/>
            </a>
            <a
                href="https://github.com/prodigy97"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsGithub/>
            </a>
            <a
                href="https://stackoverflow.com/users/19081304/brainbox-willy"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsStackOverflow/>
            </a>
        </div>
    );
};

export default HeaderSocials;
