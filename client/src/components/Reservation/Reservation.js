import React from 'react';
import home2 from '../../images/home2.jpeg';
import glamorous from 'glamorous';
import { ParallaxLayer, ParallaxGroup } from '../../styles/style-index';

const LayerBase = glamorous.div(ParallaxLayer, {
 transform: 'translateZ(0) scale(1)',
 padding: '100vh 0',
})

const LayerBack = glamorous.div(ParallaxLayer, {
 transform: 'translateZ(0) scale(1)',
})

const BGImage = glamorous.div({
  height: '80vh',
  backgroundPosition: 'center',
})

const Reservation = ({}) => (
  <div>
    <LayerBack >
      <BGImage style={{backgroundImage: `url(${home2})`}}>
        This is the background
      </BGImage>
    </LayerBack>

    <LayerBase>
      <div style={{height:'50vh', background: 'white'}}>
        <div >
          This is the foreground
        </div>
      </div>
    </LayerBase>
  </div>
)

export default Reservation;
