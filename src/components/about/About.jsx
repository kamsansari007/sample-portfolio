import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='About Image ' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working Experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>20+ Clients Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
                <h5>Project</h5>
                <small>80+ Completed Projects</small>
            </article>
            
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nihil unde ducimus eligendi nemo accusamus, velit delectus vitae, harum vero illo dolorem dolorum reprehenderit! Incidunt hic nulla adipisci cupiditate commodi?
          </p>
          <a href='contact' className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
