import React from 'react'
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

            </div>

            <h2 style={{ color: 'white' }}>Languages</h2>
            <button class='ui blue button'> JavaScript</button>
            <button class='ui blue button'> TypeScript</button>
            <button class='ui blue button'> Elixir / Erlang</button>
            <h2 style={{ color: 'white' }}>Front-End</h2>
            <button class='ui blue button'> HTML / CSS</button>
            <button class='ui blue button'>SCSS</button>
            <button class='ui blue button'>React / Redux</button>
            <button class='ui blue button'> Angular</button>
            <button class='ui blue button'> Bootstrap </button>
            <button class='ui blue button'> Material UI </button>
            <button class='ui blue button'> Semantic UI </button>
            <button class='ui blue button'> Chart JS </button>
            <button class='ui blue button'> Phaser 3 </button>
            <br /><br />
            <button class='ui blue button'> Styled Components</button>

            <h2 style={{ color: 'white' }}>Back-End</h2>
            <button class='ui blue button'>Node</button>
            <button class='ui blue button'>Express</button>
            <button class='ui blue button'>PostgreSQL</button>
            <button class='ui blue button'>MongoDB</button>
            <button class='ui blue button'>Sequelize</button>
            <button class='ui blue button'>Mongoose</button>
            <button class='ui blue button'>SocketIO</button>

            <h2 style={{ color: 'white' }}>Testing</h2>
            <button class='ui blue button'>Jasmine</button>
            <button class='ui blue button'>Mocha / Chai</button>
            <button class='ui blue button'>Enzyme / Jest</button>

            <h2 style={{ color: 'white' }}>Tools</h2>
            <button class='ui blue button'>Git</button>
            <button class='ui blue button'>Babel</button>
            <button class='ui blue button'>Webpack</button>
            <button class='ui blue button'>Netlify</button>
            <button class='ui blue button'>Heroku</button>
            <button class='ui blue button'>Postman</button>
            <button class='ui blue button'>Postico</button>
            <button class='ui blue button'>Trello</button>
            <button class='ui blue button'>Asana</button>

            <h2 style={{ color: 'white' }}>Conceptual</h2>
            <button class='ui blue button'>Agile</button>
            <button class='ui blue button'>Scrum</button>
            <button class='ui blue button'>RDB schema design</button>
            <button class='ui blue button'>SPA architecture</button>
            <button class='ui blue button'>Responsive Design</button>

            <h2 style={{ color: 'white' }}>Working Knowledge of</h2>
            <button class='ui blue button'>AWS</button>
            <button class='ui blue button'>GraphQL</button>
            <button class='ui blue button'>Figma</button>
            <button class='ui blue button'>SQL</button>
            <button class='ui blue button'>React Native</button>

            <br />

            <br />


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