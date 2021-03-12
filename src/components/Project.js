import React, { useState } from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'

export default function Project({ imageUrl, deployedLink, gitHubLink, projectName, description }) {

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
            {gitHubLink ? (<a
              class='ui button'
              href={gitHubLink}
              target="_blank"
            >
              Source Code
            </a>) : (<div> </div>)}
            {deployedLink ? (<a
              class='ui orange button'
              href={deployedLink}
              target="_blank"
            >
              Live Site
            </a>) : (<div> </div>)}
          </Grid.Column>




        </Grid.Row>
      </Grid>

    </div>
  )
}