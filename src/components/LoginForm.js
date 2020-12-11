import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
/* or
import {Form, Button} from "react-bootstrap";
but it will import the whole bootstrap */

function LoginForm({ Login, error }) {
  const [details, setDeatils] = useState({
    name: "",
    username: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <Form onSubmit={submitHandler} className="login-form ">
      <div className="form-inner">
        <h1 className="pb-3">
          <span className="font-weight-bold">mywebsite</span>.com
        </h1>

        {error !== "" ? <div className="pb-3 text-danger">{error}</div> : ""}
        <Form.Group className="form-group">
          <Form.Label className="font-weight-bold">Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDeatils({ ...details, name: e.target.value })}
            value={details.name}
            placeholder="Enter name..."
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">Username:</Form.Label>
          <Form.Control
            placeholder="Enter username..."
            type="name"
            name="name"
            id="name"
            onChange={(e) =>
              setDeatils({ ...details, username: e.target.value })
            }
            value={details.username}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="font-weight-bold">Password:</Form.Label>
          <Form.Control
            placeholder="Enter password..."
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDeatils({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </Form.Group>

        <Button className="btn-lg btn-dark btn-block" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
