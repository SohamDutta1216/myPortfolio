import React from 'react'
import Fade from 'react-reveal/Fade';
import MovingComponent from 'react-moving-text'

export default function LandingPage() {
  return (
    <div className="ui container">
      <Fade left>
        <div>
          <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
            <p>&lt; div &gt;</p>
            <br />
          </div>

          <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
            <p>&lt; img src=/images/me.jpeg &gt;</p>
            <br />
          </div>
          <MovingComponent
            type="spin"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <div className="ui small circular rotate left reveal image">
              <img alt='hidden' src="/avatar.png" className="visible content"></img>
              <img alt='visibe' src="/me.png" className="hidden content" ></img>
            </div>
          </MovingComponent>





          <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
            <br />
            <p>&lt; /img &gt;</p>
            <br />
          </div>


          <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
            <p>&lt; h1 &gt;</p>
            <br />
          </div>

          <div style={{ fontSize: '45px', color: 'orange', fontStyle: 'monospace' }}>
            <MovingComponent type="typewriter"
              dataText={[
                'Hello World',
                'My name is Soham Dutta'
              ]} />
            <br />
          </div>

          <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
            <br />
            <p>&lt; /h1 &gt;</p>
            <br />
          </div>

          <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
            <p>&lt; h2 &gt;</p>
            <br />
          </div>
          <div style={{ fontSize: '35px', color: 'white', fontStyle: 'monospace' }}>
            <p>full stack software developer with a passion for front end development.</p>
          </div>

          <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
            <br />
            <p>&lt; /h2 &gt;</p>
            <br />
          </div>

          <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>


            <p>&lt; div &gt;</p>
          </div>
        </div>
      </Fade>
    </div>

  )
}