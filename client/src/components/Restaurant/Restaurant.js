import React from 'react';
import reservationImg from '../../images/reservationImg.jpeg';
import glamorous from 'glamorous';
import Footer from '../Footer/Footer'
import { Grid } from 'semantic-ui-react';
import { PageHeader,
         Content,
         TextContainer,
         PageLayerBase,
        } from '../../styles/style-index';


const ContentText = glamorous.div( Content, {
  padding: '10% 15%',

})

const Restaurant = () => (
  <div>
    <PageLayerBase style={{ paddingTop: '270px'}}>
      <PageHeader style={{ paddingTop: '0'}}>THE</PageHeader>
      <PageHeader style={{ paddingTop: '1em'}}>RESTAURANT</PageHeader>
      <TextContainer>
        <ContentText>
          This is a neighborhood restaurant that puts a creative spin on refined, seasonal fare. Drawing flavors and inspiration from around the globe, Chef Jeremy Salamon’s menu spotlights seasonal produce and local proteins. The Eddy also boasts a diverse and accessible wine list and original cocktails served in an eclectic array of glasses, tea cups and copper goblets. The space was designed by the very talented and amiable Michael J. Groth.
        </ContentText>
      </TextContainer>
    </PageLayerBase>

  </div>
)

export default Restaurant;
