import React from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'
import Rotate from 'react-reveal/Rotate';

export default function About() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
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
                  'About me'
                ]} />
              <br />
            </div>

            <div className='tags'>
              <br />
              <p>&lt; /h1 &gt;</p>
              <br />
            </div>

            <div className='tags'>
              <p>&lt; p &gt;</p>
              <br />
            </div>
            <Rotate bottom left cascade>
              <div className='regText'>
                <p> I am a New York City based software developer and recent FullStack Academy bootcamp grad. After spending 3 years in college trying to follow in the footsteps of many of my family members on a pre-pharmacy/biology track; I ended up leaving after my first internship as I immediately knew that this was not the right path for me. I spent months after this decision working and searching for a career that truly excited me. I eventually came to realize that software development would be the route for me after remembering how excited I would be to write and run code on my middle school robotics team. After my first 'intro to Javascript' course; I knew I would never have to look back again.   </p>
                <p>I am extremely curious, a quick learner, organized, and self driven. I am also the father of a Alexandrine parrot named Chutney, and a hairless Chihuahua named Nori. I have a passion for powerlifting and carry over alot of that structure and discipline to all aspects of my life including development. </p>
              </div>
            </Rotate>

            <div className='tags'>
              <br />
              <p>&lt; /p &gt;</p>
              <br />
            </div>

            <div className='tags'>
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