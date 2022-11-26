import React from "react";
import { useNavigate } from "react-router-dom";

//css-in-js
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "FlVe", score: 0 },
    { id: "PeVe", score: 0 },
    { id: "PoVe", score: 0 },
    { id: "LOVe", score: 0 },
    { id: "OvVe", score: 0 },
    { id: "LaVe", score: 0 },
  ]);

  const navigate = useNavigate();

  console.log("totalScore", totalScore);

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      //결과 이동
      navigate("/result");
    }

    // if (type === "FlVe") {
    //   // 기존 스코어에 더할 값을 계산
    //   const addScore = totalScore[0].score + no;
    //   // 새로운 객체
    //   const newObject = { id: "FlVe", score: addScore };
    //   totalScore.splice(0, 1, newObject);
    // } else if (type === "PeVe") {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = { id: "PeVe", score: addScore };
    //   totalScore.splice(1, 1, newObject);
    // } else if (type === "PoVe") {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = { id: "PoVe", score: addScore };
    //   totalScore.splice(2, 1, newObject);
    // } else if (type === "LOVe") {
    //   const addScore = totalScore[3].score + no;
    //   const newObject = { id: "LOVe", score: addScore };
    //   totalScore.splice(3, 1, newObject);
    // } else if (type === "OvVe") {
    //   const addScore = totalScore[4].score + no;
    //   const newObject = { id: "OvVe", score: addScore };
    //   totalScore.splice(4, 1, newObject);
    // } else {
    //   const addScore = totalScore[5].score + no;
    //   const newObject = { id: "LaVe", score: addScore };
    //   totalScore.splice(5, 1, newObject);
    // }
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="success"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "30px" }}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <BtnGroup>
        <Btn
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          style={{ width: "70%", minHeight: "200px", fontSize: "35pt" }}
        >
          {QuestionData[questionNo].answera}
        </Btn>
        <Btn
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          style={{ width: "70%", minHeight: "200px", fontSize: "35pt" }}
        >
          {QuestionData[questionNo].answerb}
        </Btn>
      </BtnGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: var(--font-googleNanumgothic);
`;

const Title = styled.div`
  font-size: 25pt;
  margin-top: 150px;
  margin-bottom: 40px;
  margin-left: 100px;
  margin-right: 100px;
  text-align: center;
  color: grey;
`;
const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  padding: 1.5rem;
  border-radius: 2rem;
  font-size: 2.5rem;
  line-height: 1;
  font-weight: 400;
  transition: 0.5s;
  background: #eaf5d5;
  color: black;
  border: 1px solid #eaf5d5;
  font-family: var(--font-googleJua);
  margin-bottom: 30px;
`;
