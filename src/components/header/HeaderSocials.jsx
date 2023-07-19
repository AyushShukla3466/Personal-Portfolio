import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ayush-shukla-288271221" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/AyushShukla3466" target='_blank'><AiFillGithub/></a>
        <a href="https://www.instagram.com/ayushshukla3466/" target='_blank'><AiFillInstagram/></a>
        
    </div>
  )
}

export default HeaderSocials