import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          If selected number matches dice roll, you get points = dice number.
        </p>
        <p>If it doesn't match, you lose 1 point.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 40px auto 0;
  background-color: #fff6f6;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 16px;
  }

  .text p {
    margin-bottom: 12px;
    font-size: 18px;
  }
`;
