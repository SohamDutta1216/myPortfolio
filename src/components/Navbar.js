import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './LandingPage';
import About from './About'

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <div className='ui inverted left fixed vertical menu'>
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
                <Link to='/message'>
                  <i className="orange envelope icon" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path='/' component={LandingPage} exact={true} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>

  )
}