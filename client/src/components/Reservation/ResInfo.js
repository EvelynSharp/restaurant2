import React from 'react';
import glamorous from 'glamorous';
import { Grid } from 'semantic-ui-react';
import { PageHeader,
         Content,
         TextContainer,
         ResHeader,
        } from '../../styles/style-index';

const ContentText = glamorous.div( Content, {
  paddingTop: '5%',
})

const homeHeaderStyle = {
  paddingTop: '7%',
  color: 'white',
}

const ResInfo = ({home}) => (
  <div style={{ background: `${home ? null : 'white'}`}}>
    <Grid>
      <Grid.Column>
        <PageHeader style={ home ? {...homeHeaderStyle} : null }>RESERVATIONS</PageHeader>
        <ResHeader style={ home ? {...homeHeaderStyle} : null }>PLEASE NOTE</ResHeader>
        <TextContainer>
          <ContentText style={{color: `${home? 'white' : '#616161'}`}}>
            For reservations of 1-6 people, we invite you to use the Open Table link above or call us at 646-895-9884.
          </ContentText>
          <ContentText style={{color: `${home? 'white' : '#616161'}`}}>
            For reservations for parties of 7 or more, please contact us via telephone 646-895-9884 or email us at info@theRestaurant2nyc.com to inquire about availability. We request that parties of 7 or more participate in our tasting menu.
          </ContentText>
          <ContentText style={{color: `${home? 'white' : '#616161'}`}}>
            All reservations will be held for 15 minutes after the reserved time. After 15 minutes, we can no longer guarantee your reservation but will do our best to accommodate your party. The full menu is served in the dining room and the bar until 10 pm Sunday through Wednesday and until 11 pm Thursday through Saturday.
          </ContentText>
        </TextContainer>
        <ResHeader style={ home ? {...homeHeaderStyle} : null }>PRIVATE DINING</ResHeader>
        <TextContainer>
          <ContentText style={{ paddingBottom: '15%', color: `${home? 'white' : '#616161'}`}}>
            The Restaurant2 is available to reserve as a private dining space for up to 32 people. Our space is filled with rich wood and vintage finishes throughout, exposed brick walls and a bar area. For cocktail parties, we can accommodate up to 50 people. Please contact us for pricing and additional information at info@theRestaurant2nyc.com.
          </ContentText>
        </TextContainer>
      </Grid.Column>
    </Grid>
  </div>

)

export default ResInfo;
