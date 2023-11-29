import { useMemo } from "react";
import Header from "../includes/Header";
import { Outlet } from "react-router-dom";
import Slider from "../includes/Slider";
import { Container } from "react-bootstrap";
import GetData from "../../data/GetData";

function Home() {
  return (
    <Container fluid className="p-0">
      <GetData />
      <Header />
      <Outlet />
    </Container>
  );
}

export default Home;
