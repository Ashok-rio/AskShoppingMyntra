import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const OrderSideNav = props => {
  return (
    <React.Fragment>
      <Container className="ordersContainer">
        <Row>
          <Col>
            <h5 className="Account">Account</h5>
            <p className="Orderemail">{props.email}</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg={"3"}>
            <Card className="orderCard">
              <CardBody>
                <h6 className="orderHeading">Overview</h6>
                <hr />
                <h6 className="orderHeading">ORDERS</h6>
                <span className="OrdRet" onClick={()=>window.location.pathname = '/orders'}>Orders & Returns</span>
                <hr />
                <h6 className="orderHeading">ACCOUNT</h6>
                <span className="orderSideNav" onClick={()=>window.location.pathname = '/profile'}>Profile</span>
                <br />
                <span className="orderSideNav" onClick={()=>window.location.pathname = '/address'}>Addresses</span>
                <br />
              </CardBody>
            </Card>
          </Col>
          <Col lg={"9"}>{props.renders}</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default OrderSideNav;
