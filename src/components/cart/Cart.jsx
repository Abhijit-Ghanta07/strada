import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { product } from "../../data/data.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct.jsx";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const { phones, laptops } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  function filterItems() {
    let phoneItems = phones.filter((item) => {
      return cartItems.includes(item.id);
    });
    let laptopItems = laptops.filter((item) => {
      return cartItems.includes(item.id);
    });

    setProducts((prev) => [...phoneItems, ...laptopItems]);
  }

  // const val = useMemo(() => {
  //   cartItems.forEach((item) => {
  //     getData(item);
  //   });
  // }, []);

  // async function getData(query) {
  //   const res = await fetchData(query);
  //   if (res.status == 200) {
  //     setProducts((prev) => [...prev, res.data]);
  //   }
  // }
  function calculatePrice() {
    let totalPrice = 0;
    if (products) {
      products.map((prevItem) => {
        totalPrice += prevItem.price;
      });
      setPrice(totalPrice);
    }
  }

  useEffect(() => {
    filterItems();
  }, [cartItems]);

  useEffect(() => {
    calculatePrice();
  }, [products]);
  return (
    <div className="cart">
      <Container fluid="lg">
        <Row className="gap-3 py-4">
          <Col sm md="6">
            {products &&
              products.map((item) => <CartProduct item={item} key={item.id} />)}
          </Col>
          <Col sm md="4">
            <Card className="p-3">
              <CardTitle className="text-secondary">Price Details</CardTitle>
              <CardBody>
                <CardText className="d-flex justify-content-between">
                  <span>Price({cartItems.length}items):</span>{" "}
                  <span>{price}</span>
                </CardText>
                <CardText className="d-flex justify-content-between">
                  <span>Discount:</span>{" "}
                  <span className="text-success">20%</span>
                </CardText>
                <CardText className="d-flex justify-content-between">
                  <span>Delivery charge:</span>{" "}
                  <span className="text-success">Free Delivery</span>
                </CardText>
                <hr />
                <CardText className="d-flex justify-content-between">
                  <span>Total Amount:</span> <span>{price}</span>
                </CardText>
                <CardText className="text-success">Your save ${price}</CardText>
                <hr />
                <Button variant="primary">Place Now</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
