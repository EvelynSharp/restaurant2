import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home/Home';
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
  border: '1px solid black',
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
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Parallax>
    );
  }
}

export default App;
