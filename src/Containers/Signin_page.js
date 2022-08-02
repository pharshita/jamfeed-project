import React from 'react';
import { Link } from 'react-router-dom';

export default function Signin_page() {
    return (
        <section>
            <div className='col-sm-12 signin'>
                <div>
                    <img src='images/jamlogo.png'></img>
                    <hr></hr>
                </div>
                <div className="field-wrapper">
                    <input type="email" name="email" id=""/>
                        <div className="field-placeholder"><span> Email Address</span></div>
                </div>
                <div className="field-wrapper">
                    <input type="password" name="password" id=""/>
                        <div className="field-placeholder"><span> Password</span></div>
                </div>
                   <Link to="/forgot-password"> <h6>Forgot Your password?</h6></Link>
                    <button className='btn_1'>SIGN IN</button>
                    <p className='text-center mb-0'>or</p>
                    <button className="btn_2">SIGN IN WITH FACEBOOK</button>
                    <p className='mb-1 mt-4'>Don't have an account? <Link to="/signup"><span>Sign Up</span></Link></p>
                    <p >By continuing, you agree to our <span>Terms</span> and <span>Conditions</span></p>

            </div>

        </section>
    )
}