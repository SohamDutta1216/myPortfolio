import React from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import './Styles.css'
import Project from './Project'

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

              <Project
                projectName='CryptoCreeper'
                imageUrl='/crypto.png'
                gitHubLink='https://github.com/SohamDutta1216/cryptoCreeper'
                description='Full stack web application that uses the coingecko API to retrieve all available coins and lets users track their investments and portfolio'
              />

              <Project
                projectName='Moments Social Platform'
                imageUrl='/moment.png'
                gitHubLink='https://github.com/SohamDutta1216/MomentsSocialPlatform'
                description='Full stack social media platform'
              />

              <Project
                projectName='Free Lance Project - LexMediaProjects'
                imageUrl='/lex.png'
                deployedLink='https://lexmediaprojects.com/'
                description='Website comissioned for a small business'
              />

              <Project
                projectName='This Site'
                imageUrl='/portfolio.png'
                gitHubLink='https://github.com/SohamDutta1216/myPortfolio' deployedLink='https://sohamdutta.com'
                description='My Personal Website'
              />

              <Project
                projectName='Shopify Code Challenge'
                imageUrl='/shop.png'
                gitHubLink='https://github.com/SohamDutta1216/theShoppies' deployedLink='https://theshoppies-2021.netlify.app/'
                description='Shopify Front-End React Code challenge to build a movie search and nomination application using the OMDB API'
              />

              <Project
                projectName='Tandem Code Challenge'
                imageUrl='/tandem.png'
                gitHubLink='https://github.com/SohamDutta1216/tandemApprentice' deployedLink='https://tandem-apprentice.netlify.app/'
                description='Tandem Front-End React Code challenge that displays trivia questions with multiple-choice answers to select from'
              />

              <Project
                projectName='Demon Dash'
                imageUrl='/demon.png'
                gitHubLink='https://github.com/2004-fsa-team-jiraiya/Gammiee' deployedLink='https://demon-dash.herokuapp.com/'
                description='Online multiplayer game built with a team of 4, using Agile Methodologies'
              />

              <Project
                projectName='Sleep Visualizer'
                imageUrl='/sleep.png'
                gitHubLink='https://github.com/Oura-ring-tag-visualizer/sleepVisualizer'
                description='Web Application built in a pair that allows user to compare REM sleep with daily habits to find correlations and chart them'
              />

              <Project
                projectName='Sneaker Shopper'
                imageUrl='/sneaker.png'
                gitHubLink='https://github.com/Team-gs-Naruto/Grace-Shopper'
                description='Full stack E-Commerce sneaker store built with a team of 4, using Agile Methodologies'
              />

              <Project
                projectName='Guessing Game'
                imageUrl='/guess.png'
                gitHubLink='https://github.com/SohamDutta1216/guessing-game-final' deployedLink='https://sohamdutta1216.github.io/guessing-game-final//'
                description='My first application ever built, a simple guessing game'
              />

            </div>

            <br />   <br />
            <div className='tag'>
              <p>&lt; First Project  &gt;</p>
              <br />
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