import React from 'react'

export default function About() {
  return (
    <div className="ui container">
      <div>
        <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
          <p>&lt; div &gt;</p>
          <br />
          <p>&lt; h1 &gt;</p>
        </div>

        <div style={{ fontSize: '25px', fontStyle: 'bold', color: 'orange' }}>
          <h1> About Me</h1>
        </div>

        <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
          <p>&lt; /h1 &gt;</p>
          <br />
        </div>

        <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
          <p>&lt; p &gt;</p>
        </div>

        <div style={{ fontSize: '25px', fontStyle: 'bold', color: 'white' }}>
          <p>A new and eager software developer</p>
        </div>


        <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
          <p>&lt; /p &gt;</p>
          <br />
        </div>

        <div style={{ fontFamily: 'monospace', fontStyle: 'italic', color: 'grey' }}>
          <br />
          <p>&lt; div &gt;</p>
        </div>
      </div>
    </div>

  )
}