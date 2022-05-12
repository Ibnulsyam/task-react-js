import React from "react";
import styled from "styled-components";

const ContainerJumbotron = styled.div`
  margin: 10px auto;
  width: 80%;
  height: auto;
  background-color: #1a1c1a;
  border-radius: 20px;
  margin-top: 50px;
`;

const ConProfil = styled.div`
  width: 90%;
  height: auto;
  margin: 10px auto;
  text-align: center;
`;

const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 100%;
  padding: 5px;
  width: 150px;
  height: 150px;
  margin-top: 20px;
  background-color: white;
`;

const Title = styled.h3`
  margin-top: 10px;
  color: white;
`;

const Desc = styled.p`
  margin-top: 10px;
  padding-bottom: 30px;
  color: white;
`;

const JumboTron = () => {
  return (
    <ContainerJumbotron>
      <ConProfil>
        <Image src={process.env.PUBLIC_URL + "/ibe.jpg"} />
        <Title>Muhammad Ibnul Syam</Title>
        <Desc>Front-End Web Developer from Makassar, Indonesia.</Desc>
        <Desc>
          Currently student of Eduwork, Learning ReactJS, ExpressJS,
          TailwindCSS, Mysql, NodeJS and MongoDB. I'm also interested to
          collaborate/contribute to Open Source and/or Web Apps project.
        </Desc>
      </ConProfil>
    </ContainerJumbotron>
  );
};

export default JumboTron;
