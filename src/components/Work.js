import React from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import './Styles.css'
import Roll from 'react-reveal/Roll';

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
              <br />
            </div>

            <div className='typeText'>
              <br />
              <MovingComponent type="typewriter"
                dataText={[
                  'My Work'
                ]} />
              <br />
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

            <Roll right cascade>
              <div>
                <div className='ui grey inverted segment'>
                  <h3 className='regText'>Sleep Visualizer</h3>
                  <p>- A web application that graphs your sleep data and daily habits to find correlations between the two to give a deeper insight into improving your sleep. Compatible with data from the OuraRing or most similar sleep tracking devices. Built using Chart.JS, React/Redux, Express, Node.JS, PostgresSQL, Sequelize, OuraRing API .</p>
                  <div className='linkText'>
                    <div className="ui large buttons">
                      <div className="ui button">
                        <a href='https://github.com/Oura-ring-tag-visualizer/sleepVisualizer'>Github Link   <i class="large github middle aligned icon"></i></a>
                      </div>
                      <div className="or"></div>
                      <div className="ui button">
                        <a href='https://sleepvisualizer.herokuapp.com/'>Deployed Link   <i class="large desktop middle aligned icon"></i></a>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='ui grey inverted segment'>
                  <h3 className='regText'>Sneaker Shopper</h3>
                  <p>- A fully functional dummy E-Commerce store using the StockX API and local storage to track user shopping cart data. Built using React/Redux, Express, Node.JS, PostgresSQL, Sequelize, Materialize CSS, and React-Bootstrap.</p>
                  <div className='linkText'>
                    <div className="ui large buttons">
                      <div className="ui button">
                        <a href='https://github.com/Team-gs-Naruto/Grace-Shopper'>Github Link <i class="large github middle aligned icon"></i></a>
                      </div>
                      <div className="or"></div>
                      <div className="ui button">
                        <a href='https://sneakershopper.herokuapp.com'>Deployed Link  <i class="large desktop middle aligned icon"></i> </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='ui grey inverted segment'>
                  <h3 className='regText'>Demon Dash</h3>
                  <p>- An online multiplayer Donkey-Kong meets Super Smash Bros arcade game using Phaser and Socket IO.</p>
                  <div className='linkText'>
                    <div className="ui large buttons">
                      <div className="ui button">
                        <a href='https://github.com/2004-fsa-team-jiraiya/Gammiee'>Github Link  <i class="large github middle aligned icon"></i></a>
                      </div>
                      <div className="or"></div>
                      <div className="ui button">
                        <a href='https://demon-dash.herokuapp.com'>Deployed Link  <i class="large desktop middle aligned icon"></i> </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='ui grey inverted segment'>
                  <h3 className='regText'>Shopify Code Challenge</h3>
                  <p>- A webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished. This project was created for the Shopify apprenticeship program.</p>
                  <div className='linkText'>
                    <div className="ui large buttons">
                      <div className="ui button">
                        <a href='https://github.com/SohamDutta1216/theShoppies'>Github Link  <i class="large github middle aligned icon"></i></a>
                      </div>
                      <div className="or"></div>
                      <div className="ui button">
                        <a href='https://theshoppies-2021.netlify.app/'>Deployed Link  <i class="large desktop middle aligned icon"></i> </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='ui grey inverted segment'>
                  <h3 className='regText'>Tandem Code Challenge</h3>
                  <p>- An application that displays trivia questions with multiple-choice answers to select from. This project was created for the Tandem apprenticeship program</p>
                  <div className='linkText'>
                    <div className="ui large buttons">
                      <div className="ui button">
                        <a href='https://github.com/SohamDutta1216/tandemApprentice'>Github Link  <i class="large github middle aligned icon"></i></a>
                      </div>
                      <div className="or"></div>
                      <div className="ui button">
                        <a href='https://theshoppies-2021.netlify.app/'>Deployed Link  <i class="large desktop middle aligned icon"></i> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Roll>

            <div className='tag'>
              <br />
              <p>&lt; /ul &gt;</p>
              <br />
            </div>

            <div className='tag'>
              <br />
              <p>&lt; div &gt;</p>
              <br />
              <br />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}