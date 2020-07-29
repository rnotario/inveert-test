import React from "react";
import { Table, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import useRequest from "../hooks/useRequestMultiple";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Error from "../components/Error";

const UserList = () => {
  const history = useHistory();
  const { data, isLoading, error } = useRequest(
    `https://jsonplaceholder.typicode.com/users`
  );

  if (error) {
    return <Error />;
  }

  const navigateToDetail = (userId) => {
    history.push(`/users/${userId}`);
  };

  const getRows = () =>
    data.map((user) => (
      <tr
        key={user.id}
        onClick={() => navigateToDetail(user.id)}
        style={{ cursor: "pointer" }}
      >
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    ));

  return (
    <>
      <Header />
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>Nombre y apellidos</th>
                <th>Email</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>{getRows()}</tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default UserList;
