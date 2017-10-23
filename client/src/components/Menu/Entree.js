import React from 'react';
import glamorous from 'glamorous';
import entreeImg from '../../images/entree.jpeg';
import { MenuHeader, MenuText } from '../../styles/style-index';

const BG = glamorous.div({
  backgroundSize: 'cover',
  background:` url(${entreeImg})`,
  height: '350px',
})

const OverLay = glamorous.div({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 1s',
  ':hover': {
    color: 'rgba(255, 255, 255, 0)',
    background: 'rgba(255, 255, 255, 0)',
  }
})

const Entree = () => (
  <BG>
    <OverLay>
      <MenuHeader>Entree</MenuHeader>
      <div style={{ paddingTop: '10%' }}>
        <MenuText className='menu-text'>We use only the freshest, seasonal ingredients</MenuText>
        <MenuText className='menu-text'>so our menu changes frequently</MenuText>
        <MenuText className='menu-text'>See our sample menu here to learn more</MenuText>
      </div>
    </OverLay>
  </BG>
)


export default Entree;
