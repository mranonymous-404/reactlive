import React from "react";
import { useState } from "react";

const Contact = () => {
    const [data, setdata] = useState({
        fullname : '',
        mobile : '',
        email : '',
        contextmsg : ''
    });

    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setdata((preValue)=>{
            return{
                ...preValue,
                [name] : value,
            }
        })
    }
    const formsubmit = (e) =>{
        e.preventDefault();
        alert(`${data.fullname}`)
    }
    return (
        <>
            <div className="my-5">
                <h1>Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={inputEvent} placeholder="Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="emailadd" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="contextmsg" value={data.contextmsg} onChange={inputEvent} rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;