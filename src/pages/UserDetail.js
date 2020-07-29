import React from "react";
import { useParams } from "react-router-dom";
import { Form, Row, Col, Container } from "react-bootstrap";

import useRequest from "../hooks/useRequestSingle";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Error from "../components/Error";

const UserDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useRequest(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (error) {
    return <Error />;
  }

  const renderFormContent = () => (
    <Form>
      <Form.Group as={Row} controlId="id">
        <Form.Label column sm="2">
          ID
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={data.id} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="name">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={data.name} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="username">
        <Form.Label column sm="2">
          Username
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={data.username} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="email">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={data.email} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="street">
        <Form.Label column sm="2">
          Street
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={data.address.street} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="city">
        <Form.Label column sm="2">
          City
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={data.address.city} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="phone">
        <Form.Label column sm="2">
          Phone
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={data.phone} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="website">
        <Form.Label column sm="2">
          Website
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={data.website} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="companyName">
        <Form.Label column sm="2">
          Company
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={data.company.name} />
        </Col>
      </Form.Group>
    </Form>
  );

  return (
    <>
      <Header username={data.name} />
      <Container mt={5}>
        {isLoading ? <Loader /> : renderFormContent()}
      </Container>
    </>
  );
};

export default UserDetail;
