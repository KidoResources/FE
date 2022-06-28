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
      <Wrapper bg={props.bg}>
        <SCard color={props.color}>
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
