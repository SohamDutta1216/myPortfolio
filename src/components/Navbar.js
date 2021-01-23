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
            {size.width < 1310 ?
              <div className='ui top fixed five item inverted menu'>
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
              </div>
              :
              <div className='ui visible left vertical inverted sidebar labeled icon menu'>
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
    </Router>

  )
}
