import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../store/Cart.js";

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(deleteFromCart({ id: this }));
  }
  return (
    <>
      <Card className="my-3">
        <Row className="gap-2">
          <Col xs="4">
            <img src={item.images[0]} alt="" className="img-fluid h-100" />
          </Col>
          <Col xs="7">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardText>${item.price}</CardText>
              <CardText className="text-success">
                {item.rating}
                <FaStar />
                Rating
              </CardText>
              <CardText>Only {item.stock} stock Left</CardText>
            </CardHeader>
            <CardBody>
              <div className="d-flex gap-3">
                <Button
                  variant="outline-danger"
                  onClick={handleClick.bind(item.id)}
                >
                  Remove
                </Button>
                <Button variant="success">Buy Now</Button>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CartProduct;
