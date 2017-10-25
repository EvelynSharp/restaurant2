import React from 'react';
import glamorous from 'glamorous';
import { MenuHeader, MenuOverLay } from '../../styles/style-index';

const OtherMenu = ({menu}) => {
  const { title, image } = menu;
  const BG = glamorous.div({
    background:` url(${image})`,
    backgroundSize: '26vw auto',
    height: '100%',
  })

  return (
    <BG>
      <MenuOverLay>
        <MenuHeader>{title}</MenuHeader>
      </MenuOverLay>
    </BG>
  )
}

export default OtherMenu;
