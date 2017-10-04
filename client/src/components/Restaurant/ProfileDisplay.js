import React from 'react';
import glamorous from 'glamorous';


const ProfileDisplay = ({person}) => {

  const Image = glamorous.img({
    width: '200px',
    height: '140px',
    overFlowY: 'hidden',
    display: 'inline-block',

  })

  return (
      <Image src={person.img} />
  )
}
export default ProfileDisplay;
