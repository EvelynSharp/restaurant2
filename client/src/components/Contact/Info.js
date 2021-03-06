import React from 'react';
import glamorous from 'glamorous';
import { ResHeader, Content, } from '../../styles/style-index';

const ContentText = glamorous.div( Content, {
  paddingTop: '3%',
})

const Info = () => (
  <div style={{ height: '100%'}}>
    <ResHeader style={{paddingTop: '4em'}}>ADDRESS</ResHeader>
      <div style={{ padding: '3% 0 0 0'}}>
        <ContentText>{`1000 S 500 E `}</ContentText>
        <ContentText>{`Salt Lake City, UT`}</ContentText>
        <ContentText>{`84108`}</ContentText>
        <ContentText>{`info@theeastslc.com`}</ContentText>
      </div>
    <ResHeader>HOURS</ResHeader>
      <div style={{ padding: '3% 0 2em 0'}} >
        <ContentText>{`Monday - Wednesday: 5:30pm - 10pm`}</ContentText>
        <ContentText>{`Thursday - Sunday: 5:30pm - 11pm`}</ContentText>
      </div>

  </div>
)

export default Info;
