import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import homeheader from '../../images/homeheader.jpeg';
import glamorous from 'glamorous';

const Parallax = glamorous.div({
  backgroundImage: `url(${homeheader})`,
  height: '100vh',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'

})

class Home extends Component {

  render() {

    return(
      <div>
        <Parallax></Parallax>

        <div style={{ height: '100vh'}}>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>

      </div>
    );
  }
}

export default Home;
