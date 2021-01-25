import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './LandingPage';
import About from './About'
import Skills from './Skills'
import Work from './Work'
import ContactForm from './ContactForm'
import './Styles.css'


export default function Navbar() {


  return (
    <Router>
      <div>
        <nav>
          <div>

            <div className='ui mini visible left vertical inverted sidebar labeled icon menu' >

              <div className="item">
                <Link to='/'>
                  <img className='ui tiny middle aligned image' src='/myLogo.png' />
                </Link>
              </div>
              <div className='item' >
                <Link to='/'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>HOME</div>
                    <div className="visible content">
                      <i className="orange home icon" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item' >
                <Link to='/about'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>ABOUT</div>
                    <div className="visible content">
                      <i className="orange user icon" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item' >
                <Link to='/skills'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>SKILLS</div>
                    <div className="visible content">
                      <i className="orange chart bar icon" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className='item' >
                <Link to='/work'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>WORK</div>
                    <div className="visible content">
                      <i className="orange folder icon" />
                    </div>
                  </div>
                </Link>

                <div className='item' />
                <Link to='/contact'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>MESSAGE</div>
                    <div className="visible content">
                      <i className="orange envelope icon" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className='ui inverted clearing segment' >

                <a href='https://www.linkedin.com/in/soham-dutta-932550181/'>
                  <i className="orange linkedin icon" />
                </a>
                <a href='https://github.com/SohamDutta1216'>
                  <i className="orange github icon" />
                </a>
                <a href='https://www.facebook.com/soham.dutta.7'>
                  <i className="orange facebook icon" />
                </a>
              </div>
            </div>


          </div>
        </nav>
        <Switch>
          <Route path='/' component={LandingPage} exact={true} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/work' component={Work} />
          <Route path='/contact' component={ContactForm} />
        </Switch>
      </div>
    </Router >

  )
}
