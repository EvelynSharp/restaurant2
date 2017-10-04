import React from 'react';
import glamorous from 'glamorous';


const ProfileDisplay = ({person}) => {

  const Image = glamorous.img({
    width: '20vw',
    height: '13vw',
    overFlowY: 'hidden',
    display: 'inline-block',
    margin: '0 3vw',
  })

  return (
      <Image src={person.img} />
  )
}
export default ProfileDisplay;
