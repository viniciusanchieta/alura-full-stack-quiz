import styled from 'styled-components';
import Head from 'next/head'
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import InputUserName from '../src/components/Inputs/UserName';
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

export default function Home() {
  return (
    <QuizBackground>
      <Head>
        <title>{(db.title)}</title>
        <meta property="og:title" content={(db.title)} key="title" />
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{(db.title)}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{(db.description)}</p>
            <InputUserName />
            <InputSubmit />
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
