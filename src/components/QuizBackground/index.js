// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;