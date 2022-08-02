import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <section>
            <div className='col-sm-12 signup'>
                <div>
                    <img src='images/jamlogo.png'></img>
                    <hr></hr>
                </div>

                <div className='row'>
                    <div className="col-sm-6 field-wrapper">
                    <input type="name" name="input" id=""/>
                        <div className="field-placeholder ml-3"><span> First Name *</span></div>
                    </div>
                    <div className="col-sm-6 field-wrapper">
                    <input type="name" name="input" id=""/>
                        <div className="field-placeholder ml-3"><span> Last Name *</span></div>
                    </div>
                </div>
                <div className="field-wrapper">
                    <input type="email" name="email" id=""/>
                        <div className="field-placeholder"><span>Email Address *</span></div>
                </div>
                <div className="field-wrapper">
                    <input type="password" name="password" id=""/>
                        <div className="field-placeholder"><span>Password *</span></div>
                </div>
                <div className="field-wrapper">
                    <input type="phone" name="phone" id="phone"/>
                        <div className="field-placeholder"><span>Phone</span></div>
                </div> 

                 
                 
                   <Link to="/forgot-password"> <h6>Forgot Your password?</h6></Link>
                    <button className='btn_1'>SIGN UP</button>
                    <p className='text-center mb-0'>or</p>
                    <button className="btn_2">SIGN IN WITH FACEBOOK</button>
                    <p className='mb-1 mt-4'>Already have an account? <Link to="/signin"><span>Sign In</span></Link></p>
                    <p >By continuing, you agree to our <span>Terms</span> and <span>Conditions</span></p>
                  
            </div>

        </section>
    )
}