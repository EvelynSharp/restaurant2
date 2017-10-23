import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
// import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import glamorous from 'glamorous';

const Logo = glamorous.div({
  padding: '80px 0 0 10vw !important',
  fontSize: '3em',
})

class NavBar extends Component {
  render() {
    const { pathname } = this.props.history.location;
    const color = pathname === '/restaurant' || pathname === '/menu' ? 'black' : 'white'
    return (
      <div>
        <Menu pointing secondary fixed='top' style={{ border: 0}}>
          <Menu.Item as={Logo} style={{ color }} name='home'>
            The East
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='home'>
              <NavLink to='/' style={{ color }}>HOME</NavLink>
            </Menu.Item>
            <Menu.Item name='menu'>
              <NavLink to='/menu' style={{ color }}>MENU</NavLink>
            </Menu.Item>
            <Menu.Item name='restaurant'>
              <NavLink to='/restaurant' style={{ color }}>RESTAURANT</NavLink>
            </Menu.Item>
            <Menu.Item name='reservation'>
              <NavLink to='/reservation'style={{ color }}>RESERVATION</NavLink>
            </Menu.Item>
            <Menu.Item name='contact' style={{ paddingRight: '10vw'}}>
              <NavLink to='/contact' style={{ color }}>CONTACT</NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}


export default withRouter(NavBar);
