import React from 'react';
import { Grid } from 'semantic-ui-react';
import glamorous from 'glamorous';
import Info from './Info';
import ContactForm from './ContactForm';

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

const ContactContent = ({home}) => (
  <div style={ home ? null : { background: 'white'}}>
    <Grid style={{ minHeight: '500px'}}>
      <InfoSec style={{ padding: '0'}}>
        <Info/>
      </InfoSec>
      <FormSec style={{ padding: '0'}}>
        <ContactForm/>
      </FormSec>
      <p style={{ paddingBottom: '25vh'}} />
    </Grid>
  </div>
)

export default ContactContent;
