import React from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import './Styles.css'

export default function Work() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="ui container">
        <Fade left>
          <div>
            <div className='tag'>
              <p>&lt; div &gt;</p>
              <br />
              <p>&lt; h1 &gt;</p>
            </div>

            <div className='tag'>
              <br />
              <MovingComponent type="typewriter"
                dataText={[
                  'My Work'
                ]} />
            </div>

            <div className='tag'>
              <br />
              <p>&lt; /h1 &gt;</p>
              <br />
            </div>

            <div className='tag'>
              <p>&lt; ul &gt;</p>
              <br />
            </div>
            <div className='ui grey inverted segment'>
              <h3 className='regText'>Sleep Visualizer</h3>
              <p>- A web application that graphs your sleep data and daily habits to find correlations between the two to give a deeper insight into improving your sleep. Compatible with data from the OuraRing or most similar sleep tracking devices. Built using Chart.JS, React/Redux, Express, Node.JS, PostgresSQL, Sequelize, OuraRing API .</p>

            </div>

            <div className='ui grey inverted segment'>
              <h3 className='regText'>Sneaker Shopper</h3>
              <p>- A fully functional dummy E-Commerce store using the StockX API and local storage to track user shopping cart data. Built using React/Redux, Express, Node.JS, PostgresSQL, Sequelize, Materialize CSS, and React-Bootstrap.</p>

            </div>


            <div className='ui grey inverted segment'>
              <h3 className='regText'>Demon Dash</h3>
              <p>- An online multiplayer Donkey-Kong meets Super Smash Bros arcade game using Phaser and Socket IO.</p>

            </div>


            <div className='tag'>
              <br />
              <p>&lt; /ul &gt;</p>
              <br />
            </div>

            <div className='tag'>
              <br />
              <p>&lt; div &gt;</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}