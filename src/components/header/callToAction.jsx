import React from 'react'
import resume from '../../assets/dyaaResume.pdf'

const callToAction = () => {
  return (
    <div className='cta'>
      <a href = {resume} download className='btn'> Download Resume </a>
      <a href="#contact" className='btn btn-primary'> Let's Talk </a>
    </div>
  )
}

export default callToAction
