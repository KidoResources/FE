import React, { useState } from "react";
import { Flex, Form, Input, LoginWarpper, Button, Image } from "./loginElements";

export default function Login() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
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
        {/* <Image src="https://www.purina.co.uk/sites/default/files/2020-12/What%20Human%20Foods%20Can%20Cats%20EatHERO.jpg" alt='cat eating'/> */}
        <LoginWarpper>
          <h1>Login</h1>
          <Form>
            <Input
              value={formFields.username}
              conChange={handleInputChange}
              type="text"
              name="UserName"
              placeholder="Enter your Username"
            />
            <Input
              value={formFields.password}
              conChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Enter your Password"
            />
            <Button bg="#175676" color="#FFFFFF" onClick={handleClick}>
              Login
            </Button>
          </Form>
        </LoginWarpper>
      </Flex>
    </>
  );
}
