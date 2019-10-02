import React from "react";
import {
  Col,
  Form,
  FormInput,
  FormGroup,
  InputGroup,
  InputGroupAddon
} from "shards-react";

const Forms = () => (
  <Col sm="12" md="6">
    <Form>
      <FormGroup>
      <label htmlFor="feUserName">User Name:  </label>
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
          </InputGroupAddon>
          <FormInput placeholder="Username" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
      <label htmlFor="feUserName">Password: </label>
        <FormInput
          type="password"
          placeholder="Password"
          onChange={() => {}}
        />
      </FormGroup>
    </Form>
  </Col>
);

export default Forms;
