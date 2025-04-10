import React from "react";
import styled, { keyframes } from "styled-components";

const shakeAndBounce = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  10% { transform: translate(-5px, 0) rotate(-5deg); }
  20% { transform: translate(5px, 0) rotate(5deg); }
  30% { transform: translate(-4px, 0) rotate(-4deg); }
  40% { transform: translate(4px, 0) rotate(4deg); }
  50% { transform: translate(0, -10px) rotate(0); }
  60% { transform: translate(0, 5px); }
  70% { transform: translate(0, -3px); }
  80% { transform: translate(0, 2px); }
  90% { transform: translate(0, -1px); }
  100% { transform: translate(0, 0) scale(1); }
`;

const RollDice = ({ relodeImg, randomNumeder }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={relodeImg}>
        <img
          src={`/Images/Dice_Faces/dice_${randomNumeder}.png`}
          alt="dice"
          className="roll"
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    img {
      width: 160px;
      height: 160px;
      animation: ${shakeAndBounce} 0.8s ease-in-out;
    }
  }

  p {
    font-size: 24px;
    margin-top: 12px;
  }
`;
