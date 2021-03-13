import React from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import './Styles.css'
import Project from './Project'
import { Grid, Image, Divider } from 'semantic-ui-react'

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

            <div className='tag'>
              <p>&lt; Most Recent Project &gt;</p>
              <br />
            </div>

            <div class='ui fluid container'>

              <Fade left>
                <Project
                  projectName='CryptoCreeper'
                  imageUrl='/crypto.png'
                  gitHubLink='https://github.com/SohamDutta1216/cryptoCreeper'
                  description='Full stack web application that uses the coingecko API to retrieve all available coins and lets users track their investments and portfolio'
                  tech='Javascript , React , Redux , Express , Node , Mongoose , MongoDB , Bcrypt , JSONwebtoken , Semantic UI , Google OAUTH , CoinGecko API '
                />
              </Fade>

              <Fade right>
                <Project
                  projectName='Moments Social Platform'
                  imageUrl='/moment.png'
                  gitHubLink='https://github.com/SohamDutta1216/MomentsSocialPlatform'
                  description='Full stack social media platform'
                  tech='Javascript , React , Redux , Express , Node , Mongoose , MongoDB , Bcrypt , JSONwebtoken , Bootstrap , Google OAUTH' />
              </Fade>

              <Fade left>
                <Project
                  projectName='Free Lance Project - LexMediaProjects'
                  imageUrl='/lex.png'
                  deployedLink='https://lexmediaprojects.com/'
                  description='Website comissioned for a small business'
                  tech='Wordpress , PHP , CSS'
                />
              </Fade>

              <Fade right>
                <Project
                  projectName='This Site'
                  imageUrl='/portfolio.png'
                  gitHubLink='https://github.com/SohamDutta1216/myPortfolio' deployedLink='https://sohamdutta.com'
                  description='My Personal Website'
                  tech='Javascript , React , EmailJS , Semantic UI , Google Maps API '
                />
              </Fade>

              <Fade left>
                <Project
                  projectName='Shopify Code Challenge'
                  imageUrl='/shop.png'
                  gitHubLink='https://github.com/SohamDutta1216/theShoppies' deployedLink='https://theshoppies-2021.netlify.app/'
                  description='Shopify Front-End React Code challenge to build a movie search and nomination application using the OMDB API'
                  tech='Javascript, React, Semantic UI , OMDB API'
                />
              </Fade>

              <Fade right>
                <Project
                  projectName='Tandem Code Challenge'
                  imageUrl='/tandem.png'
                  gitHubLink='https://github.com/SohamDutta1216/tandemApprentice' deployedLink='https://tandem-apprentice.netlify.app/'
                  description='Tandem Front-End React Code challenge that displays trivia questions with multiple-choice answers to select from'
                  tech='Javascript, React, Semantic UI , Enzyme/Jest'
                />
              </Fade>

              <Fade left>
                <Project
                  projectName='Demon Dash'
                  imageUrl='/demon.png'
                  gitHubLink='https://github.com/2004-fsa-team-jiraiya/Gammiee' deployedLink='https://demon-dash.herokuapp.com/'
                  description='Online multiplayer game built with a team of 4, using Agile Methodologies'
                  tech='Javascript, Phaser3, SocketIO'
                />
              </Fade>

              <Fade right>
                <Project
                  projectName='Sleep Visualizer'
                  imageUrl='/sleep.png'
                  gitHubLink='https://github.com/Oura-ring-tag-visualizer/sleepVisualizer'
                  description='Web Application built in a pair that allows user to compare REM sleep with daily habits to find correlations and chart them'
                  tech='Javascript , React , Chart.JS , Express , Sequelize , Node ,
                PostgreSQL'
                />
              </Fade>

              <Fade left>
                <Project
                  projectName='Sneaker Shopper'
                  imageUrl='/sneaker.png'
                  gitHubLink='https://github.com/Team-gs-Naruto/Grace-Shopper'
                  description='Full stack E-Commerce sneaker store built with a team of 4, using Agile Methodologies'
                  tech='React , Redux , Node , Express , Sequelize , Postgres , Mocha/Chai , Semantic UI , Bootstrap'
                />
              </Fade>

              <Fade right>
                <Project
                  projectName='Guessing Game'
                  imageUrl='/guess.png'
                  gitHubLink='https://github.com/SohamDutta1216/guessing-game-final' deployedLink='https://sohamdutta1216.github.io/guessing-game-final//'
                  description='My first application ever built, a simple guessing game'
                  tech='Javascript , HTML , CSS , JQuery'
                />
              </Fade>

            </div>

            <br />   <br />
            <div className='tag'>
              <p>&lt; First Project  &gt;</p>
              <br />
            </div>

            <div className='tag'>
              <p>&lt; Publications &gt;</p>
              <br />
            </div>


            <div class='ui inverted segment' style={{ marginTop: '50px' }}>
              <Grid columns={2} stackable textAlign='center'>
                <Divider vertical></Divider>
                <Grid.Row verticalAlign='middle'>
                  <Grid.Column>
                    <div class='ui fluid image'>
                      <img src='/adhd.png' />
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <h1 style={{ color: 'orange' }} class='ui header'>ADHD and Code</h1>
                    <p>Personal experience with overcoming ADHD while learning to code, giving insight on bio-hacking techniques to optimize learning</p>

                    <a class='ui orange button' href='https://medium.com/dev-genius/adhd-and-code-17c5e1d0ca1b' target='_blank'>Read</a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>


            <div class='ui inverted segment' style={{ marginTop: '50px' }}>
              <Grid columns={2} stackable textAlign='center'>
                <Divider vertical></Divider>
                <Grid.Row verticalAlign='middle'>
                  <Grid.Column>
                    <div class='ui fluid image'>
                      <img src='/linked.png' />
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <h1 style={{ color: 'orange' }} class='ui header'>Linked Lists for Noobs</h1>
                    <p>A low level explanation of linked-lists using creative and beginner friendly teaching methods</p>
                    <a href='medium.com/dev-genius/linked-lists-for-absolute-dummies-2fa 10f752c' target='_blank'
                      class='ui orange button'>Read</a>

                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>



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