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

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default function Navbar() {
  const size = useWindowSize()

  return (
    <Router>
      <div>
        <nav>
          <div>
            {size.width < 1500 ?
              <div className='ui top fixed seven item inverted menu' style={{ marginRight: '200px' }}>
                <div className="item">
                  <Link to='/'>
                    <img className='ui tiny image' src='/myLogo.png' />
                  </Link>
                </div>
                <div className="item">
                  <Link to='/'>
                    <i className="orange home icon" />
                  </Link>
                </div>
                <div className="item">
                  <Link to='/about'>
                    <i className="orange user icon" />
                  </Link>
                </div>
                <div className="item">
                  <Link to='/skills'>
                    <i className="orange chart bar icon" />
                  </Link>
                </div>
                <div className="item">
                  <Link to='/work'>
                    <i className="orange folder icon" />
                  </Link>
                </div>
                <div className="item">
                  <Link to='/contact'>
                    <i className="orange envelope icon" />
                  </Link>
                </div>
                <div className="item">
                  <a href='https://www.linkedin.com/in/soham-dutta-932550181/'>
                    <i className="orange linkedin icon" />
                  </a>
                  <br />
                  <a href='https://github.com/SohamDutta1216'>
                    <i className="orange github icon" />
                  </a>
                  <br />
                  <a href='https://www.facebook.com/soham.dutta.7'>
                    <i className="orange facebook icon" />
                  </a>
                </div>
              </div>
              :
              <div className='ui thin visible left vertical inverted sidebar labeled icon menu'>
                <div className='ui clearing inverted segment' />

                <div className="item">
                  <Link to='/'>
                    <img className='ui tiny middle aligned image' src='/myLogo.png' />
                  </Link>
                  <div className='ui clearing inverted segment' />
                </div>
                <div className='ui clearing inverted segment' />
                <Link to='/'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>HOME</div>
                    <div className="visible content">
                      <i className="orange home icon" />
                    </div>
                  </div>
                </Link>

                <div className='ui clearing inverted segment' />
                <Link to='/about'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>ABOUT</div>
                    <div className="visible content">
                      <i className="orange user icon" />
                    </div>
                  </div>
                </Link>

                <div className='ui clearing inverted segment' />
                <Link to='/skills'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>SKILLS</div>
                    <div className="visible content">
                      <i className="orange chart bar icon" />
                    </div>
                  </div>
                </Link>

                <div className='ui clearing inverted segment' />
                <Link to='/work'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>WORK</div>
                    <div className="visible content">
                      <i className="orange folder icon" />
                    </div>
                  </div>
                </Link>

                <div className='ui clearing inverted segment' />
                <Link to='/contact'>
                  <div className="ui inverted basic animated button" tabIndex="0">
                    <div className="hidden content" style={{ color: 'orange' }}>MESSAGE</div>
                    <div className="visible content">
                      <i className="orange envelope icon" />
                    </div>
                  </div>
                </Link>

                <div className='ui clearing inverted segment' />

                <div className='ui clearing inverted segment' />

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


            }

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
