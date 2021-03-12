import React, { useState } from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'

export default function Project({ imageUrl, deployedLink, gitHubLink, projectName, description, tech }) {

  return (


    <div class='ui inverted segment' style={{ marginTop: '50px' }}>
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical></Divider>

        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <div class='ui fluid image'>
              <img src={imageUrl} />
            </div>
          </Grid.Column>
          <Grid.Column>
            <h1 style={{ color: 'orange' }} class='ui header'>{projectName}</h1>

            <p>{description}</p>
            {gitHubLink ? (
              <div>
                <a
                  class='ui button'
                  href={gitHubLink}
                  target="_blank"
                >
                  Source Code
            </a>
                <br />
              </div>
            )

              : (<div> </div>)}
            {deployedLink ? (
              <div>
                <br />
                <a
                  class='ui orange button'
                  href={deployedLink}
                  target="_blank"
                >
                  Live Site
            </a>
                <br />
              </div>
            ) : (<div> </div>)}
            <br />
            <p style={{ color: 'orange' }}>Technologies Used</p>
            <p>{tech}</p>
          </Grid.Column>




        </Grid.Row>
      </Grid>

    </div>
  )
}