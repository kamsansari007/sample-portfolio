import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key = {id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title}/>
                  <h3>{title} </h3>
                  <div className="portfolio_item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        
        }


        {/*<article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt='' />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href='https://github.com/' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt='' />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href='https://github.com/' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt='' />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href='https://github.com/' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt='' />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href='https://github.com/' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt='' />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href='https://github.com/' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
  </article>*/}


      </div>
    </section>
  )
}

export default Portfolio
