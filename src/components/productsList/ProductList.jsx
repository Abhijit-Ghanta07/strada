import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiFillStar,
  AiOutlineArrowRight,
} from "react-icons/ai";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Slider from "../includes/Slider";
import { useEffect, useState } from "react";
import fetchData from "../../api/api";
import "./product.css";
import Product from "./Product";
import { useSelector } from "react-redux";
function ProductList() {
  let { phones, laptops } = useSelector((state) => state.product);

  // const [laptops, setLaptops] = useState([]);

  // async function getLaptops() {
  //   const res = await fetchData("category/laptops");
  //   setLaptops(res.data.products);
  // }
  return (
    <>
      <Container fluid className="mt-3 p-0">
        <Slider />
        <Container fluid className="mt-3">
          <Row className="justify-content-between">
            <Col xs={6} className="text-uppercase">
              new launched Products
            </Col>
            <Col xs={4}>
              {/* <Form.Select
                aria-label="Default select example"
                className="w-50 rounded-pill ms-auto"
              >
                <option>Sort By</option>
                <option value="1">Price Low-High</option>
                <option value="2">Price High-Low</option>
                <option value="3">Ratings</option>
              </Form.Select> */}
            </Col>
          </Row>
          {/* laptops */}
          <Row className="mt-3 bg-light py-3">
            <div className="d-flex justify-content-between">
              <p className="fs-4 fw-bold">Laptops</p>
              <Link className="text-decoration-none">
                View All
                <AiOutlineArrowRight />
              </Link>
            </div>
            <Col className="d-flex gap-2 flex-column flex-lg-row">
              {laptops &&
                laptops.map((product) => {
                  return <Product product={product} key={product?.id} />;
                })}
            </Col>
          </Row>

          {/* smartphones */}
          <Row className="mt-3  bg-light py-3">
            <div className="d-flex justify-content-between">
              <p className="fs-4 fw-bold">SmartPhones</p>
              <Link className="text-decoration-none">
                View All
                <AiOutlineArrowRight />
              </Link>
            </div>
            <Col className="d-flex gap-2 flex-column flex-lg-row">
              {phones &&
                phones.map((product) => {
                  return <Product product={product} key={product?.id} />;
                })}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default ProductList;
