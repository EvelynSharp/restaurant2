import React from 'react';
import glamorous from 'glamorous';

const Image = glamorous.img({
  width: '20vw',
  height: '13vw',
})

const Title = glamorous.div({
  backgroundColor: 'black',
  textAlign: 'left',
  color: 'white',
  width: '20vw',
  padding: '1em 0',
  position: 'relative',
  bottom: '3vw',
  left: '2vw',
  '& div': {
    margin: '0 0 0.3em 1.5vw '
  }
})

const Wrapper = glamorous.div({
  overFlowY: 'hidden',
  display: 'inline-block',
  margin: '0 3vw',
})

const ProfileDisplay = ({person}) => {

  return (
    <Wrapper>
      <Image src={person.img} />
      <Title>
        <div>{person.name}</div>
        <div>{person.title}</div>
      </Title>
    </Wrapper>
  )
}
export default ProfileDisplay;
