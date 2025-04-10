import React from 'react'
import styled from 'styled-components';

const Score = ({ score }) => {
  return (
    <ScoreContainer>
      <div>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  background-color: #fefefe;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  h1 {
    font-size: 64px;
    line-height: 80px;
    color: #2d2d2d;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    color: #555;
  }
`;

export default Score
