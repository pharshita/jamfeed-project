import React from "react";
import { Link } from "react-router-dom";

export default function Forgot_password() {
    return (
        <section>
            <div className='col-sm-12 forgot'>
                <div>
                    <img src='images/jamlogo.png'></img>
                    <hr></hr>
                </div>
                <div className="text-center pt-2 pb-2">We need your email to verify before resetting your password.</div>
                   
                    <div className="col-xs-4 col-xs-offset-4">
                        <div className="floating-label-group1">
                            <input type="text" id="username" className="form-control" autocomplete="off" autofocus required />
                            <label className="floating-label1">Email Address</label>
                        </div>
                       
                    </div>
                    <button className='btn_1'>SUBMIT </button>

                  

            </div>
         
        </section>
    )
}