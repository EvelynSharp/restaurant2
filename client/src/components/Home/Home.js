import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import home1 from '../../images/home1.jpeg';
import home2 from '../../images/home2.jpeg';
import glamorous from 'glamorous';

const HeaderMain = glamorous.h1({
  color: 'white',
  textAlign: 'center',
  fontSize: '3em',
  paddingTop: '1em !important',
})

const ParallaxLayer = {
  position: 'absolute',
  textAlign: 'center',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
}

const LayerBase = glamorous.div(ParallaxLayer, {
  transform: 'translateZ(0) scale(1)',
  border: '1px solid red',
  padding: '100vh 0',
})

const LayerBack = glamorous.div(ParallaxLayer, {
  transform: 'translateZ(-1px) scale(2)',
  border: '1px solid blue',
})

class Home extends Component {

  render() {

    return(
        <div>
          <LayerBack >
            <div style={{border:'1px solid yellow', height: '100vh', backgroundImage: `url(${home1})`}}>
              This is the background
            </div>
          </LayerBack>

          <LayerBase >
            <div style={{border:'1px solid yellow'}}>
              This is the foreground
            </div>
          </LayerBase>
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
