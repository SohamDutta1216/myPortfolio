import React from 'react'

export default function LandingPage() {
  return (
    <div className="ui container">
      <div>
        <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
          <p>&lt; div &gt;</p>
          <p>&lt; h1 &gt;</p>
          <br />
        </div>

        <div style={{ fontSize: '35px', fontStyle: 'bold', color: 'white' }}>
          <h1> Hey there!</h1>
          <h1> My name is Soham,</h1>
          <h1>Software Developer</h1>
        </div>

        <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
          <br />
          <p>&lt; /h1 &gt;</p>
          <p>&lt; div &gt;</p>
        </div>
      </div>
    </div>

  )
}