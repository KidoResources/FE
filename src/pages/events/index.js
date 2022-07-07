import React from "react";
import {DCard,DCard_Button,DCard_Description,DCard_Flap1,DCard_Flap2,DCard_Img,DCard_Title} from './eventsElements';

const Events = () => {
  return (
    <>
      <h1>Welcome to the Testing ground for our components</h1>
     <DCard>
      <DCard_Img src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Food Platter' />
      <DCard_Title>
        <DCard_Button>More</DCard_Button>
        <h1>Card Title</h1>
        <small>Info is from everywhere</small>
      </DCard_Title>
      <DCard_Flap1>
        <DCard_Description>
        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </DCard_Description>
        <DCard_Flap2>
          <DCard_Button>Read More</DCard_Button>
        </DCard_Flap2>
      </DCard_Flap1>
     </DCard>
      
    </>
  );
};

export default Events;
