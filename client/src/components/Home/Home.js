import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import home1 from '../../images/home1.jpeg';
import home2 from '../../images/home2.jpeg';
import glamorous from 'glamorous';

const Parallax = glamorous.div({
  height: '100vh',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
})

const HeaderMain = glamorous.h1({
  color: 'white',
  textAlign: 'center',
  fontSize: '3em',
  paddingTop: '1em !important',
})

class Home extends Component {

  render() {

    return(
      <div>
        <Parallax style={{backgroundImage: `url(${home1})`}}>
          <HeaderMain>home</HeaderMain>
        </Parallax>

        <div style={{ height: '50vh'}}>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
        <div style={{ backgroundColor:'black', height: '50vh'}}>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>

        <Parallax style={{backgroundImage: `url(${home2})`}}></Parallax>

        <div style={{ height: '50vh'}}>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
      </div>
    );
  }
}

export default Home;
