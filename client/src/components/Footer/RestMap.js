import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import { GOOGLE_API } from './keys'

const KEY = process.env.GOOGLE_KEY ? process.env.GOOGLE_KEY : 'AIzaSyDh5NSNcvbTx1YUyzheB_b91tvvCyvX1CM'

const RestMap = compose(
  withProps({
    googleMapURL: `https://maps.google.com/maps/api/js?libraries=places&key=${KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `350px`, padding: '7% 15% 2% 15%' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 40.747158, lng: -111.876745 }}
  >
    <Marker position={{ lat: 40.747158, lng: -111.876745 }} />
  </GoogleMap>
);



export default RestMap;
// <GoogleMap
//   defaultZoom={8}
//   defaultCenter={{ lat: 40.747158, lng: -111.876745 }}
// >
//   <Marker position={{ lat: 40.747158, lng: -111.876745 }} />
// </GoogleMap>
