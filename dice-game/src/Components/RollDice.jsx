import React, { useState } from "react";
import styled from "styled-components";

const RollDice = ({ relodeImg, randomNumeder }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={relodeImg}>
        <img
          src={`/Images/Dice_Faces/dice_${randomNumeder}.png`}
          alt={`dice ${randomNumeder}`}
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
  text-align: center;

  .dice {
    cursor: pointer;

    img {
      width: 150px;
      max-width: 100%;
    }
  }

  p {
    font-size: 24px;
    margin-top: 16px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
