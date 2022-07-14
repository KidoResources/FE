import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  flex-direction: row;
`;

export const LoginWarpper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  width:50%;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgb(86, 88, 87);
  background-color: #e0e0e1;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 69%;
  flex-direction: column;
  margin-bottom: 5%;
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

export const Image = styled.image`
  width: 50%;
  border: dotted;
`;
