import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'



const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>


      <div className = ' container contact_continer'>
        <div className = 'contact_options'>
          <article className = 'contact_option'>
            {/* for each contact option (email, message, phone) there will be an icon. the option will be placed inside of a card*/}
             {/* ICON => H4 => H5 => INSIDE EACH CARD*/}
              <AiOutlineMail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>pablopurrito@gmail.com</h5>
              <a href='mailto:pablopurrito@gmail.com' target="_blank">Send a message</a>
          </article>


          <article className = 'contact_option'>
            {/* for each contact option (email, message, phone) there will be an icon. the option will be placed inside of a card*/}
             {/* ICON => H4 => H5 => INSIDE EACH CARD*/}
              <RiMessengerLine className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>me.face</h5>
              <a href='https://m.me/dyaa' target="_blank">Send a message</a>
          </article>

          <article className = 'contact_option'>
            {/* for each contact option (email, message, phone) there will be an icon. the option will be placed inside of a card*/}
             {/* ICON => H4 => H5 => INSIDE EACH CARD*/}
              <BsWhatsapp className='contact_option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+5189995259</h5>
              <a href='https://api.whatsapp.com/send?phone=5189525899' target="_blank">Send a message</a>
          </article>

          <article className = 'contact_option'>
            {/* for each contact option (email, message, phone) there will be an icon. the option will be placed inside of a card*/}
             {/* ICON => H4 => H5 => INSIDE EACH CARD*/}
              <SiFiverr className='contact_option-icon'/>
              <h4>Fiverr</h4>
              <h5>https://www.fiverr.com/</h5>
              <a href='mailto:pablopurrito@gmail.com' target="_blank">Send a message</a>
          </article>
        </div>

         {/* END OF CONTACT OPTIONS*/}
        <form action=''>
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='bn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
