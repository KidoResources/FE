import React, { useState } from "react";
import {
  Flex,
  SignupWrapper,
  Form,
  Input,
  Button,
  SignupImage,
} from "./signupElements";
import SignupPic from "./images/signpad.png";

function SignUp() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  function handleInputChange(e) {
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(formFields);
  }
  return (
    <>
      <Flex>
        <SignupImage
          src={SignupPic}
          alt="Image with patterns of Circle and Crosses "
        />
        <SignupWrapper>
          <h1> Sign Up</h1>

          <Form>
            <Input
              value={formFields.firstName}
              onChange={handleInputChange}
              type="text"
              name="firstName"
              placeholder="Enter First Name"
            />
            <Input
              value={formFields.lastName}
              onChange={handleInputChange}
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
            />
            <Input
              value={formFields.email}
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="Enter Email Address"
            />
            <Input
              value={formFields.username}
              onChange={handleInputChange}
              type="text"
              name="username"
              placeholder="Create username"
            />
            <Input
              value={formFields.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Create password"
            />
            <Button bg="#175676" color="#FFFFFF" onClick={handleClick}>
              Create Account
            </Button>
          </Form>
        </SignupWrapper>
      </Flex>
    </>
  );
}

export default SignUp;
