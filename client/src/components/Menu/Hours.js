import React from 'react';
import glamorous from 'glamorous';
import { MenuHeader, MenuText } from '../../styles/style-index';

const Wrapper = glamorous.div({
  background: '#FAEBE6',
  height: '100%'
})

const Hours = () => (
  <Wrapper>
      <MenuHeader>Hours</MenuHeader>
      <div style={{ paddingTop: '8%'}}>
        <MenuText style={{ paddingTop: '1em', fontWeight: 'bold' }}>
          LUNCH
        </MenuText>
        <MenuText style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
          FRI - SUN 12:00-14:00
        </MenuText>
        <MenuText style={{ paddingTop: '1em', fontWeight: 'bold' }}>
          DINNER
        </MenuText>
        <MenuText style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
          TUE - SUN 18:30 - 23:30
        </MenuText>
      </div>
  </Wrapper>
)

export default Hours;
