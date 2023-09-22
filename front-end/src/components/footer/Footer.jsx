import React from 'react'
import '../footer/footer.css'

const Footer = () => {
  return (
    <div>
        <section className="footer_container">
            <div className="box-1">
                <article className="ul-1">
                    <h1>Health</h1>
                    <ul>
                        <li><a href="/">MedFlow Pro</a></li>
                        <li><a href="/">Book Medicine</a></li>
                        <li><a href="/">Doctor Consult</a></li>
                        <li><a href="/">Book a Lab test</a></li>
                        <li><a href="/">COVID-19</a></li>
                        <li><a href="/">Surgery Care</a></li>
                        <li><a href="/">24/7 support</a></li>
                    </ul>
                </article>
                <article className="ul-2">
                    <h1>About</h1>
                    <ul>
                        <li><a href="/">Overview</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Testimonials</a></li>
                        <li><a href="/">Security</a></li>
                        <li><a href="/">Cart</a></li>
                        <li><a href="/">FAQ's</a></li>
                        <li><a href="/">MedFlow Buddies</a></li>
                    </ul>
                </article>
            </div>
            <div className="box-2">
              <div className="download-app">
               <h1>Download App</h1>
                 <button><a href="/"><i class="ri-google-play-fill"></i></a></button>
                 <button><a href="/"><i class="ri-apple-fill"></i></a></button>
              </div>

            <div className="follow-us">
                <h1>Follow Us</h1>
                <button><a href="/"><i class="ri-instagram-line"></i></a></button>
                <button><a href="/"><i class="ri-whatsapp-line"></i></a></button>
                <button><a href="/"><i class="ri-facebook-fill"></i></a></button>
                <button><a href="/"><i class="ri-twitter-line"></i></a></button>
                <button><a href="/"><i class="ri-google-fill"></i></a></button>
            </div>

            <div className="user-policies">
                <button className='terms-btn'><a href="/">Terms of use</a></button>
                <button className='user-btn'><a href="/">User Policy</a></button>
            </div>
        </div>

            
        </section>
        
    </div>
  )
}

export default Footer