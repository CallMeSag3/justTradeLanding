import React from "react";
import "./home.scss";
import Header from "../components/header/Header"
import Benefits from "../components/benefits/Benefits"

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Benefits/>
        </div>
    )
}

export default Home;