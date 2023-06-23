import React from "react";
import web from "../src/images/5443169.jpg";
import { NavLink } from 'react-router-dom';
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow Your Knowledge " imgsrc={web} visit="/service" btname="Get Started" />
        </>
    )
}

export default Home;