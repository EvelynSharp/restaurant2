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
