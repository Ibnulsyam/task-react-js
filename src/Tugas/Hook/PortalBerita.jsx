import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LiveSearch from "./Component/LiveSearch";
import Navigasi from "./Component/Navbar";
import { Container } from "react-bootstrap";
import Cards from "./Component/Cards";

const PortalBerita = (props) => {
  let [value, setValue] = useState("");
  let handleValue = (data) => {
    setValue(data);
  };
  return (
    <div>
      <Navigasi />
      <Container>
        <LiveSearch send={handleValue} />
        <Cards value={value} />
      </Container>
    </div>
  );
};
export default PortalBerita;
