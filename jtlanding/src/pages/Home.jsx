import React from "react";
import "./home.scss";
import Header from "../components/header/Header"
import Benefits from "../components/benefits/Benefits"
import Strengths from "../components/strengths/Strengths"
import Information from "../components/information/Information"
import Gains from "../components/gains/Gains"

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Benefits/>
            <Strengths/>
            <Information/>
            <Gains/>
        </div>
    )
}

export default Home;