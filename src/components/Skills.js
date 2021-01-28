import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import './Styles.css'
import Bounce from 'react-reveal/Bounce';
import React, { useEffect, useState } from 'react'
import Loader from './Loader'

export default function Skills() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  return (
    <div>
      {loading === false ?
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
                  <p>&lt; div className="grid" &gt;</p>
                </div>
                <Bounce top cascade>
                  <div>
                    <br />
                    <div className="ui five stackable cards">
                      <div className="ui fluid card">
                        <div className="image">
                          <img src="./logoJS.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">JavaScript</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui fluid card">
                        <div className="image">
                          <img src="./logoHTMLCSS.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">HTML5/CSS3</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoReact.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">React/Redux</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoNode.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Node.JS</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoExpress.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Express</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoPostgres.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">PostgresSQL</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoSequelize.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Sequelize</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoJasmine.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Jasmine</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoChart.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Chart.JS</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoPhaser.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Phaser3</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoSocket.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">SocketIO</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoGit.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Git</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoBabel.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Babel</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoWebpack.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Webpack</p>
                        </div>
                      </div>
                      <br />
                      <div className="ui centered card">
                        <div className="image">
                          <img src="./logoEnz.png" alt="logo" />
                        </div>
                        <div className="content">
                          <p className="header">Enzyme/Jest</p>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                </Bounce>


                <div className='tags'>
                  <br />
                  <p>&lt; /div &gt;</p>
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
        :
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="ui container">
            <div>
              <Loader />
            </div>
          </div>
        </div>
      }
    </div>
  )
}