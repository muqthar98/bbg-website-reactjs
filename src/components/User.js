import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listUsers } from "../redux/actions/userActions";
import { Container, Col, Card, Spinner, Alert } from "react-bootstrap";

function User() {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, users } = userDetails;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  //   const columns = [
  //     {
  //         name: 'Name',
  //         selector: row => row.name,
  //         sortable: true,
  //     },
  //     {
  //         name: 'Email',
  //         selector: row => row.email,
  //         sortable: true,
  //     },
  //     {
  //         name: 'Message',
  //         selector: row => row.message,
  //         sortable: true,
  //     },
  // ];

  return (
    <div>
      <Container>
        {/* <DataTable title="User List" columns={columns} data={data} pagination/> */}
        <Col sm={12}>
          <h1 style={{textAlign:"center",fontFamily:"'Raleway', sans-serif",marginTop:"30px"}}>User List</h1>
          {loading ? (
            <Spinner>{loading}</Spinner>
          ) : error ? (
            <Alert>{error}</Alert>
          ) : (
            users.user.map((user) => (
              <>
                <Card style={{marginBottom:"10px"}}>
                  <Card.Body>
                    <Card.Text>{user.name}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.message}</Card.Text>
                  </Card.Body>
                </Card>
              </>
            ))
          )}
        </Col>
      </Container>
    </div>
  );
}

export default User;
