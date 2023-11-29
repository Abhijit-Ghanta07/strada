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
import "./product.css";
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
  console.log(products);
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
                          <>
                            <Stack direction="horizontal" gap={2}>
                              {/* <div
                                className="d-flex gap-1 flex-column"
                                style={{ width: "80px" }}
                              >
                                {product?.images.map((img) => {
                                  {
                                    return (
                                      <Image
                                        src={img}
                                        alt="product img"
                                        thumbnail
                                        id="side-img"
                                        onClick={() => {
                                          setCurrentimg(img);
                                        }}
                                      />
                                    );
                                  }
                                })}
                              </div> */}
                              <Link
                                id="img-link"
                                to={`/product/${product?.id}`}
                              >
                                <Image
                                  src={product?.thumbnail}
                                  thumbnail
                                  id="product-img"
                                />
                              </Link>

                              <Stack>
                                <p>{product.title}</p>
                                <p>
                                  {/* {product?.brand} */}
                                  <Badge bg="success">{product?.rating}</Badge>
                                </p>
                              </Stack>
                            </Stack>
                            <hr className="hr" />
                          </>
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
