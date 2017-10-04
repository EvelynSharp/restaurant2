import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home/Home';
import Restaurant from './Restaurant/Restaurant';
import Reservation from './Reservation/Reservation';
import Contact from './Contact/Contact';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import glamorous from 'glamorous';

const Parallax = glamorous.div({
  height: '100vh',
  // width: '100vw',
  overflowX: 'hidden',
  overflowY: 'auto',
  perspective: '1px',
})

class App extends Component {
  render() {
    return (
      <Parallax>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/restaurant' component={Restaurant} />
            <Route exact path='/reservation' component={Reservation} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Parallax>
    );
  }
}

export default App;
