import React from 'react'
import './About.css'
import SimpleImageSlider from "react-simple-image-slider";
import ME from '../../assets/RedHood1.jpg'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {VscRootFolder} from 'react-icons/vsc'
import exp from '../exp/Exp'
import {UseState} from 'react'


const About = () => {

  
  return (
    <section id='about '>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about_me'>
          <div className='about_me-image'>
           {/*<SimpleImageSlider width={896} height={504}images={images} showBullets={true} showNavs={true}/> */}
            <img src={ME} alt="" />
          </div>
        </div>

 
        <div className='about_content'>
          <div className='about_cards'>
            {/* *********************  FIRST CARD  *********************** */}
              <article className='about_card'>
                <BiAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Years </small>
              </article>

            {/* *********************  SECOND CARD  *********************** */} 
              <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small> 20+ completed</small>
              </article>

            {/* *********************  THIRD CARD  *********************** */}
              <article className='about_card'>
                <VscRootFolder className='about_icon'/>
                <h5>Projects</h5>
                <small>3+ Years </small>
               </article>
          </div>

          <p> Infinity Comics is a new take on the superhero genre, grounding our protagonist and crating a complelling
            hhsdfgshdgfhksdfjkhsdjfhsdkjfjhfjsdhlfjdshjfkhsdjfhjksdfhljskdhfjksdhfsgdshgdf
            dskfhvshjkdfghsdfhskdhfsdkjfgsdjhfgsdjhgfsdhjgfsajfgsjd
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>
   
      </div>
    </section>
  )
}

export default About
