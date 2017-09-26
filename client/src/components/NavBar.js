import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import glamorous from 'glamorous';

const Logo = glamorous.div({
  padding: '80px 0 0 10vw !important',
  color: 'white !important',
  fontSize: '3em',
})

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary fixed='top' style={{ border: 0}}>
          <Menu.Item as={Logo} name='home'>
            The East
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='home'>
              <NavLink to='/' style={{ color: 'white'}}>HOME</NavLink>
            </Menu.Item>
            <Menu.Item name='reservation' style={{ paddingRight: '10vw'}}>
              <NavLink to='/reservation' style={{ color: 'white'}}>RESERVATION</NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return { user: state.user }
// }

export default withRouter(NavBar);


// rightNavs = () => {
//   const { user, dispatch, history } = this.props;
//
//   if(user.id) {
//     return(
//       <Menu.Menu position='right'>
//         <Menu.Item
//           name='Logout'
//           onClick={() => dispatch(handleLogout(history))}
//         />
//       </Menu.Menu>
//     );
//   } else {
//     return(
//       <Menu.Menu position='right'>
//         <Link to='/register'>
//           <Menu.Item name='Register' />
//         </Link>
//         <Link to='/login'>
//           <Menu.Item name='Login' />
//         </Link>
//       </Menu.Menu>
//     );
//   }
// }
