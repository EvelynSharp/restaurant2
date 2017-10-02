import React from 'react';
import glamorous from 'glamorous';
import { Icon, Button } from 'semantic-ui-react';
import { PageHeader,
         Content,
         TextContainer,
         PageLayerBase,
         PageLayerBack,
         PageHeaderImg,
         ResHeader,
        } from '../../styles/style-index';
import footerImg from '../../images/footerImg.jpeg';

const ContentText = glamorous.div( Content, {
  paddingTop: '1%',
  color: 'white',
})

const Btn = glamorous.div({
  color: 'white !important',
  backgroundColor: 'rgba(0, 0, 0, 0) !important',
  border: '2px solid white !important',
  margin: '0 0.5em !important',
  ':hover': {
    color: '#3C342F !important',
    backgroundColor: 'white !important',
  },
  '& i': {
    fontSize: '1.2em !important'
  }
})

const Img = glamorous.img({
  height: '30%',
  width: '50%',

})

const Footer = () => (
  <div style={{backgroundColor: '#3C342F', color: 'white'}}>
    <h1>Footer</h1>
    <div style={{ padding: '1% 0 5% 0'}}>
      <ContentText>{`1000 S 500 E `}</ContentText>
      <ContentText>{`Salt Lake City, UT`}</ContentText>
      <ContentText>{`84108`}</ContentText>
      <ContentText>{`info@theeastslc.com`}</ContentText>
    </div>
    <div style={{ padding: '0 0 5% 0'}}>
      <Button as={Btn} icon='facebook f' />
      <Button as={Btn} icon='instagram' />
      <Button as={Btn} icon='twitter' />
    </div>
    <div style={{ padding: '0 0 10% 0'}}>
      <Img src={footerImg} />
    </div>
  </div>
)

export default Footer;
