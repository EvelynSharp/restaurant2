import React from 'react';
import { PageLayerBase } from '../../styles/style-index';
import { Grid } from 'semantic-ui-react'
import Entree from './Entree'

const Menu = () => (
  <PageLayerBase style={{ paddingTop: '270px'}}>
    <Grid style={{ margin: '0 12%' }}>
      <Grid.Row>
        <Grid.Column width={10} style={{padding: '0', border: '1px solid black'}}>
          <Entree />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={5} style={{padding: '0', border: '1px solid black'}}>

        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  </PageLayerBase>
)

export default Menu;
