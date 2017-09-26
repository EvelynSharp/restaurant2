import glamorous from 'glamorous';

export const ParallaxLayer = {
  position: 'absolute',
  textAlign: 'center',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
}

export const PageHeaderImg = {
  height: '500px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

export const ParallaxGroup = glamorous.div({
  height: '100vh',
  position: 'relative',
  transformStyle: 'preserve-3d',
})


export const PageHeader = glamorous.div({
  paddingTop: '20vh',
  fontSize: '4em',
  fontWeight: 'bold',
  fontFamily: 'Domine, serif',
})


export const Content = glamorous.div({
  paddingTop: '10vh',
  fontSize: '1.2em',
  color: '#616161',
  fontWeight: '400',
  fontFamily: '"Open Sans", sans-serif',
})

export const TextContainer = glamorous.div({
  padding: '0 15vw',
})

export const PageLayerBase = glamorous.div(ParallaxLayer, {
 transform: 'translateZ(0) scale(1)',
 padding: '500px 0',
})

export const PageLayerBack = glamorous.div(ParallaxLayer, {
 transform: 'translateZ(-0.5px) scale(1.5)',
})
