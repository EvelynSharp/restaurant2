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

const InfoSec = glamorous.div({
  width: '100%',
  '@media(min-width: 600px)': {
    width: '40%',
  }
})

const FormSec = glamorous.div({
  width: '60%',
  '@media(max-width: 600px)': {
    width: '100vw',
  }
})


const Reservation = () => {
  return (
  <div>
    <PageLayerBack >
      <BGImage/>
    </PageLayerBack>

    <PageLayerBase>
      <div style={{ background: 'white'}}>
        <Grid style={{ minHeight: '500px'}}>
          <InfoSec style={{ border: '1px solid black', padding: '0'}}>
            <Info />
          </InfoSec>
          <FormSec style={{ border: '1px solid black', padding: '0'}}>
            <ContactForm />
          </FormSec>
          <p style={{ paddingBottom: '25vh'}} />
        </Grid>
      </div>
    </PageLayerBase>
  </div>
  )
}

export default Reservation;
