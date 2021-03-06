import React from 'react';
import { PageLayerBase } from '../../styles/style-index';
import { Grid } from 'semantic-ui-react';
import Entree from './Entree';
import Hours from './Hours';
import OtherMenu from './OtherMenu';
import glamorous from 'glamorous';
import dessertImg from '../../images/dessert.jpeg';
import drinkImg from '../../images/drink.jpg';
import otherImg from '../../images/health.jpeg';
import Footer from '../Footer/Footer';

const MenuBorder = {
  border: '1vw solid #FAEBE6',
  padding: '0 !important',
  textAlign: 'center !important',
}

const SmallMenuContainer = glamorous.div( MenuBorder, {
  width: '26vw !important',
  margin: '0 1vw',
  height: '180px',
})

const larMenuContainer = glamorous.div( MenuBorder, {
  margin: '0 1vw',
  height: '300px',
})

const otherMenuItems = [
  {
    title: 'Dessert',
    image: dessertImg,
  },
  {
    title: 'Drink',
    image: drinkImg,
  },
  {
    title: 'Other',
    image: otherImg,
  },
]

const displayMenuList = () => {
  return (
    <Grid style={{ margin: '0 7vw' } } centered>
      <Grid.Row>
        <Grid.Column as={larMenuContainer} style={{width: '54vw'}}>
          <Entree />
        </Grid.Column>
        <Grid.Column as={larMenuContainer} style={{width: '26vw', background: '#FAEBE6'}}>
          <Hours />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        { otherMenuItems.map( menu => {
            return (
              <Grid.Column as={SmallMenuContainer}>
                <OtherMenu menu={menu} />
              </Grid.Column>
            )
          })
        }
      </Grid.Row>
    </Grid>
  )
}

const Menu = ({home}) => {
  if(home) {
  return (
    <div style={{ paddingTop: '5%'}}>
      {displayMenuList()}
    </div>
  )} else {
    return (
      <PageLayerBase style={{ paddingTop: '270px'}}>
        {displayMenuList()}
        <div style={{ paddingTop: '100px'}}>
          <Footer />
        </div>
      </PageLayerBase>
    )
  }
}


export default Menu;
