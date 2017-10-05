import React, { Component } from 'react';
import { ParallaxLayer, ParallaxGroup, } from '../../styles/style-index';
import homeImg from '../../images/homeImg.jpeg';
import reservationImg from '../../images/reservationImg.jpeg';
import glamorous from 'glamorous';
import Intro from '../Restaurant/Intro';
import ResInfo from '../Reservation/ResInfo';

const LayerBase = glamorous.div(ParallaxLayer, {
  transform: 'translateZ(0) scale(1)',
})

const LayerBack = glamorous.div(ParallaxLayer, {
  transform: 'translateZ(-0.5px) scale(1.5)',
})

const BGImage = glamorous.div({
  backgroundSize: 'cover',
  background:`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${homeImg})`,
})

class Home extends Component {

  render() {

    return(
        <div>
          <ParallaxGroup style={{ zIndex: '10'}}>
            <LayerBack > <BGImage style={{ height: '100vh'}}/> </LayerBack>
            <LayerBase style={{padding: '100vh 0'}}>
                <Intro home={true}/>
            </LayerBase>
          </ParallaxGroup>

          <ParallaxGroup style={{ height: '100vh', marginTop: '200vh'}}>
            <LayerBack >
              <BGImage style={{height: '750px', background: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${reservationImg})`}}>
              </BGImage>
            </LayerBack>

            <LayerBase>
              <ResInfo home={true} />
            </LayerBase>
          </ParallaxGroup>
        </div>

    );
  }
}

export default Home;
