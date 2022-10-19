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
              <p>&lt; h1 a &gt;</p>
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
                <p>I am a full stack software developer with a passion for front end design. After spending 3 years in college as a pre-pharmacy student; I realized that it was not the path for me upon interning for a pharmacy. I strive for a challenge and need great mental stimulation to keep myself motivated; Which is why I fell in love with software development. As a professional, I have experience with e-commerce as I have successfully launched multiple Shopify drop shipping stores as a teenager and managed and marketed them using my knowledge of social trends and social media marketing. I also worked as an HR manager for Joe and the Juice where I was responsible for leading, training, and hiring a recruitment team in preparation for an expansion of more than 50 new locations all over the United States as well as curated company events to help progress company culture and brand image. I eventually joined FullStack Academy where I learnt the ins and outs of development and have never looked back since.</p>
                <p>As a developer I am persistent, obsessed, and have the enthusiasm of a 10 year old at Disney World. I live for the grind and have a brain that won't rest until my goal or vision has come to fruition. I love and invite any and all challenges and I live for failure. Through thousands of micro failures I have become the programmer I am today, and I hope I continue to fail and continue to learn valuable lessons from all of these failures. </p>
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