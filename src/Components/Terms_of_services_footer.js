import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms_of_services_footer(){
    return(
        <div>
              <div className='container footer-bottom '>
                    <div className='col-sm-12'>
                      
                            <div className='row '>
                                <div className='col-sm-8 pera1 mt-4'>
                                <p>© 2022 JamFeed, Inc.</p>
                                </div>
                                <div className='col-sm-4 d-flex'>
                                    <Link to="/terms_of_services" a href="/legal/terms-of-service">Terms of Service</Link>
                                   <Link to="/privacy-policy" a href="/legal/privacy-policy" >Privacy Policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}