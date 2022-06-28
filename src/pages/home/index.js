import React from "react";
// import content from "./content";
import { Button, Container, Flex, Image, StyledCard } from "./homeElements";
import {ReactComponent as Chat} from './images/Chat.svg';
import {ReactComponent as WorkingTogether} from './images/WorkTogether.svg';
import {ReactComponent as Explore} from './images/explore.svg';
import {ReactComponent as Conversation} from './images/conversation.svg';
import chat1 from './images/chat1.png';
import explore1 from './images/explore1.png';
import conversation1 from './images/conversation1.png';
import Card from "../../components/Card";

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

          <Button bg="#175676" color="#FFFFFF">
            Get Started for Free
          </Button>
        </div>
        < WorkingTogether /> {/*img*/}
      </Flex>
      <Card
        bg="#fffff"
        color ='#fffff'
        title="Growing Together"
        body="Generate meaningful discussions with your audience and build a
        strong, loyal community. Think of the insightful conversations you
        miss out on with a feedback form."
        tags="Tips"
        img={conversation1}
        alt="Three adults talking over some coffee"
      />
      <Card
        bg="#fffff"
        color ='#fffff'
        title="Flowing Conversations"
        body="You would not paginate a conversation in real life, so why do it
        online? Our threads have just-in-time loading for a more natural
        flow."
        img={chat1}
        alt="Two people have a conversation on the phone though text message"
      />
      <Card
        bg="#fffff"
        color ='#fffff'
        title="Your Exploration"
        body="It takes no time at all to understand the flow of information.
        Once you find one resources you like and want to learn more about
        just CLICK. You will find everything you need to know about the
        place or resource. From When do they open to what you may need to
        bring."
        img={explore1}
        alt="A cartoon airplane flight straight out of the screen"
      />
    </>
  );
};

export default Home;
