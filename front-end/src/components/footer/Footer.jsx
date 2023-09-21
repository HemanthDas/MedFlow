import React from 'react'
import '../footer/footer.css'
import{AiFillGithub} from 'react-icons/ai';
import{BsFacebook} from 'react-icons/bs';
import{BsWhatsapp} from 'react-icons/bs';
const Footer = () => {
  return (
    <div>
        <section className="container footer_container">
            <div className="box-container-1">
                <div className="box-1">
                <article className="services">
                    <h1>Our Services</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Doctors</a></li>
                        <li><a href="/">Partners</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </article>
                </div>

                <div className="box-2">
                <article className="services">
                    <h1>Our Milestones</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Doctors</a></li>
                        <li><a href="/">Partners</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </article>
                
                </div>
            </div>
            <div className="box-container-2">

                <div className="box-1">
                <button><a href="/"><AiFillGithub /></a></button>
                <button><a href="/"><BsFacebook /></a></button>
                <button><a href="/"><BsWhatsapp /></a></button>
                </div>

                <div className="box-2">
                    <form action="">
                        <input type="email" placeholder='enter mail' /> <br />
                        <textarea rows="2" placeholder='message'></textarea> <br />
                        <button className='submit-btn' type='submit'>Send</button>
                    </form>
                </div>
            </div>
                
        </section>
        <div className="copyright">
        <p>&copy; Copyright 2023. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer