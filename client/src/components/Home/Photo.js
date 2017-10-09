import React from 'react';
import { Grid } from 'semantic-ui-react';
import glamorous from 'glamorous';

const Image = glamorous.img({
  width: '20vw',
  height: '13vw',
})

const Photo = ({ photo }) => (
  <Grid.Column>
    <Image src={photo.img}/>
  </Grid.Column>
)

export default Photo;
