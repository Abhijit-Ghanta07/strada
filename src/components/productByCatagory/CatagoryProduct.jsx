import React from "react";
import { Badge, Button, Image, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../store/Cart";

const CatagoryProduct = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleCartClick() {
    dispatch(addToCart({ id: this }));
  }
  function handleCartRemove() {
    dispatch(deleteFromCart({ id: this }));
  }
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        {/* <div className="d-flex gap-1 flex-column" style={{ width: "80px" }}>
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
        <Link id="img-link" to={`/product/${product?.id}`}>
          <Image src={product?.thumbnail} thumbnail id="product-img" />
        </Link>

        <Stack>
          <p>{product.title}</p>
          <p>
            {/* {product?.brand} */}
            <Badge bg="success">Ratings: {product?.rating}</Badge>
          </p>
          <p className="fs-5 fw-medium">${product.price}</p>
          <div className="d-flex gap-3">
            {cart.includes(product.id) ? (
              <Button
                variant="danger"
                onClick={handleCartRemove.bind(product.id)}
              >
                Remove From cart
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={handleCartClick.bind(product.id)}
              >
                Add To Cart
              </Button>
            )}

            <Button variant="warning">Buy Now</Button>
          </div>
        </Stack>
      </Stack>
      <hr className="hr" />
    </>
  );
};

export default CatagoryProduct;
