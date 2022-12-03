import {React} from 'react'
import './head.css'
import CTA from './callToAction'
import Social from './socialNav'
import ME from '../../assets/unison.png'

const Head = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>D'Yaa Alyassin</h1>
        <h5 className='text-light'> Front-end Developer</h5>
        <CTA></CTA>
        <Social/>

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll_down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Head
