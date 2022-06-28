import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ Wrapper_bg }) => Wrapper_bg || "black"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 25px;

  @media (max-width: 370px) {
    flex-direction: column;
  }
`;
export const SCard = styled.div`
  background-color: ${({ Card_bg }) => Card_bg || "yellow"};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;
export const SCardTitle = styled.h1`
  font-size: 24px;
`;

export const SCardBody = styled.p`
  font-size: 15px;
  font-weight: 5px;
`;

export const SCardImage = styled.img`
  max-width: 60%;
  min-width: 20%;

  @media (max-width: 370px) {
    width: 35%;
  }
`;

export const SCardTags = styled.h3`
  align-items: center;
`;
