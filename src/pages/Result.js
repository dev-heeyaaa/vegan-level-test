import React from "react";
import { useNavigate } from "react-router-dom";

//css-in-js
import styled from "styled-components";

import { resultData } from "../assets/data/resultdata";

const Result = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>{resultData[0].name}</Header>
      <Contents>
        <LogoImage>
          <img src={resultData[0].image} width={250} height={250}></img>
        </LogoImage>
        <Title>{resultData[0].desc}</Title>
        <Btn onClick={() => navigate("/")}>테스트 다시하기</Btn>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: var(--font-googleNanumgothic);
`;

const Header = styled.div`
  padding-top: 130px;
  font-size: 40pt;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20pt;
  margin-top: 40px;
  margin-right: 80px;
  margin-left: 80px;
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
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Btn = styled.button`
  margin-top: 2rem;
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
