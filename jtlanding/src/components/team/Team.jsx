import React from "react";
import "./team.scss";

const Team = () => {
    return (
        <div className="team">
            <div className="team__container">
                <div className="team__textcont">
                    <h2 className="team__title">
                        Equipo de <span className="team__title-focus">JustTrade</span>
                    </h2>
                    <p className="team__text">
                        Con nuestro equipo de profesionales podra llegar a las metas de negocio que tienen de manera rapida y efectiva
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Team;