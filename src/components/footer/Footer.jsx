import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {IoLogoInstagram} from 'react-icons/io'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className='container_foot'>
        <a href="#" className='footer_logo'> D'Yaa</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#exp'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#test'>Reviews</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer_socials'>
          <a href='https://facebook.com'><BsFacebook/></a>
          <a href='https://instagram.com'><IoLogoInstagram/></a>
          <a href='https://twitter.com'><AiFillTwitterCircle/></a>
        </div>

        <div className='footer_copyright'>
          <small>&copy; D'Yaa Alyassin</small>
        </div>


        </div>
    </footer>
  )
}

export default Footer
