import React from "react";
import web from "../src/images/5443169.jpg";
// import { NavLink } from 'react-router-dom';
import Common from "./Common";

const Home = () => {
    const myname = "Pankaj saini";
    const messages = "Stay silent, Do your Work, Develop";
    return (
        <>
            <Common name="Grow Your Knowledge " headingmsg={messages} ownername={myname} imgsrc={web} visit="/service" btname="Get Started" />
        </>
    )
}

export default Home;