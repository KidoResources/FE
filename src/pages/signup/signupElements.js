import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row;
  height: 92vh;
  padding: 5%;
`;

export const SignupWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  width: 65%;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgb(86,88,87);
  background-color: #E0E0E1;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  /* min-width: 350px; */
 width: 69%;
  flex-direction: column;
  margin-bottom: 5%;
  /* background-color: #E0E0E1; */
`;

export const Input = styled.input`
width: 100%;
  margin-bottom: 5%;
  padding: 5%;
`;

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: ${({ bg }) => bg || "black"};
  color: ${({ color }) => color || "orange"};
  padding: 12px 50px;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

export const SignupImage = styled.image`
  max-width: 100%;
  height: auto;
`