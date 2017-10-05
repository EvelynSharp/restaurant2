import React from 'react';
import glamorous from 'glamorous';
import staff1 from '../../images/staff1.jpg';
import staff2 from '../../images/staff2.jpeg';
import staff3 from '../../images/staff3.jpeg';
import ProfileDisplay from './ProfileDisplay';
import { PageHeader,
         Content,
         TextContainer,
        } from '../../styles/style-index';

const ContentText = glamorous.div( Content, {
  padding: '10% 15%',

})

const staff = [
  {
    name: 'Stephen MacLeod',
    title: 'Executive Chef',
    img: staff1,
  },
  {
    name: 'Karen Davidson',
    title: 'Director',
    img: staff2,
  },
  {
    name: 'Zoe Piper',
    title: 'Founder',
    img: staff3,
  }
]

const Intro = ({home}) => (
  <div style={{ background: 'white', minHeight: '100vh'}}>
    <PageHeader style={{ paddingTop: `${home ? '10%' : '0'}`}}>THE</PageHeader>
    <PageHeader style={{ paddingTop: '1em'}}>RESTAURANT</PageHeader>
    <TextContainer>
      <ContentText>
        This is a neighborhood restaurant that puts a creative spin on refined, seasonal fare. Drawing flavors and inspiration from around the globe, Chef Jeremy Salamon’s menu spotlights seasonal produce and local proteins. The Eddy also boasts a diverse and accessible wine list and original cocktails served in an eclectic array of glasses, tea cups and copper goblets. The space was designed by the very talented and amiable Michael J. Groth.
      </ContentText>
    </TextContainer>
    <TextContainer style={{ padding: '5% 0 10% 0'}}>
      {staff.map( person => {
        return (
          <ProfileDisplay person={person}/>
        )
      })}
    </TextContainer>
  </div>
)

export default Intro;
