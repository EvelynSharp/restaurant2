import React from 'react';
import reservationImg from '../../images/reservationImg.jpeg';
import glamorous from 'glamorous';
import Footer from '../Footer/Footer'
import { Grid } from 'semantic-ui-react';
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

const Restaurant = () => (
  <div>
    <PageLayerBack >
      <BGImage style={{backgroundImage: `url(${reservationImg})`}}/>
    </PageLayerBack>
    <PageLayerBase>

    </PageLayerBase>

  </div>
)

export default Restaurant;
