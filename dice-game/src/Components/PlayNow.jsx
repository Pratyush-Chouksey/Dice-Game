import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const PlayNow = ({ handleStart }) => {
  return (
    <Container>
      <ImageWrapper
        as={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/Images/Dices.png" alt="Dice" />
      </ImageWrapper>
      <Content
        as={motion.div}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
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
  color: #333;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`

const Button = styled.button`
  color: white;
  padding: 12px 24px;
  background: #1e1e1e;
  border-radius: 8px;
  min-width: 220px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`

export default PlayNow
