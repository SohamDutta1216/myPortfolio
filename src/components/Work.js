import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import './Styles.css'
import Roll from 'react-reveal/Roll';

const ImageButtonState = () => {
  const [sleepVisClick, setSleepVisClick] = useState(false)
  const [sneakerShopperClick, setSneakerShopperClick] = useState(false)
  const [demonDashClick, setDemonDashClick] = useState(false)
  const [shopifyClick, setShopifyClick] = useState(false)
  const [tandemClick, setTandemClick] = useState(false)

  return { sleepVisClick, setSleepVisClick, sneakerShopperClick, setSneakerShopperClick, demonDashClick, setDemonDashClick, shopifyClick, setShopifyClick, tandemClick, setTandemClick }
}

export default function Work() {
  const { sleepVisClick, setSleepVisClick, sneakerShopperClick, setSneakerShopperClick, demonDashClick, setDemonDashClick, shopifyClick, setShopifyClick, tandemClick, setTandemClick } = ImageButtonState()

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
                  <button
                    onClick={() => { setSleepVisClick(!sleepVisClick) }}
                    className="circular ui right floated left aligned icon button">
                    <i className="icon image"></i>
                  </button>
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
                  <div>
                  </div>
                  <br />
                  {sleepVisClick ?
                    <Fade right cascade>
                      <div className='ui vertical aligned list'>
                        <div>
                          <div className='ui large images'>
                            <div className='item'>
                              <img src='/sleepVis1.png' alt='sleepVis1' />
                            </div>
                            <div className='item'>
                              <img src='/sleepVis2.png' alt='sleepVis2' />
                            </div>
                            <div className='item'>
                              <img src='/sleepVis3.png' alt='sleepVis3' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    : <div></div>
                  }
                </div>


                <div className='ui grey inverted segment'>
                  <h3 className='regText'>Sneaker Shopper</h3>
                  <button
                    onClick={() => { setSneakerShopperClick(!sneakerShopperClick) }}
                    className="circular ui right floated left aligned icon button">
                    <i className="icon image"></i>
                  </button>
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
                  <br />
                  {sneakerShopperClick ?
                    <Fade right cascade>
                      <div className='ui vertical aligned list'>
                        <div>
                          <div className='ui large images'>
                            <div className='item'>
                              <img src='/sneakerShopper1.png' alt='sneakerShopper1' />
                            </div>
                            <div className='item'>
                              <img src='/sneakerShopper2.png' alt='sneakerShopper2' />
                            </div>
                            <div className='item'>
                              <img src='/sneakerShopper3.png' alt='sneakerShopper3' />
                            </div>
                            <div className='item'>
                              <img src='/sneakerShopper4.png' alt='sneakerShopper4' />
                            </div>
                            <div className='item'>
                              <img src='/sneakerShopper5.png' alt='sneakerShopper5' />
                            </div>
                            <div className='item'>
                              <img src='/sneakerShopper6.png' alt='sneakerShopper6' />
                            </div>
                            <div className='item'>
                              <img src='/sneakerShopper7.png' alt='sneakerShopper7' />
                            </div>
                            <div className='item'>
                              <img src='/sneakerShopper8.png' alt='sneakerShopper8' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    : <div></div>
                  }
                </div>

                <div className='ui grey inverted segment'>
                  <h3 className='regText'>Demon Dash</h3>
                  <button
                    onClick={() => { setDemonDashClick(!demonDashClick) }}
                    className="circular ui right floated left aligned icon button">
                    <i className="icon image"></i>
                  </button>
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
                  {demonDashClick ?
                    <Fade right cascade>
                      <div className='ui vertical aligned list'>
                        <div>
                          <div className='ui large images'>
                            <div className='item'>
                              <img src='/demonDash1.png' alt='DemonDash1' />
                            </div>
                            <div className='item'>
                              <img src='/demonDash2.png' alt='DemonDash2' />
                            </div>
                            <div className='item'>
                              <img src='/demonDash3.png' alt='DemonDash3' />
                            </div>
                            <div className='item'>
                              <img src='/demonDash4.png' alt='DemonDash4' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    : <div></div>
                  }
                </div>

                <div className='ui grey inverted segment'>
                  <h3 className='regText'>Shopify Code Challenge</h3>
                  <button
                    onClick={() => { setShopifyClick(!shopifyClick) }}
                    className="circular ui right floated left aligned icon button">
                    <i className="icon image"></i>
                  </button>
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
                  {shopifyClick ?
                    <Fade right cascade>
                      <div className='ui vertical aligned list'>
                        <div>
                          <div className='ui large images'>
                            <div className='item'>
                              <img src='/shopify1.png' alt='shopify1' />
                            </div>
                            <div className='item'>
                              <img src='/shopify2.png' alt='shopify2' />
                            </div>
                            <div className='item'>
                              <img src='/shopify3.png' alt='shopify3' />
                            </div>
                            <div className='item'>
                              <img src='/shopify4.png' alt='shopify4' />
                            </div>
                            <div className='item'>
                              <img src='/shopify5.png' alt='shopify5' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    : <div></div>
                  }
                </div>

                <div className='ui grey inverted segment'>
                  <h3 className='regText'>Tandem Code Challenge</h3>
                  <button
                    onClick={() => { setTandemClick(!tandemClick) }}
                    className="circular ui right floated left aligned icon button">
                    <i className="icon image"></i>
                  </button>
                  <p>- An application that displays trivia questions with multiple-choice answers to select from. This project was created for the Tandem apprenticeship program</p>
                  <div className='linkText'>
                    <div className="ui large buttons">
                      <div className="ui button">
                        <a href='https://github.com/SohamDutta1216/tandemApprentice'>Github Link  <i class="large github middle aligned icon"></i></a>
                      </div>
                      <div className="or"></div>
                      <div className="ui button">
                        <a href='https://tandem-apprentice.netlify.app/'>Deployed Link  <i class="large desktop middle aligned icon"></i> </a>
                      </div>
                    </div>
                  </div>
                  {tandemClick ?
                    <Fade right cascade>
                      <div className='ui vertical aligned list'>
                        <div>
                          <div className='ui large images'>
                            <div className='item'>
                              <img src='/tandem1.png' alt='tandem1' />
                            </div>
                            <div className='item'>
                              <img src='/tandem2.png' alt='tandem2' />
                            </div>
                            <div className='item'>
                              <img src='/tandem3.png' alt='tandem3' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    : <div></div>
                  }
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