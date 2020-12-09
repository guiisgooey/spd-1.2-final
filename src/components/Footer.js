import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {

  function scrollToTop(){
    window.scroll(0,0)
  }

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the sclptd newsletter to receive updates on new and popular models
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>JS Embed</Link>
            <Link to='/'>AR Integration</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Ownership</Link>
            <Link to='/'>Complaint</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Models</h2>
            <Link to='/'>Submit Model</Link>
            <Link to='/'>Model Creators</Link>
            <Link to='/'>Google Poly</Link>
            <Link to='/'>Copyright</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Medium</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo' onClick={scrollToTop}>
              sclptd
              <img src='images/logo.png' height='40px'/>
            </Link>
          </div>
          <small class='website-rights'>sclptd © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-medium' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer

