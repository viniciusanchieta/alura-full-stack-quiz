import styled from 'styled-components'

// src/components/Footer/index.js
const InputStyle = styled.div`
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    margin-top: 8px;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: ${({ theme }) => {
        return theme.colors.mainBg;
      }};

      color: ${({ theme }) => theme.colors.textPrimary};
  }  
`;

export default function InputUserName() {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <InputStyle>
      <input
        id="fname" type="text" name="firstname" placeholder="Coloque seu nome aqui"
      />
    </InputStyle>
  );
}