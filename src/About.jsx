import React from "react";
import web from "../src/images/about.avif";
// import { NavLink } from 'react-router-dom';
import Common from "./Common";

const About = () => {
    const myname = "Pankaj saini";
    const messages = "The only way to do great work is to love what you do.";
    return (
        <>
            <Common name="welcome to About page" headingmsg={messages} ownername={myname} imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    )
}

export default About;