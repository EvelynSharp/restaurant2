import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { ParallaxLayer, ParallaxGroup, } from '../../styles/style-index';
import home1 from '../../images/home1.jpeg';
import home2 from '../../images/home2.jpeg';
import glamorous from 'glamorous';

const HeaderMain = glamorous.h1({
  color: 'white',
  textAlign: 'center',
  fontSize: '3em',
  paddingTop: '1em !important',
})

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
  background:`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${home1})`,
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
              <BGImage style={{backgroundImage: `url(${home2})`}}>
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


//
// <Parallax style={{backgroundImage: `url(${home1})`}}>
//   <HeaderMain>home</HeaderMain>
// </Parallax>
//
// <div style={{ height: '50vh'}}>
// Scroll Up and Down this page to see the parallax scrolling effect.
// This div is just here to enable scrolling.
// Tip: Try to remove the background-attachment property to remove the scrolling effect.
// </div>
// <div style={{ backgroundColor:'black', height: '50vh'}}>
// Scroll Up and Down this page to see the parallax scrolling effect.
// This div is just here to enable scrolling.
// Tip: Try to remove the background-attachment property to remove the scrolling effect.
// </div>
//
// <Parallax style={{backgroundImage: `url(${home2})`}}></Parallax>
//
// <div style={{ height: '50vh'}}>
// Scroll Up and Down this page to see the parallax scrolling effect.
// This div is just here to enable scrolling.
// Tip: Try to remove the background-attachment property to remove the scrolling effect.
// </div>
