import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import Skill from './Skill';
import './Styles.css'

function CreateState() {
  const [imagePath, setImage] = useState('./logoJS.png')
  return { imagePath, setImage }
}

export default function Skills() {
  const { imagePath, setImage } = CreateState()

  const click = (event) => {
    setImage(event.target.value)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="ui container">
        <Fade left>
          <div>
            <div className='tags'>
              <p>&lt; div &gt;</p>
              <br />
              <p>&lt; h1 &gt;</p>
            </div>

            <div style={{ fontSize: '45px', fontStyle: 'bold', color: 'orange' }}>
              <br />
              <MovingComponent type="typewriter"
                dataText={[
                  'Technical Skills'
                ]} />
            </div>

            <div className='tags'>
              <br />
              <p>&lt; /h1 &gt;</p>
              <br />
            </div>

            <div className='tags'>
              <p>&lt; ul &gt;</p>
            </div>
            <div>
              <br />
              <button
                onClick={click}
                className='ui inverted white button' value='./logoJS.png' >Javascript</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoHTMLCSS.png' >HTML5/CSS3</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoReact.png' >React/Redux</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoNode.png' >Node.JS</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoExpress.png' >Express</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoPostgres.png' >PostgresSQL</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoSequelize.png' >Sequelize</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoJasmine.png' >Jasmine</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoChart.png' >Chart.JS</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoPhaser.png' >Phaser3</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoSocket.png' >SocketIO</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoGit.png' >Git</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoBabel.png' >Babel</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoWebpack.png' >Webpack</button>
              <br />
              <br />
              <button onClick={click} className='ui inverted white button' value='./logoEnz.png' >Enzyme/Jest</button>
              <br />
            </div>



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
        <Skill
          imagePath={imagePath}
          setImage={setImage}
        />
      </div>
    </div>
  )
}