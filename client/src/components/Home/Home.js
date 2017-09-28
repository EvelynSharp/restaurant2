import React, { Component } from 'react';
import { ParallaxLayer, ParallaxGroup, } from '../../styles/style-index';
import homeImg from '../../images/homeImg.jpeg';
import reservationImg from '../../images/reservationImg.jpeg';
import glamorous from 'glamorous';

const LayerBase = glamorous.div(ParallaxLayer, {
  transform: 'translateZ(0) scale(1)',
  padding: '100vh 0',
})

const LayerBack = glamorous.div(ParallaxLayer, {
  transform: 'translateZ(-0.5px) scale(1.5)',
})

const BGImage = glamorous.div({
  height: '100vh',
  backgroundSize: 'cover',
  background:`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${homeImg})`,
})

class Home extends Component {

  render() {

    return(
        <div>
          <ParallaxGroup style={{ zIndex: '10'}}>
            <LayerBack > <BGImage /> </LayerBack>
            <LayerBase>
              <div style={{height:'50vh', background: 'white'}}>
                <div >
                  This is the foreground
                </div>
              </div>
            </LayerBase>
          </ParallaxGroup>

          <ParallaxGroup style={{ border: '1px solid black', height: '100vh', marginTop: '30vh'}}>
            <LayerBack >
              <BGImage style={{backgroundImage: `url(${reservationImg})`}}>
                This is the background
              </BGImage>
            </LayerBack>

            <LayerBase style={{ paddingTop: '80vh'}}>
              <div style={{height:'50vh', width: '100vw', background: 'white'}}>
                <div style={{ border: '1px solid yellow'}}>
                  This is the foreground
                </div>
              </div>
            </LayerBase>
          </ParallaxGroup>
        </div>

    );
  }
}

export default Home;
