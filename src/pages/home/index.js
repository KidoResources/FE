import React from "react";
// import content from "./content";
import { Button, Container, Flex, Image, StyledCard } from "./homeElements";
import {ReactComponent as Chat} from './images/Chat.svg';
import {ReactComponent as WorkingTogether} from './images/WorkTogether.svg';
import {ReactComponent as Explore} from './images/explore.svg';
import {ReactComponent as Conversation} from './images/conversation.svg';

const Home = () => {
  return (
    <>
      <Flex bg="#ebfbff">
        <div>
          <h1> Build The Community Everyone Will Love</h1>

          <p>
            KIDO Resources re-imagines the way we build communities. You have a
            voice, but so does your audience. Create connections with users as
            you engage in genuine discussion and exploration.
          </p>

          <Button bg="blue" color="white">
            Get Started for Free
          </Button>
        </div>
        < WorkingTogether /> {/*img*/}
      </Flex>
      <Container>
        <StyledCard>
          <div>
            <h2>Grow Together</h2>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
          <div>
            <Conversation />
          </div>
        </StyledCard>
        <StyledCard>
          <div>
            <h2>Flowing Conversations</h2>
            <p>
              You would not paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
          <Image>
            <Chat /> {/*img*/}
          </Image>
        </StyledCard>
        <StyledCard>
          <div>
            <h2>Your Exploration</h2>
            <p>
              It takes no time at all to understand the flow of information.
              Once you find one resources you like and want to learn more about
              just CLICK. You will find everything you need to know about the
              place or resource. From When do they open to what you may need to
              bring.
            </p>
          </div>
          <div>
            <Explore/>
          </div>
        </StyledCard>
      </Container>
    </>
  );
};

export default Home;
