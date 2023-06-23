import React from "react";
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="flex justify-content-center">
                <div className="container-fluid" >
                    <div className="row" style={{ width: '100%' }}>
                        <div className="col-10 mx-auto">
                            <div className="row" style={{ width: '100%' }}>

                                <div className="col-md-6 py-5 order-2 order-lg-1">
                                    <h1> {props.name} <strong className="brand-name">{props.ownername}</strong> </h1>
                                    <h2>{props.headingmsg}</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="home img" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;