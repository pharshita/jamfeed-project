import React from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <div className='row'>
          <div className='col-sm-12'>
              <div className='banner'>
                  <div>
                      <img src='images/jamfeedlogo.png'></img>
                  </div>
                  <div className='text-white'>
                      <h1><b>Never Miss A Beat</b></h1>
                      <p>Get real-time updates on new music, videos, tours, news, and more!</p>
                  </div>
                 <div className='home-button'>
                     <Link to="/artist"><button className='btn1'>JAMFEED FOR ARTISTS</button></Link>
                     <Link to="/fans"><button className='btn2'>JAMFEED FOR FANS</button></Link>
                 </div>
                 
              </div>
            
          </div>
          
      </div>
      </section>
  )

}
