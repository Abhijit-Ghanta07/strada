import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import {
  Badge,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./include.css";
import fetchData from "../../api/api.js";
import { useSelector } from "react-redux";
function Header() {
  const cart = useSelector((state) => state.cart);
  const [catagory, setCatagory] = useState(null);
  async function getData() {
    const res = await fetchData("categories/");
    setCatagory(res.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="px-3">
        <Navbar.Brand id="logo" className="fw-bolder">
          <Link to="/"> Strada</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-lg-center my-lg-0 col py-2 flex-row gap-2">
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              {catagory?.map((cata, i) => {
                if (i >= 10) {
                  return;
                }
                return (
                  <NavDropdown.Item
                    href={cata}
                    key={i}
                    className="text-uppercase"
                  >
                    {cata}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link href="#action1">Sale</Nav.Link>
            <Nav.Link href="#action2">NEW</Nav.Link>
            <Nav.Link href="#action2">Popular</Nav.Link>
            <Nav.Link href="#action2">Explore</Nav.Link>
          </Nav>
          <div className="d-flex col justify-content-lg-center gap-3">
            <Form.Control
              type="search"
              placeholder="Search Product"
              className="m-0 rounded-pill w-50 "
              aria-label="Search Product"
              id="form-input"
            />

            <Link to={"/account"} className="text-dark text-decoration-none">
              <MdPersonOutline id="header-icons" />
              Account
            </Link>

            <Link to={"/cart"} className="text-dark text-decoration-none">
              <FiShoppingCart id="header-icons" />
              Cart <Badge bg="danger">{cart.length}</Badge>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
