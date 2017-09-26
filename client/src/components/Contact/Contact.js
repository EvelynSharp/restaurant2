import React from 'react';
import contactImg from '../../images/contactImg.jpeg';
import { Grid } from 'semantic-ui-react';
import glamorous from 'glamorous';
import { PageLayerBase,
         PageLayerBack,
         PageHeaderImg,
        } from '../../styles/style-index';
import Info from './Info';
import ContactForm from './ContactForm';

const BGImage = glamorous.div(PageHeaderImg, {
  background:`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${contactImg})`,
  backgroundSize: 'cover',
})

const Reservation = () => (
  <div>
    <PageLayerBack >
      <BGImage/>
    </PageLayerBack>

    <PageLayerBase>
      <div style={{ background: 'white'}}>
        <Grid style={{ minHeight: '500px'}}>
          <Grid.Column width={6} style={{ minWidth: '200px', border: '1px solid black', padding: '0'}}>
            <Info />
          </Grid.Column>
          <Grid.Column width={10} style={{ minWidth: '350px',  border: '1px solid black', padding: '0'}}>
            <ContactForm />
          </Grid.Column>
          <p style={{ paddingBottom: '25vh'}} />
        </Grid>
      </div>
    </PageLayerBase>
  </div>
)

export default Reservation;
