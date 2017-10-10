import React from 'react';
import { PageHeader,
         Content,
         TextContainer,
        } from '../../styles/style-index';
import Photo from './Photo';
import galleryphotos from './galleryphotos';
import { Grid } from 'semantic-ui-react';


const Gallery = () => (
  <div>
    <PageHeader style={{ paddingTop: '3em'}}>GALLERY</PageHeader>
    <Grid style={{
      margin: '8% 10% 100px 10%'
    }}>
      <Grid.Row columns={3}>
        { galleryphotos.slice(0,3).map( photo => <Photo key={photo.key} photo={photo}/>)}
      </Grid.Row>
      <Grid.Row columns={3}>
        { galleryphotos.slice(3,6).map( photo => <Photo key={photo.key} photo={photo}/>)}
      </Grid.Row>
      <Grid.Row columns={3}>
        { galleryphotos.slice(6,9).map( photo => <Photo key={photo.key} photo={photo}/>)}
      </Grid.Row>
    </Grid>
  </div>
)

export default Gallery;
