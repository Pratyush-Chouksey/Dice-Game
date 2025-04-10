import React from 'react'
import styled from 'styled-components';

const Score = ({score}) => {
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

  h1 {
    font-size: 100px;
    line-height: 100px;

    @media (max-width: 768px) {
      font-size: 60px;
      line-height: 60px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
      line-height: 40px;
    }
  }

  p {
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;


export default Score