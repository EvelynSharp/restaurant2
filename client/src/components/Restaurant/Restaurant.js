import React from 'react';
import Footer from '../Footer/Footer';
import Intro from './Intro';
import { PageLayerBase } from '../../styles/style-index';

const Restaurant = () => (
  <PageLayerBase style={{ paddingTop: '270px'}}>
    <Intro />
    <Footer />
  </PageLayerBase>
)

export default Restaurant;
