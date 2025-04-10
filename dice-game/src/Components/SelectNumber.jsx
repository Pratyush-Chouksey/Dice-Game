import React, { useState } from "react";
import styled from "styled-components";

const SelectNumber = ({selected,setSelected,error}) => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            isSelected={value === selected}
            key={i}
            onClick={() => setSelected(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;
  }

  p {
    font-size: 24px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .error {
    color: red;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }
`;

export default SelectNumber;
