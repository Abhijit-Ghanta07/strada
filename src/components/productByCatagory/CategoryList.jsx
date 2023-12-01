import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  DropdownDivider,
  Form,
  Image,
  Offcanvas,
  Row,
  Stack,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BiSortUp } from "react-icons/bi";
import fetchData from "../../api/api.js";
import CatagoryProduct from "./CatagoryProduct.jsx";
const CategoryList = () => {
  const { cata } = useParams();
  const [offShow, setOffShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentImg, setCurrentimg] = useState("");
  async function getData(query) {
    const res = await fetchData(query);
    setProducts(res.data?.products);
  }

  useEffect(() => {
    getData(`category/${cata}`);
  }, [cata]);
  return (
    <>
      <Container fluid>
        <Offcanvas
          id="sidebar"
          show={offShow}
          onHide={() => {
            setOffShow(!offShow);
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
        <Container fluid className="p-0 mt-3">
          <Row>
            <Col xs={3}>
              <Card>
                <CardBody>
                  <CardTitle>Filters</CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col xs={9}>
              <Card>
                <CardBody>
                  <CardTitle>Smartphones</CardTitle>
                  <Stack
                    direction="horizontal"
                    className="justify-content-between"
                  >
                    <p>
                      Sort By
                      <span className="text-decoration-underline text-primary ms-2">
                        Relevance
                      </span>
                    </p>
                    <Form.Select className="w-25 rounded-pill">
                      <option>Sort By</option>
                      <option>Most Relavent</option>
                      <option>Price Low-High</option>
                      <option>Price High-Low</option>
                      <option>Ratings</option>
                    </Form.Select>
                  </Stack>
                  <Stack gap={2} className="mt-3">
                    {products &&
                      products.map((product, i) => {
                        return (
                          <CatagoryProduct product={product} key={product.id} />
                        );
                      })}
                  </Stack>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Button
          variant="success"
          onClick={() => {
            setOffShow(true);
          }}
          className="d-block d-md-none position-fixed  start-50 z-3"
          style={{ bottom: "20px" }}
        >
          Fillters
          <BiSortUp
            className="ms-1"
            style={{ width: "24px", height: "24px" }}
          />
        </Button>
      </Container>
    </>
  );
};

export default CategoryList;
