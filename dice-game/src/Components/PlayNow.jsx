import React from 'react'
import styled from 'styled-components'

const PlayNow = ({ handleStart }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src="/Images/Dices.png" alt="Dice" />
      </ImageWrapper>
      <Content>
        <H1>DICE GAME</H1>
        <Button onClick={handleStart}>Play Now</Button>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 40px;
  }
`

const ImageWrapper = styled.div`
  img {
    max-width: 100%;
    height: auto;

    @media (max-width: 768px) {
      width: 70%;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`

const H1 = styled.h1`
  font-weight: bold;
  font-size: 96px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`

export default PlayNow
