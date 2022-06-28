import React from "react";
import {
  Wrapper,
  SCard,
  SCardBody,
  SCardImage,
  SCardTags,
  SCardTitle,
} from "./cardElement";

function Card(props) {
  return (
    <>
      <Wrapper Wrapper_bg={props.Wrapper_bg}> 
        <SCard Card_bg={props.Card_bg}>
          <SCardTitle>{props.title}</SCardTitle>
          <SCardBody>{props.body}</SCardBody>
          <SCardImage src={props.img} alt={props.alt} />
          <SCardTags>{props.tags}</SCardTags>
        </SCard>
      </Wrapper>
    </>
  );
}

export default Card;
