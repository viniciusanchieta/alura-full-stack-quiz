import styled from 'styled-components'

// src/components/Footer/index.js
const Button = styled.div`
input[type=submit] {
    width: 100%;
    background-color: ${({ theme }) => {
        return theme.colors.secondary;
      }};
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }
`;

export default function InputSubmit() {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button>
      <input type="submit" value="Iniciar"/>
    </Button>
  );
}