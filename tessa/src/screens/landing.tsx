import React from 'react'
import logo from "../assets/logo.png"
import landingPic from "../assets/pic1.png"
import pic2 from "../assets/pic2.png" 
import micro from "../assets/micro.png"
import {Link} from "react-router-dom"
import arrow1 from "../assets/arrow1.png"
import fairy from "../assets/fairy.png"
import riddles from "../assets/riddles.png"
import arrow2 from "../assets/arrow2.png"
import {AiOutlineCheckCircle} from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { BiCopyright } from "react-icons/bi"

const Landing=()=>{
    return(
        <div>
            <div className='home'>
                <div className="navv">
                    <div>
                        <img src={logo} alt="logo" className='logo'/>
                    </div>
                    <ul>
                        <li>
                            <a href="#abt">How it works</a>
                        </li>
                        <li>
                           <a href="#pricing">Pricing</a>
                        </li>
                        <li>
                           <a href="#contact">Contact us</a>
                        </li>
                    </ul>
                    <button className="btnn">
                    <a href="/login" className='text-decoration-none color-blue'>Login</a>
                    </button>
                </div>
                <div className="containerr">
                    <div>
                        <h5>Welcome to Tessa!</h5>
                        <p>A magical world where children can read books, solve riddles, and listen to<br/> enchanting songs and recitations!</p>
                        <button className='start-btn'>Start now</button>
                    </div>
                    <div>
                        <img src={landingPic} alt="landing" className='landingPic'/>
                    </div>
                </div>
            </div>
            <div className="desc">
                <img src={pic2} alt="pic2" className='pic2' />
                <div className='cont1'>
                    <h2>Where stories unfold.</h2>
                    <p>With our app, your child will have access to a vast library of books, from classic fairy tales to exciting adventure stories, all designed to ignite their imagination and foster a love for reading.</p>
                    <div className='nbr'>
                        <div >
                            <h1>100+</h1>
                            Books
                        </div>
                        <div>
                            <h1>50+</h1>
                            Riddles
                        </div>
                        <div>
                            <h1>50+</h1>
                            Songs & Recitations
                        </div>
                    </div>
                    <button className="btn1">Start now</button>
                    <button className="btn2">Learn more</button>
                </div>
            </div>
            <div className="abt" id='abt'>
                <h1 className='text-base text-center mt-5 fw-bolder'>How it works!</h1>
                <div className="line"></div>
                <div className='d-flex details'>
                    <div className='w-50 mt-5 detail'>
                        <h1 className='mx-3 fw-bold nbr-title'>01</h1>
                        <h2 className='mx-3 fw-bolder blue mb-4 mt-4'>Get your Tessa AI Nanny</h2>
                        <p className='mx-3 lh-lg'>Tessa is a smart assistant that can read books and riddles to your child in a clear<br/> and engaging voice, or sing songs and recitations in a fun and playful way. Tessa is<br/> designed to interact with your child, answering their questions and providing helpful <br/>explanations along the way.</p>
                    </div>
                    <div className='mx-5 px-5'>
                        <img src={micro} alt="micro" className='mx-5'/>
                    </div>
                </div>
                <img src={arrow1} alt="arrow" className='arrow' />
                <div className='d-flex details'>
                    <div className='mx-5 px-5'>
                        <img src={fairy} alt="micro" className='mx-5 px-5'/>
                    </div>
                    <div className='w-50 mt-5 detail two'>
                        <h1 className='mx-5 fw-bold nbr-title'>02</h1>
                        <h2 className='mx-5 fw-bolder blue mb-4 mt-4'>Read your children's favorite fairy tales</h2>
                        <p className='mx-5 lh-lg'>Tessa is a smart assistant that can read books and riddles to your child in a clear<br/> and engaging voice, or sing songs and recitations in a fun and playful way. Tessa is<br/> designed to interact with your child, answering their questions and providing helpful <br/>explanations along the way.</p>
                    </div>
                </div>
                <img src={arrow2} alt="arrow" className='arrow' />
                <div className='d-flex details'>
                    <div className='w-50 mt-5 detail'>
                        <h1 className='mx-3 fw-bold nbr-title'>03</h1>
                        <h2 className='mx-3 fw-bolder blue mb-4 mt-4'>Complete your day with fun actities</h2>
                        <p className='mx-3 lh-lg'>Tessa is a smart assistant that can read books and riddles to your child in a clear<br/> and engaging voice, or sing songs and recitations in a fun and playful way. Tessa is<br/> designed to interact with your child, answering their questions and providing helpful <br/>explanations along the way.</p>
                    </div>
                    <div className='mx-5 px-5'>
                        <img src={riddles} alt="micro" className='mx-5'/>
                    </div>
                </div>
            </div>
            <div className="pricing" id='pricing'>
                <h1 className='text-base text-center mt-5 fw-bolder'>Pricing!</h1>
                <div className="line"></div>
                <div className="pricing-details d-flex">
                    <div className='bg-light'>
                        <p>Basic plan for starters</p>
                        <h1 className='fw-bolder'>Free</h1>
                        <div className='checks mb-5'>
                            <AiOutlineCheckCircle size={17} className="color-orange mx-2 "/>
                            <p>No commitments. Cancel anytime</p><br/>
                            <AiOutlineCheckCircle size={17} className="color-orange mx-2 "/>
                            <p>We will remind you a week before your trial ends.</p>
                        </div>
                        <button className='start-btn mx-5 mt-5'>Get started</button>

                    </div>
                    <div className='bg-blue'>
                        <p>Basic plan for starters</p>
                        <h1 className='fw-bolder'>$ 9.95 / mo</h1>
                        <div className='checks mb-3'>
                            <AiOutlineCheckCircle size={17} className="color-orange mx-2 "/>
                            <p>No commitments. Cancel anytime</p><br/>
                            <AiOutlineCheckCircle size={17} className="color-orange mx-2 "/>
                            <p>We will remind you a week before your trial ends.</p><br/>
                            <AiOutlineCheckCircle size={17} className="color-orange mx-2 "/>
                            <p>You won’t be charged until after 30 days.</p>
                        </div>
                        <button className='start-btn1 mx-5 fw-bolder '>Get started</button>
                    </div>
                </div>
            </div>
            <div className="contact" id='contact'>
                    <div className='upda'>
                        <h1 className='fw-bolder color-blue'>Sign up for updates</h1>
                        <p>Access our new books, riddles and songs </p>
                        <div className='subscribe'>
                            <input type="text" className='subscribe-search-input' placeholder='Email Address'/>
                            <button className="custom-search-botton" type="submit">Subscribe</button>
                        </div>
                    </div>
            </div>
            <div className='footer'>
                <div className='d-flex'>
                    <div className='first'>
                        <img src={logo} alt="logo" className='logo'/>
                        <p className='px-5 pt-5 mx-3'>Explore new worlds and discover endless possibilities with our app.</p>
                    </div>
                    <div className="second px-5 pt-4">
                        <ul className='mt-5 mx-5 px-5'>
                            <li className='pb-4 mb-4 mx-5'>
                                <a href="#abt" className='text-decoration-none txt-white'>How it works</a>
                            </li>
                            <li className='pb-4 mb-4 mx-5'>
                                <a href="#pricing" className='text-decoration-none txt-white'>Pricing</a>
                            </li>
                            <li className='pb-4 mx-5'>
                                <a href="#contact" className='text-decoration-none txt-white'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="third mt-5 pt-4 mx-5 px-5">
                        <FaInstagram size={20} className="mx-5 socials"/>
                        <FaTwitter size={20} className="mx-5 socials"/>
                        <FaLinkedinIn size={20} className="mx-5 socials" />
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="line1"></div>
                    <p>Copyright <BiCopyright/> 2021. All Rights Reserved.</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Landing