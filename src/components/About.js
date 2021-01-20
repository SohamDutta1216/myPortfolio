import React from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'

export default function About() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="ui container">
        <Fade left>
          <div>
            <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
              <p>&lt; div &gt;</p>
              <br />
              <p>&lt; h1 &gt;</p>
            </div>

            <div style={{ fontSize: '45px', fontStyle: 'bold', color: 'orange' }}>
              <br />
              <MovingComponent type="typewriter"
                dataText={[
                  'Get to know me'
                ]} />
            </div>

            <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
              <br />
              <p>&lt; /h1 &gt;</p>
              <br />
            </div>

            <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
              <p>&lt; p &gt;</p>
              <br />
            </div>

            <div style={{ fontSize: '20px', fontStyle: 'bold', color: 'white' }}>
              <p> I am a New York City based software developer and recent FullStack Academy bootcamp grad. After spending 3 years in college trying to follow in the footsteps of many of my family members on a pre-pharmacy/biology track; I ended up leaving after my first internship as I immediately knew that this was not the right path for me. I spent months after this decision working and searching for a career that truly excited me. I eventually came to realize that software development would be the route for me after remembering how excited I would be to write and run code on my middle school robotics team. After my first 'intro to Javascript' course; I knew I would never have to look back again.   </p>
              <p>I am extremely curious, a quick learner, organized, and self driven. I am also the father of a Alexandrine parrot named Chutney, and a hairless Chihuahua named Nori. I have a passion for powerlifting and carry over alot of that structure and discipline to all aspects of my life including development. </p>
              <p>Interested in front end work and currently looking for employment or apprenticeship</p>
            </div>


            <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
              <br />
              <p>&lt; /p &gt;</p>
              <br />
            </div>

            <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
              <br />
              <p>&lt; div &gt;</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}