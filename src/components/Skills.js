import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import './Styles.css'
import Bounce from 'react-reveal/Bounce';


export default function Skills() {




  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>

      <div style={{ margin: '0' }}>
      </div>

      <div className="ui container">

        <Fade left>
          <div>
            <div className='tags'>
              <p>&lt; div &gt;</p>
              <br />
              <p>&lt; h1 &gt;</p>
              <br />
            </div>

            <div className='typeText'>
              <br />
              <MovingComponent type="typewriter"
                dataText={[
                  'Skills'
                ]} />
              <br />
            </div>

            <div className='tags'>
              <br />
              <p>&lt; /h1 &gt;</p>
              <br />
            </div>

            <div className='tags'>
              <p>&lt; ul &gt;</p>
            </div>
            <Bounce top cascade>
              <div>
                <br />
                <p className='regText'>Javascript</p>
                <br />
                <p className='regText'>HTML5/CSS3</p>
                <br />
                <p className='regText'>React/Redux</p>
                <br />
                <p className='regText'>Node.JS</p>
                <br />
                <p className='regText'>Express</p>
                <br />
                <p className='regText'>PostgresSQL</p>
                <br />
                <p className='regText'>Sequelize</p>
                <br />
                <p className='regText'>Jasmine</p>
                <br />
                <p className='regText'>Chart.JS</p>
                <br />
                <p className='regText'>Phaser3</p>
                <br />
                <p className='regText'>SocketIO</p>
                <br />
                <p className='regText'>Git</p>
                <br />
                <p className='regText'>Babel</p>
                <br />
                <p className='regText'>Webpack</p>
                <br />
                <p className='regText'>Enzyme/Jest</p>
                <br />
              </div>
            </Bounce>


            <div className='tags'>
              <br />
              <p>&lt; /ul &gt;</p>
              <br />
            </div>

            <div className='tags'>

              <p>&lt; div &gt;</p>
              <br />

            </div>
          </div>
        </Fade>
      </div>
      <div style={{ display: 'flex' }}>

      </div>
    </div>
  )
}