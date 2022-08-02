import React from 'react';
import { Link } from 'react-router-dom'

export default function Artists_page() {
    return (
        <div>
            <section>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='fan_page'>
                            <div>
                                <img src='images/jamfeedlogo.png'></img>
                            </div>
                            <div className='text-white'>
                                <h1><b>Be the First to Know</b></h1>
                                <p>Get push notifications for new music, videos, tours, and other breaking news from your <br />favorite artists and festivals.</p>
                            </div>
                            <div>
                                <button>GET THE APP</button>
                            </div>

                        </div>


                    </div>
                    
                </div>
            </section>
            <section>
                <div className='row fan-head'>
                <div className='col-sm-12 fan-features-head'>
                        <h2>Mobile App Features</h2>
                    </div>
                    <div className='col-sm-12'>
                        <div className='row fan-feature-title'>
                            <div className='col-sm-4  '>
                              <div className='features'>
                                <div>
                                <h3>Customized <br/>News Feed</h3>
                                <p>Create a feed that is<br/> curated just for you<br/> based on your music<br/> preferences and <br/>tastes.</p>
                                </div>
                                <div className='icon-services'>
                                 <img src='images/icons1.png'></img>

                                </div>
                                </div>

                                <div className='features'>
                                <div>
                                <h3 >Push <br/>Notifications</h3>
                                <p >Get real-time<br/>updates for music,<br/> videos, tours, merch,<br/> festival news.</p>
                                </div>
                                <div className='icon-services'>
                                 <img src='images/icons4.png'></img>

                                </div>
                                </div>
                                
                                <div className='features  '>
                                <div>
                                <h3>Find Local <br/>Concerts</h3>
                                <p>Know when your<br/>favorite artists are<br/> coming to town and<br/> browse local<br/>concerts every day.</p>
                                </div>
                                <div className='icon-services '>
                                 <img src='images/icons5.png'></img>

                                </div>
                                </div>
                                
                            
                            </div>
                            
                            <div className='col-sm-3 fan-screen'>
                               <img src='images/mobile screen.png'></img>
                            </div>
                            <div className='col-sm-4'>
                                <div className='features2'>
                            <div className='icon-services1'>
                                 <img src='images/icons2.png'></img>
                                </div>
                                <div>
                                <h2>Sync  Your<br/> Music</h2>
                                <p>Connect your Spotify<br/> or Apple Music<br/> premium accounts<br/> to sync your favorite<br/>artists.</p>
                                </div>
                                </div>

                                <div className='features2'>
                            <div className='icon-services1'>
                                 <img src='images/icon3.png'></img>
                                </div>
                                <div>
                                <h2>Discover<br/> Artists</h2>
                                <p>Find new artists and<br/> new content and<br/>keep up with<br/> everything in one <br/>place.</p>
                                </div>
                                </div>

                                <div className='features2'>
                            <div className='icon-services1'>
                                 <img src='images/icons6.png'></img>
                                </div>
                                <div>
                                <h2>Customer<br/> Support</h2>
                                <p>We always want to<br/> hear from our users<br/>and fans about how<br/> we can make<br/>JamFeed better.</p>
                                </div>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </section>

        </div>
    )
}