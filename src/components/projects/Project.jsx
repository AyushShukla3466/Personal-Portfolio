import React from 'react'
import './project.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <div className='portfolio__item-btn'>
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <div className='portfolio__item-btn'>
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <div className='portfolio__item-btn'>
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <div className='portfolio__item-btn'>
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <div className='portfolio__item-btn'>
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <div className='portfolio__item-btn'>
            <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project