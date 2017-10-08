import React from 'react';
import reservationImg from '../../images/reservationImg.jpeg';
import glamorous from 'glamorous';
import Footer from '../Footer/Footer';
import ResInfo from './ResInfo';
import { PageHeader,
         Content,
         TextContainer,
         PageLayerBase,
         PageLayerBack,
         PageHeaderImg,
         ResHeader,
        } from '../../styles/style-index';


const BGImage = glamorous.div(PageHeaderImg, {
  backgroundSize: 'cover',
})



const Reservation = () => (
  <div>
    <PageLayerBack >
      <BGImage style={{backgroundImage: `url(${reservationImg})`}}/>
    </PageLayerBack>

    <PageLayerBase>
      <ResInfo />
      <Footer/>
    </PageLayerBase>

  </div>
)

export default Reservation;
