import React from 'react';
import reservationImg from '../../images/reservationImg.jpeg';
import glamorous from 'glamorous';
import { Grid } from 'semantic-ui-react';
import { PageHeader,
         Content,
         TextContainer,
         PageLayerBase,
         PageLayerBack,
         PageHeaderImg,
        } from '../../styles/style-index';

const BGImage = glamorous.div(PageHeaderImg, {
  backgroundSize: 'cover',
})

const ResHeader = glamorous.div({
  fontSize: '1.5em',
  fontWeight: 'bold',
  paddingTop: '15vh',
  fontFamily: '"Open Sans", sans-serif',
})

const Reservation = () => (
  <div>
    <PageLayerBack >
      <BGImage style={{backgroundImage: `url(${reservationImg})`}}/>
    </PageLayerBack>

    <PageLayerBase>
      <div style={{height:'100vh', background: 'white'}}>
        <Grid>
          <Grid.Column>
            <PageHeader>RESERVATIONS</PageHeader>
            <ResHeader>PLEASE NOTE</ResHeader>
            <TextContainer>
              <Content>
                For reservations of 1-6 people, we invite you to use the Open Table link above or call us at 646-895-9884.
              </Content>
              <Content>
                For reservations for parties of 7 or more, please contact us via telephone 646-895-9884 or email us at info@theRestaurant2nyc.com to inquire about availability. We request that parties of 7 or more participate in our tasting menu.
              </Content>
              <Content>
                All reservations will be held for 15 minutes after the reserved time. After 15 minutes, we can no longer guarantee your reservation but will do our best to accommodate your party. The full menu is served in the dining room and the bar until 10 pm Sunday through Wednesday and until 11 pm Thursday through Saturday.
              </Content>
            </TextContainer>
            <ResHeader>PRIVATE DINING</ResHeader>
            <TextContainer>
              <Content style={{ paddingBottom: '25vh'}}>
                The Restaurant2 is available to reserve as a private dining space for up to 32 people. Our space is filled with rich wood and vintage finishes throughout, exposed brick walls and a bar area. For cocktail parties, we can accommodate up to 50 people. Please contact us for pricing and additional information at info@theRestaurant2nyc.com.
              </Content>
            </TextContainer>
          </Grid.Column>
        </Grid>
      </div>
    </PageLayerBase>
  </div>
)

export default Reservation;
