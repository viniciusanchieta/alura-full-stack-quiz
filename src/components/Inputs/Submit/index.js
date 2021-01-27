import styled from 'styled-components'

// src/components/Footer/index.js
const Button = styled.div`

input[type=submit]:enabled {
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

  input[type=submit]:disabled {
  width: 100%;
    background-color: ${({ theme }) => {
    return theme.colors.secondary;
  }};
    opacity:0.5;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }
}
`;

export default function InputSubmit(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button>
      <input type="submit" value={props.username.length == 0 ? ('Informe seu nome antes de iniciar') : (props.username + ", clique aqui para iniciar")} disabled={props.username.length === 0} />
    </Button>
  );
}