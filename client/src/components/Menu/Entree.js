import React from 'react';
import glamorous from 'glamorous';
import entreeImg from '../../images/entree.jpeg';
import { MenuHeader, MenuText, MenuOverLay } from '../../styles/style-index';

const BG = glamorous.div({
  backgroundSize: 'cover',
  background:` url(${entreeImg})`,
  height: '100%',
})

const Entree = () => (
  <BG>
    <MenuOverLay>
      <MenuHeader>Entree</MenuHeader>
      <div style={{ paddingTop: '10%' }}>
        <MenuText className='menu-text'>We use only the freshest, seasonal ingredients</MenuText>
        <MenuText className='menu-text'>so our menu changes frequently</MenuText>
        <MenuText className='menu-text'>See our sample menu here to learn more</MenuText>
      </div>
    </MenuOverLay>
  </BG>
)


export default Entree;
