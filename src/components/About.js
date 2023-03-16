import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
     


        {/* <div class="column-2">
            <h1>About me</h1>
            <p>My name is Abdul Rab, I’ve been studying computer science for three years. In order to kick-start my career before I graduate, I am looking for a job of a web developer, since that’s what I’ve been doing already for four years in my free time. Designing websites for friends, developing simple e-shops with the help of some open source content-management systems, and so on. Besides that I am a normal guy who enjoys hiking and spending time with friends, while not working or studying, which takes most of my time of course. If I should pick the best website I’ve designed up to this point, it will be this one: Password Management. I am ambitious and hard-working and believe you’ll give me a chance to prove my words.</p>    
        </div>
        <div class="column-2 large-profile">
           

  </div> */}
  <div class = "about-wrapper">
      <div class = "about-left">
        <div class = "about-left-content">
          <div>
            <div class = "shadow">
              <div class = "about-img">
                <img src = "avtar.jpg" alt = "about image"/>
              </div>
            </div>

            <h2>Abdul Rab</h2>
            <h3>Project Developer</h3>
          </div>

          <ul class = "icons">
            <li><i class = "fab fa-facebook-f"></i></li>
            <li><i class = "fab fa-twitter"></i></li>
            <li><i class = "fab fa-linkedin"></i></li>
            <li><i class = "fab fa-instagram"></i></li>

          </ul>
        </div>
      </div>

      <div class = "about-right">
        <h1>hi<span>!</span></h1>
        <h2>Here's who I am & what I do</h2>
      
        <div class = "about-btns">
      

        <h5> <Link to='/resume' ><a  > <button type = "button" className = "btn btn-pink"  >Resume me</button></a>	</Link></h5>
         < h5> <Link to='https://github.com/abdulrab9939' ><a  > <button type = "button" className = "btn btn-pink"  >Project </button></a>	</Link></h5>
        </div>

        <div class = "about-para">
        <p>My name is Abdul Rab, I’ve been studying computer science for three years. In order to kick-start my career before I graduate, I am looking for a job of a web developer, since that’s what I’ve been doing already for four years in my free time. Designing websites for friends, developing simple e-shops with the help of some open source content-management systems, and so on. Besides that I am a normal guy who enjoys hiking and spending time with friends, while not working or studying, which takes most of my time of course. If I should pick the best website I’ve designed up to this point, it will be this one: Password Management. I am ambitious and hard-working and believe you’ll give me a chance to prove my words.</p>    
        </div>
      </div>
    </div>


    </div>
  )
}

export default About
