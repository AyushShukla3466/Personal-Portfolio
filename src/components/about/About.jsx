import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {MdWorkOutline} from 'react-icons/md'
import {LiaCertificateSolid} from 'react-icons/lia'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdWorkOutline className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Internships</small>
            </article>

            <article className='about__card'>
              <LiaCertificateSolid className='about__icon' />
              <h5>Certificates</h5>
              <small>6+ Achieved</small>
            </article>

            <article className='about__card'>
              <AiOutlineProject className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Computer Science enthusiast with a good foundation in Competitive Programming skills. Excellent teamwork, Interpersonal and
Communication skills. Passionate about research in ML/AI.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About