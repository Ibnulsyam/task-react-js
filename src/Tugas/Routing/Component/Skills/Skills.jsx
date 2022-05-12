import React, { useState } from "react";
import styled from "styled-components";

const ContainerSkill = styled.div`
  margin: 10px auto;
  width: 80%;
  height: auto;
  background-color: #1a1c1a;
  border-radius: 20px;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  padding-top: 20px;
`;

const Title = styled.h5`
  color: white;
`;

const Desc = styled.p`
  color: white;
  padding: 0px;
`;

const TittleDesc = styled.p`
  display: inline-block;
  color: #626a70;
  font-style: italic;
  margin: 0px;
`;

const ConSkill = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: #2e312e;
  color: white;
  border-radius: 20px;
  width: auto;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Skills = () => {
  const [skill, setSkill] = useState([
    "HTML",
    "CSS",
    "JAVASCRIPT ",
    "PHP",
    "MYSQL",
    "MONGO DB",
    "BOOSTRAP",
    "NODEJS",
    "GIT",
    "GITHUB",
    "EXPRESS JS",
    "REACTJS",
    "STYLED COMPONENT",
  ]);
  return (
    <ContainerSkill>
      <Container>
        <Title>Technical Proficiencies</Title>
        <Desc>
          PHP with Laravel and CodeIgniter Framework, MySQL, JavaScript (Jquery,
          ReactJS, ExpressJS), HTML, CSS (Bootstrap & Tailwind). Adobe Premiere,
          Illustrator, Photoshop & Microsoft Office.
        </Desc>
        <Title>Languages</Title>
        <Desc>
          Bahasa Indonesia <TittleDesc>Native</TittleDesc>
        </Desc>
        <Desc>
          English <TittleDesc>Conversational</TittleDesc>
        </Desc>
        <Title>Other</Title>
        <Desc>
          Communication, teamwork, logical and critical thinking,
          problem-solving, adaptability to changes, creativity, work ethic &
          time management.
        </Desc>
        {skill.map((i) => {
          return <ConSkill>{i}</ConSkill>;
        })}
      </Container>
    </ContainerSkill>
  );
};

export default Skills;
