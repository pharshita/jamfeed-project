import React from 'react';
import { Link } from 'react-router-dom'
import Terms_of_services_footer from '../Components/Terms_of_services_footer';
export default function Artists_page() {
    return (
        
        <div>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-10 navbar'>

                            <img src='images/jamfeedlogo2.png'></img>

                        </div>
                        <div className='col-sm-2  navbar_containt'>
                            <Link to="/signin"><a>Sign in</a></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container-fluid'>
                    <div className='row heading'>
                        <div className='col-sm-5 header'>
                            <h1 className='head'>Automated <br /> Music Websites</h1>
                            <p className='subhead'>Build your music website in 3 minutes with 3 easy <br />steps, and watch it automatically update for you <br />when you release music, videos, tours, and news!</p>
                            <div className='input_contain'>
                                <div className='row d-flex'>
                                    {/* <div className='col-sm-6'>

                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder='Your email' />
                                    
                                    </div> */}

                                    {/* <div className='col-sm-6'>
                                        <button className="button-black">Request Early Access</button>
                                    </div> */}
                                    <a href="https://form.typeform.com/to/jM8IOwFr" target="_blank" className="green-button w-button">Request early access</a>
                                    <a href="https://calendly.com/jamfeed/automated-music-websites-demo?month=2022-01" className="book-a-demo w-button">BOOK&nbsp;A&nbsp;DEMO</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-7 banner1'>
                            <img src='images/banner1.png'></img>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className='next-section'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h2>Trusted by Top Artists & Bands</h2>
                            </div>
                        </div>
                    </div>

                    <article>
                        <div>
                            <ul>
                                <li>


                                    <div className='row '>
                                        <div className='col-sm-3'>
                                            <img src='images/cardimg.png'></img>
                                        </div>
                                        <div className='col-sm-8'>
                                            <h3>Sammy Adams</h3>
                                            <a href="https://www.sammyadamsmusic.com/">sammyadamsmusic.com</a>

                                        </div>
                                        <div className='col-sm-12 ml-2'>
                                            <p>"This product actually made me want to <br /> focus on building out my online music <br /> business because they make it so easy and <br />bring everything into one place. I'm glad <br /> I&nbsp;no longer have to use Squarespace."</p>
                                        </div>

                                    </div>
                                </li>
                                <li>


                                    <div className='row '>
                                        <div className='col-sm-3 blockimg'>
                                            <img src='images/cardimg2.png'></img>
                                        </div>
                                        <div className='col-sm-9'>
                                            <h3>Jimmy the Human</h3>
                                            <a href="https://jimmythehuman.com/">sammyadamsmusic.com</a>

                                        </div>
                                        <div className='col-sm-12 ml-2'>
                                            <p>“I love JamFeed’s automated websites! They <br />allow me to not worry about keeping it up <br />to date all the time, and it's always has all <br /> my new content live immediately after I <br />release it.”</p>
                                        </div>

                                    </div>
                                </li>
                                <li>


                                    <div className='row '>
                                        <div className='col-sm-3 blockimg'>
                                            <img src='images/cardimg.png'></img>
                                        </div>
                                        <div className='col-sm-9'>
                                            <h3>J Soulja</h3>
                                            <a href="https://www.officialjsoulja.com/">officialjsoulja.com</a>

                                        </div>
                                        <div className='col-sm-12 ml-2'>
                                            <p>“I use JamFeed for my website and EPK. It's <br />like Squarespace or Wix but only for artists. <br />Everything is automated into one platform <br />and that allows me to focus and spend <br /> more time on my music..”</p>
                                        </div>

                                    </div>
                                </li>
                                <li>


                                    <div className='row '>
                                        <div className='col-sm-3 blockimg'>
                                            <img src='images/cardimg3.png'></img>
                                        </div>
                                        <div className='col-sm-9'>
                                            <h3>Peterson Brothers</h3>
                                            <a href="http://petersonbrothersband.com">petersonbrothersband.com</a>

                                        </div>
                                        <div className='col-sm-12 ml-2'>
                                            <p>"We needed something that was super <br />clean, easy to use, and very professional. <br />We’re really excited to have a website that is <br />affordable and very easy to use. Thank you <br />JamFeed!"</p>
                                        </div>

                                    </div>
                                </li>
                                <li>


                                    <div className='row '>
                                        <div className='col-sm-3 blockimg'>
                                            <img src='images/cardimg4.png'></img>
                                        </div>
                                        <div className='col-sm-9'>
                                            <h3>Katie Boeck</h3>
                                            <a href="https://www.katieboeckmusic.com/">katieboeckmusic.com</a>

                                        </div>
                                        <div className='col-sm-12 ml-2'>
                                            <p>"This literally takes a few seconds to set up <br />and is totally worth having. <br />I love not having to worry about updating my website."</p>
                                        </div>

                                    </div>
                                </li>
                                <li>


                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <img src='images/cardimg5.png'></img>
                                        </div>
                                        <div className='col-sm-9'>
                                            <h3>Vincent Antone</h3>
                                            <a href="https://www.vincentantonemusic.com/">vincentantonemusic.com</a>

                                        </div>
                                        <div className='col-sm-12 ml-2'>
                                            <p>“Easy to use and effective. I feel better <br />knowing that JamFeed will always make <br />sure my website is up to date with new <br />content for my fans.”</p>
                                        </div>

                                    </div>
                                </li>
                            </ul>
                        </div>

                    </article>
                </div>
            </section>
            <section>
                <div className='next-header '>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <h2>How It Works</h2>
                        </div>
                    </div>
                    <div className='row'  >

                        <div className='col-sm-4'>
                            <div className='column'>
                                <img src='images/signimg.svg'data-aos="fade-up" data-aos-duration="1500"></img>
                                <h3 data-aos="fade-up" data-aos-duration="2000">Sign Up</h3>
                                <p data-aos="fade-up" data-aos-duration="2000">Sign up to the JamFeed platform and connect <br />your social and streaming accounts instantly <br />with just a few clicks.</p>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='column'>
                                <img src='images/signimg2.svg'data-aos="fade-up" data-aos-duration="1500"></img>
                                <h3 data-aos="fade-up" data-aos-duration="2000">Claim Your Page </h3>
                                <p data-aos="fade-up" data-aos-duration="2000">Claim your artist / band page with Facebook or <br />email so no one can access your page without <br />your permission.</p>
                            </div>

                        </div>
                        <div className='col-sm-4'>
                            <div className='column'>
                                <img src='images/signimg3.svg'data-aos="fade-up" data-aos-duration="1500"></img>
                                <h3 data-aos="fade-up" data-aos-duration="2000">Automate Updates</h3>
                                <p data-aos="fade-up" data-aos-duration="2000">Sit back and watch our automated websites<br /> update for you in real-time with new music,<br /> videos, tours, and news.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-sm-6 update'data-aos="fade-up" data-aos-duration="2000">
                            <h2  >SAVE TIME WITH <br />AUTOMATED WEBSITE <br />UPDATES</h2>
                            <p >JamFeed gives you the ability to always have your website up to date without having to worry about updating it every time you release new content. Enjoy our quick and easy setup and automated updates so you can focus on your music.
                            </p>
                        </div>
                        <div className='col-sm-6 backside'>
                            <img src='images/backuperimg.png'></img>

                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row mt-5 backupdate'>

                        <div className='col-sm-7 backside1'>
                            <img src='images/backuperimg2.png'></img>
                        </div>
                        <div className='col-sm-5 update1'data-aos="fade-up" data-aos-duration="2000">
                            <h2 >GET STREAMING AND <br /> SOCIAL MEDIA<br /> ANALYTICS IN ONE <br />PLACE</h2>
                            <p>No more jumping around from platform to platform! We make it easy to view all of your fan analytics in one place. This allows you to save time and easily understand how your music business is doing.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section>
                <div className=''>
                    <div className='row brands'>
                        <div className='col-sm-5 brand_details'>
                            <h2>GET STARTED <br />QUICKLY WITH OUR<br /> POPULAR MUSIC<br /> TEMPLATES</h2>
                            <p>Our templates are all built specifically for musicians<br /> and bands. With just 1 click you can have a <br />responsive website that works well and looks great<br /> on desktop and mobile.</p>

                        </div>
                        <div className='col-sm-7'>
                            <div className='container'>
                                <Parallax>
                                <div className='row brands_name'>
                                    <div className='col-sm-6'>
                                        <img src='images/brands1.png'></img>
                                        <h3>New Music Release</h3>
                                    </div>
                                    <div className='col-sm-6'>
                                        <img src='images/brands2.png'></img>
                                        <h3>New Music Video</h3>
                                    </div>
                                </div>
                                </Parallax>
                                <Parallax>
                                <div className='row brands_name'>
                                    <div className='col-sm-6'>
                                        <img src='images/brands3.png'></img>
                                        <h3>Photo Home Page</h3>
                                    </div>
                                    <div className='col-sm-6'>
                                        <img src='images/brands4.png'></img>
                                        <h3>New Music Release</h3>
                                    </div>
                                </div>
                                </Parallax>
                                <div className='row brands_name'>
                                    <div className='col-sm-6'>
                                        <img src='images/brands2.png'></img>
                                        <h3>New Music Video</h3>
                                    </div>
                                    <div className='col-sm-6'>
                                        <img src='images/brands3.png'></img>
                                        <h3>Photo Home Page</h3>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </section> */}
            <section>
                <div className='container'>
                    <div className='row faq_containers'>
                        <div className='col-sm-12'>
                            <h2 data-aos="fade-up" data-aos-duration="1500">FAQs</h2>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000">
                        <div className=' '>
                            <div className='col-sm-12 faq_blocks '>

                                <h4 data-toggle="collapse" href="#faq_collapse">How much do JamFeed's automated music websites cost?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>
                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse">
                                We offer monthly or annual payment plans for every artist website, both of<br /> which can be cancelled at any time.  Our monthly plan is $22/month, and our <br />annual plan is $200/year.
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks  '>
                                <h4 data-toggle="collapse" href="#faq_collapse2">Why should I use JamFeed over other website builders like <br />Squarespace, Wix, or Wordpress?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse2">
                                JamFeed was created specifically for musicians. Our platform makes your life <br />easier by automating updates for you when you release new songs, videos,<br /> news, tours, and more!
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks  '>
                                <h4 data-toggle="collapse" href="#faq_collapse3">Am I able to connect my own domain to JamFeed's automated<br /> websites?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse3">
                                Yes!  Our web builder allows you to build and preview your website before you<br /> publish your website to your own domain.  Our team can help you with this <br />process too.
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks  '>
                                <h4 data-toggle="collapse" href="#faq_collapse4">Do I have to host my own website or does JamFeed provide <br />hosting?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse4">
                                Hosting is included on all of our website plans!  All the artist needs to provide is<br /> their domain name to connect to JamFeed's website and we take care of the<br /> hosting.
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks  '>
                                <h4 data-toggle="collapse" href="#faq_collapse5">What if I want to cancel my website and move to another <br />platform?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse5">
                                You are welcome to cancel your website plan at any point if you would like to<br /> move to another platform.  You will always have access to your artist dashboard<br /> for free even if you choose to use another platform for your website.
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks  '>
                                <h4 data-toggle="collapse" href="#faq_collapse6">Who can access my JamFeed artist dashboard and update <br />information?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse6">
                                Only the people who you specifically give permission to. No other brand will be<br /> able to edit your profile or integrations unless you provide them access with<br /> your permission.
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks  '>
                                <h4 data-toggle="collapse" href="#faq_collapse7">Do I have to create an account in order to claim my JamFeed page?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse7">
                                Yes you do! In order to verify with JamFeed, you'll need to create a free account <br />and claim your artist page to access your JamFeed artist dashboard.
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks  '>
                                <h4 data-toggle="collapse" href="#faq_collapse11">Do I have to use Facebook to claim my artist page with JamFeed?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse11">
                                All JamFeed artist pages can be claimed immediately by authorizing<br /> with Facebook, or you can fill out a form to verify your artist account which can<br /> take up to 24-48 hours.
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks  '>
                                <h4 data-toggle="collapse" href="#faq_collapse8">How do you handle my personal data? Do you have access to  <br /> my password or payment information?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse8">
                                JamFeed securely connects with Amazon Web Services (AWS) to handle <br />password security, and Stripe to handle payment processing. This ensures that <br />all your data is stored on these secure platforms and not directly on JamFeed.
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks  '>
                                <h4 data-toggle="collapse" href="#faq_collapse9">Can I connect my merch store to JamFeed's automated websites?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse9">
                                Yes!  We allow artists and bands to integrate with any 3rd party e-commerce<br /> platform such as Shopify, TeeSpring, MerchBar, and more.
                            </div>
                        </div>
                        <div>
                            <div className='col-sm-12 faq_blocks mb-4 '>
                                <h4 data-toggle="collapse" href="#faq_collapse10">Does JamFeed have a referral program if I share with other<br /> musicians?</h4>
                                <img src='images/arrow.svg'></img>

                            </div>

                            <div className=' col-sm-12 collapse faq_text' id="faq_collapse10">
                                We provide every artist with a unique referral link that they can share with any<br /> artist or band.  When they choose a plan and publish their website, you receive 1 <br />free month!
                            </div>
                        </div>
                        <div className='col-sm-12 contact'data-aos="fade-up" data-aos-duration="2000">
                            <h2>Have More Questions?</h2>
                            <a href="mailto:admin@jamfeed.com" className="button w-button">Contact Us</a>

                        </div>
                    </div>
                   </div>
                </div>
            </section>
            <section>
                <div className='footer'>
                    <div className='row '>

                        <div className='col-sm-12 footer_head'>
                            <h2>Save Time & Money!</h2>
                            
                            
                            <div className='footer_book_btn mt-4'>
                                <a href="https://calendly.com/jamfeed/automated-music-websites-demo?month=2022-01" target="_blank" class="referral-button w-button">Book a free demo</a>
                            </div>

                        </div>
                    </div>
                  <div>
                      <Terms_of_services_footer/>
                  </div>
                </div>

            </section>
        </div>
    )

}
