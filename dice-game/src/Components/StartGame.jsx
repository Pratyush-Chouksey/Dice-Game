import React, { useState } from "react";
import styled from "styled-components";
import Score from "./Score";
import SelectNumber from "./SelectNumber";
import RollDice from "./RollDice";
import Rules from "./Rules";

export const StartGame = () => {
  const [error, setError] = useState();
  const [score, setScore] = useState(0);
  const [randomNumeder, setRandomNumber] = useState(1);
  const [selected, setSelected] = useState();
  const [showRules, setShowRules] = useState(false);

  function randomNumberGenretor(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function relodeImg() {
    if (selected === undefined) {
      setError(`You Have Not Selected Any Number`);
    } else {
      setError();
      const random = randomNumberGenretor(1, 6);
      setRandomNumber(random);
      if (random === selected) {
        setScore((prev) => prev + selected);
      } else {
        setScore((prev) => prev - 1);
      }
      setSelected();
    }
  }

  return (
    <MainContainer>
      <div className="top_section">
        <Score score={score} />
        <SelectNumber
          selected={selected}
          setSelected={setSelected}
          error={error}
        />
      </div>
      <RollDice relodeImg={relodeImg} randomNumeder={randomNumeder} />
      <div className="btns">
        <OutlineButton onClick={() => setScore(0)}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default StartGame;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    flex-wrap: wrap;
    gap: 20px;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 8px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
