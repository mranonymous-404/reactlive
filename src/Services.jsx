import React from "react";
import Sdata from "./Sdata";
import Card from "./card";

const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="taxt-center  "> Our Services</h1>
                <div className="container-fluid mb-5" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                               {
                                Sdata.map((val,index)=>{
                                    return <Card
                                        imgsrc = {val.imgsrc}
                                        title = {val.title}
                                    />
                                })
                               }
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Services;