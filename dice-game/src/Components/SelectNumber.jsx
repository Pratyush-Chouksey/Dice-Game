import React from "react";
import styled from "styled-components";

const SelectNumber = ({ selected, setSelected, error }) => {
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
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
    font-weight: 600;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
`;

export default SelectNumber;
