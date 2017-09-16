import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import '../../styles/menu.css';

class Menu extends React.Component {

  render (){
    return(
      <Container fluid className='menu-container'>

        <div className='menu-page-title'>
          <h1 className='menu-header'>MENUS</h1>
        </div>

        <div className='menu-options'>
          <Link to='/dinner'>
            <div className='menu-category' id='dinner'>
              <h1 className='menu-category-title'>
                DINNER
              </h1>
            </div>
          </Link>
          <Link to='/drinks'>
            <div className='menu-category' id='drinks'>
              <h1 className='menu-category-title'>
                DRINKS
              </h1>
            </div>
          </Link>
          <Link to='/beer'>
            <div className='menu-category' id='happy-hour'>
              <h1 className='menu-category-title'>
                BEER
              </h1>
            </div>
          </Link>

        </div>
      </Container>
    )
  }
}

export default Menu;
