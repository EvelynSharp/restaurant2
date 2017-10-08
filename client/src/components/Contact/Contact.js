import React from 'react';
import glamorous from 'glamorous';
import contactImg from '../../images/contactImg.jpeg';
import { PageLayerBase,
         PageLayerBack,
         PageHeaderImg,
        } from '../../styles/style-index';
import Footer from '../Footer/Footer';
import ContactContent from './ContactContent';

const BGImage = glamorous.div(PageHeaderImg, {
  background:`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${contactImg})`,
  backgroundSize: 'cover',
})

const Reservation = () => {
  return (
  <div>
    <PageLayerBack >
      <BGImage/>
    </PageLayerBack>

    <PageLayerBase>
      <ContactContent />
      <Footer />
    </PageLayerBase>
  </div>
  )
}

export default Reservation;
