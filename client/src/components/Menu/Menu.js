import React from 'react';
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
          <div className='menu-category' id='dinner'>
            <h1 className='menu-category-title'>
              DINNER
            </h1>
          </div>

          <div className='menu-category' id='drinks'>
            <h1 className='menu-category-title'>
              COCKTAILS
            </h1>
          </div>

          <div className='menu-category' id='happy-hour'>
            <h1 className='menu-category-title'>
              BEER
            </h1>
          </div>

        </div>
      </Container>
    )
  }
}

export default Menu;
