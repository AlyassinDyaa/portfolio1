import React from 'react'
import './Exp.css'
import {BsPatchCheckFill } from 'react-icons/bs'
import {UseState} from 'react'

const exp = () => {

  

  return (
    <section id='exp'>
      <h5>MY SKILLS</h5>
      <h2>Experience</h2>

      <div className='container exp_container'>
        {/* SOFT SKILLS CARD  */}
        <div className='exp_softSkills'>
            {/* EACH SKILL WILL BE IN ITS OWN ARTICLE TAG - 
            each tag will have its own check icon and exp level  */}
            <h3>SOFT SKILLS</h3>
            <div className='exp_content'>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>Unison</h4>
                  <small className='text-light'>Dylan Akers</small>
                </div>
              </article>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>Binary</h4>
                  <small className='text-light'>Jai Jeong</small>
                </div>
              </article>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>Orephic</h4>
                  <small className='text-light'>Onyx Odyssa</small>
                </div>
              </article>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>Lazron</h4>
                  <small className='text-light'>Laz</small>
                </div>
              </article>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>The Matter</h4>
                  <small className='text-light'>Maxwell Matters</small>
                </div>
              </article>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>Leviantion </h4>
                  <small className='text-light'>Elizabeth Matters</small>
                </div>
              </article>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>BUGG</h4>
                  <small className='text-light'>Emry Hollow</small>
                </div>
              </article>

            </div>
        </div>

        <div className='exp_hardSkills'>
               {/* HARD SKILLS CARD  */}
           {/* EACH SKILL WILL BE IN ITS OWN ARTICLE TAG - 
            each tag will have its own check icon and exp level  */}  
            <h3>HARD SKILLS</h3>
            <div className='exp_content'>


            <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>Rick Rozlaous</h4>
                  <small className='text-light'>The Partnership</small>
                </div>
              </article>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>Mr Dream</h4>
                  <small className='text-light'>Unam Edd</small>
                </div>
              </article>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>Cortex</h4>
                  <small className='text-light'>The Holos</small>
                </div>
              </article>

              <article className='exp_details'>
                <BsPatchCheckFill className='exp_details-icon'/>
                <div>
                  <h4>Dr Crumane</h4>
                  <small className='text-light'>The Elites</small>
                </div>
              </article>

            
            </div>
        </div>
       
      </div>


    </section> 
  )
}

export default exp
