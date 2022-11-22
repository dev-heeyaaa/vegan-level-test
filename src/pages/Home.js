import React from "react";
import { ButtonToolbar } from "react-bootstrap";

//css-in-js
import styled, { css } from "styled-components";
import VeganImg from "../assets/vegan.png";

const Wrapper = styled.div`
  background-color: #eaf5d5;
  height: 100vh;
  width: 100%;
  font-family: var(--font-googleNanumgothic);
`;

const Header = styled.div`
  padding-top: 15px;
  font-size: 40pt;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  color: grey;
`;

const LogoImage = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
`;

const Btn = styled.button`
  padding: 1.5rem;
  border-radius: 2rem;
  font-size: 3.5rem;
  line-height: 1.5;
  font-weight: bold;
  transition: 0.5s;
  background: #3d733d;
  color: white;
  border: 1px solid #eaf5d5;
  font-family: var(--font-googleJua);

  &:hover {
    background: #b8b8b8;
    color: white;
    transition: 0.5s;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Header>Vegan Level Test</Header>
      <Contents>
        <Title>나의 비건 레벨은?</Title>
        <LogoImage>
          <img src={VeganImg} width={250} height={250}></img>
        </LogoImage>
        <Btn>테스트 시작하기</Btn>
      </Contents>
    </Wrapper>
  );
};

export default Home;
