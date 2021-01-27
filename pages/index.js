import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import InputSubmit from '../src/components/Inputs/Submit';
import GitHubCorner from '../src/components/GitHubCorner';


const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

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

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{(db.title)}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{(db.description)}</p>
            <form autocomplete="off" onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <InputStyle>
                <input
                  id="fname"
                  onChange={function (event) {
                    // name = event.target.value;
                    setName(event.target.value);
                  }}
                  type="text"
                  name="firstname"
                  placeholder="Coloque seu nome aqui"
                />
              </InputStyle>
              <InputSubmit username={name} />
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/viniciusanchieta" />
    </QuizBackground>
  );
}
