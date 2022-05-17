import React from "react";
import styled from "styled-components";

const ConPortofolio = styled.div`
  margin: 10px auto;
  width: 80%;
  height: 400px;
  background-color: #1a1c1a;
  border-radius: 20px;
  margin-top: 50px;
`;
const Desc = styled.p`
  color: white;
`;

const Portofolio = () => {
  return (
    <ConPortofolio>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis
        est odit nesciunt maiores quia adipisci. Unde, dolores veritatis rerum
        porro veniam esse nemo repellendus, cumque culpa dignissimos similique
        voluptatum.
      </Desc>
    </ConPortofolio>
  );
};

export default Portofolio;
