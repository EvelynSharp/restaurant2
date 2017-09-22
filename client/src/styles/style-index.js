import glamorous from 'glamorous';

export const ParallaxLayer = {
  position: 'absolute',
  textAlign: 'center',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
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
})


export const Content = glamorous.div({
  paddingTop: '10vh',
  fontSize: '1.2em',
  color: '#616161',
  fontWeight: '400',

})

export const TextContainer = glamorous.div({
  padding: '0 15vw',
})