import React from "react";
import { Button, Card, CardText } from "react-bootstrap";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../store/Cart";

const Product = ({ product }) => {
  const itemsArr = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleBuyClick = () => {
    console.log(this);
  };
  function handleCartClick() {
    dispatch(addToCart({ id: this }));
  }
  function handleCartRemove() {
    dispatch(deleteFromCart({ id: this }));
  }
  return (
    <>
      <Card
        key={product?.id}
        style={{ width: "20rem", background: "transparent" }}
        className="position-relative w-100"
      >
        <div className="position-absolute z-2 top-0 end-0 p-1">
          <AiOutlineHeart
            style={{
              width: "30px",
              height: "30px",
              color: "crimson",
            }}
          />
        </div>
        <Card.Img
          src={product?.thumbnail}
          id="card-img"
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            {product?.title}

            <p className=" small d-flex gap-1">
              {product.rating}
              <AiFillStar
                style={{
                  color: "yellow",
                  width: "24px",
                  height: "24px",
                }}
              />
            </p>
          </Card.Title>
          <Card.Text>{product?.brand}</Card.Text>
          <CardText>${product?.price}</CardText>
          <div className="d-flex gap-2">
            <Button
              variant="primary"
              onClick={handleBuyClick.bind(product?.id)}
            >
              Buy Now
            </Button>
            {itemsArr.includes(product.id) ? (
              <Button
                variant="danger"
                onClick={handleCartRemove.bind(product?.id)}
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={handleCartClick.bind(product?.id)}
              >
                Add To Cart
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
