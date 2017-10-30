import React, { Component } from 'react';
import { ParallaxLayer, ParallaxGroup, } from '../../styles/style-index';
import homeImg from '../../images/homeImg.jpeg';
import contactImg from '../../images/contactImg.jpeg';
import reservationImg from '../../images/reservationImg.jpeg';
import endImg from '../../images/endImg.jpeg';
import glamorous from 'glamorous';
import Intro from '../Restaurant/Intro';
import ResInfo from '../Reservation/ResInfo';
import ContactContent from '../Contact/ContactContent';
import Gallery from './Gallery';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

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
//TODO: fix vh so when vh is low still show all reservation

    return(
        <div>
          <ParallaxGroup style={{ zIndex: '10'}}>
            <LayerBack > <BGImage style={{ height: '100vh'}}/> </LayerBack>
            <LayerBase style={{padding: '100vh 0'}}>
                <Intro home={true}/>
            </LayerBase>
          </ParallaxGroup>

          <ParallaxGroup style={{ minHeight: '100vh', marginTop: '1100px'}}>
            <LayerBack >
              <BGImage style={{height: '750px', background: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${reservationImg})`}}>
              </BGImage>
            </LayerBack>

            <LayerBase style={{ minHeight: '750px'}}>
              <ResInfo home={true} />
              <div style={{ minHeight: '750px', background: 'white'}} >
                <Menu home={true} />
              </div>
            </LayerBase>
          </ParallaxGroup>

          <ParallaxGroup style={{ minHeight: '100vh', marginTop: '1300px'}}>
            <LayerBack >
              <BGImage style={{height: '750px', background: `linear-gradient(rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.6)), url(${contactImg})`}}>
              </BGImage>
            </LayerBack>

            <LayerBase style={{ minHeight: '750px'}}>
              <ContactContent home={true} />
              <div style={{ minHeight: '750px', background: 'white'}} >
                <Gallery />
              </div>
            </LayerBase>
          </ParallaxGroup>

          <ParallaxGroup style={{ minHeight: '100vh', marginTop: '1300px'}}>
            <LayerBack >
              <BGImage style={{height: '750px', background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${endImg})`}}>
              </BGImage>
            </LayerBack>

            <LayerBase style={{ minHeight: '750px'}}>
              <div style={{ marginTop: '750px', minHeight: '750px', background: 'white', border: '1px solid black'}} >
                <Footer />
              </div>
            </LayerBase>
          </ParallaxGroup>

        </div>

    );
  }
}

export default Home;
