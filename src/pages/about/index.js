import React from "react";
import {
  Container,
  // Title,
  Flex,
  Button,
} from "./aboutElement";
import {ReactComponent as WorkTogether} from './images/WorkTogether.svg';
import {ReactComponent as Profile} from './images/Profile.svg';

export default function About() {
  return (
    <Container>
      {/* <Title bg="#ebfbff">
        <h1>About Our Team</h1>
      </Title> */}
      <Flex bg="#ebfbff">
        <div>
        <h1>About Our Team</h1>
          <h2> Build The Community Everyone Will Love</h2>

          <p>
            Our Team is everything you have been Asking for and More. We Thrive
            to ensure that the community stays connected and helps build our
            small business and show people opportunities they never knew. If you
            know of opportunities and Companies you would love us to partner
            with. Click the Button Below! existed.
          </p>

          <Button bg="blue" color="white">
            Contact Us
          </Button>
        </div>
        < WorkTogether /> {/*img*/}
      </Flex>

      {/* Team Info */}
      {/* Christwide Oscar */}
      <Flex bg="#fffff">
        <div>
          <h1 > Christwide Oscar</h1>

          <p>
          Hey, My name is Christwide. Most Call me Christ, I am the CEO and Founder of KIDO. Super fast backstory, I worked in a low income school here in Denton. Which my good friend Nate, introduced me too. I realised there was a huge problem. Lots of people did not know what stuff they had access to in their community. If they did, the process was super long and confusing. This is Where KIDO Resources steps in. We come to change that and make the process simpler and bring it to one place. So no more hiding, lets take charge and change the way we get information.
          </p>
        </div>
        < Profile /> {/*img*/}
      </Flex>
      {/* Nate Stewart */}
      <Flex bg="#fffff">
      < Profile /> {/*img*/}
        <div>
          <h1 > Nate Stewart</h1>

          <p>
          Welcome to KIDO Resources! I am one of the creators as well as the chief information officer. I have a degree in child development and have worked in a child care setting for 4 years. At the moment I am studying to become an occupational therapist. These areas of education have given me the opportunity to work with many amazing families. A fun note is that I enjoy nature and believe everyone deserves to have the time to enjoy the outdoors with their families
          </p>
        </div>
      </Flex>
      <Container></Container>
    </Container>
  );
}


// const about = {
//   chrisName: 'Christwide Oscar',
//   chistInfo: 'Hey, My name is Christwide. Most Call me Christ, I am the CEO and Founder of KIDO. Super fast backstory, I worked in a low income school here in Denton. Which my good friend Nate, introduced me too. I realised there was a huge problem. Lots of people did not know what stuff they had access to in their community. If they did, the process was super long and confusing. This is Where KIDO Resources steps in. We come to change that and make the process simpler and bring it to one place. So no more hiding, lets take charge and change the way we get information.',
//   christImage: './images/Profile.svg',
//   nateName: 'Nathan Stewart',
//   nateInfo: 'Welcome to KIDO Resources! I am one of the creators as well as the chief information officer. I have a degree in child development and have worked in a child care setting for 4 years. At the moment I am studying to become an occupational therapist. These areas of education have given me the opportunity to work with many amazing families. A fun note is that I enjoy nature and believe everyone deserves to have the time to enjoy the outdoors with their families',
//   nateImage: './images/Profile.svg',
// };