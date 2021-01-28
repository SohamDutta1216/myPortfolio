import React from 'react'
import './Loader.css'
import Fade from 'react-reveal/Fade';

export default function Loader() {
  return (
    <div>
      <Fade left>
        <div className="lds-facebook">
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
        </div>
      </Fade>
    </div>
  )
}