import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BsCurrencyDollar, BsPercent } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Container,
  Image,
  Stack,
} from "react-bootstrap";
import fetchData from "../../api/api.js";
import "./product.css";
function FullProduct() {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [product, setproduct] = useState([]);
  async function getProduct(q) {
    const res = await fetchData(q);
    setproduct(res.data);
  }
  useEffect(() => {
    getProduct(id);
  }, [id]);
  console.log(product);
  return (
    <>
      <Container className="mt-3" fluid="md">
        <Card>
          <CardBody>
            <Stack direction="horizontal" gap={2}>
              <Stack gap={2} id="side-img-con">
                {product &&
                  product.images?.map((img) => {
                    return (
                      <>
                        <Image
                          src={img}
                          thumbnail
                          id="side-img"
                          onClick={() => {
                            setMainImage(img);
                          }}
                        />
                      </>
                    );
                  })}
              </Stack>

              <Image
                src={mainImage ? mainImage : product?.thumbnail}
                id="product-img"
                thumbnail
              />

              <Stack className="px-2">
                <p>{product?.title}</p>
                <p>
                  <Badge bg="success">
                    {product?.rating}
                    <AiFillStar
                      style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "2px",
                      }}
                    />
                  </Badge>
                </p>
                <p className="fs-5">
                  <span>
                    <BsCurrencyDollar
                      style={{ width: "25px", height: "25px" }}
                    />
                    {product?.price}
                  </span>
                  {/* <small className="text-decoration-line-through ms-3">
                    <BsCurrencyDollar />
                    {parseInt(product?.price) + 200}
                  </small> */}
                  <small className="ms-3 text-success">
                    {product?.discountPercentage}
                    <BsPercent />
                    off
                  </small>
                </p>
                <div className=" d-flex gap-3 py-3 mt-auto">
                  <Button variant="success">Add To Cart</Button>
                  <Button variant="warning">Buy Now</Button>
                </div>
              </Stack>
              <Stack>
                <div className="visually-hidden">hello</div>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default FullProduct;
