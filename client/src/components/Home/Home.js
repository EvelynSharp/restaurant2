import React, { Component } from 'react';
import { ParallaxLayer, ParallaxGroup, } from '../../styles/style-index';
import homeImg from '../../images/homeImg.jpeg';
import reservationImg from '../../images/reservationImg.jpeg';
import glamorous from 'glamorous';
import Intro from '../Restaurant/Intro';

const LayerBase = glamorous.div(ParallaxLayer, {
  transform: 'translateZ(0) scale(1)',
  padding: '100vh 0',
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
            <LayerBase>
                <Intro home={true}/>
            </LayerBase>
          </ParallaxGroup>

          <ParallaxGroup style={{ height: '100vh', marginTop: '200vh'}}>
            <LayerBack >
              <BGImage style={{height: '750px', backgroundImage: `url(${reservationImg})`}}/>
            </LayerBack>

            <LayerBase style={{ paddingTop: '200vh'}}>
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
