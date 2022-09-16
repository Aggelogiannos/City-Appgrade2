import React from "react";
import Card from "../../CustomUIElements/Card/Card";
import Button from "../../CustomUIElements/FormElements/Button/Button";
import "./RequestList.css";
import { Col, Container, Row } from "react-grid-system";
import RequestItem from "../RequestItem/RequestItem";

const RequestList = (props) => {
  // Used to translate location for Map object (view tree on map)
  // const createLocation = (latitude, longitude) => {
  //   return {
  //     lat: latitude,
  //     lng: longitude
  //   }
  // }

  // If there are no requests found, render a call to action.
  if (props.items.length === 0) {
    return (
      <div className='request-list center'>
        <Card>
          <h2>Δεν έχετε κάνει κάποιο αίτημα, Μήπως θέλετε να κάνετε ένα;</h2>
          <Button to=''>Κάντε ένα αίτημα</Button>
        </Card>
      </div>
    );
  }
  // Render the request list.
  else {
    return (
      <div className={"request-list"}>
        <ul>
          <Container>
            <Row>
              {props.items.map((request) => (
                <Col sm={12} lg={6} xl={4} key={request.request_id}>
                  <RequestItem
                    id={request.request_id}
                    status={request.isResolved}
                    date={request.date}
                    title={request.title}
                    // image={requestPhoto}
                    address={request.address}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </ul>
      </div>
    );
  }
};

export default RequestList;
