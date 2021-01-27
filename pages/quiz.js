import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { FiArrowLeft } from "react-icons/fi";

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
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

const IconArrow = styled.div`
    color:${({ theme }) => {
        return theme.colors.textPrimary;
    }};
    margin-top:20px;
    margin-left:20px;
    font-size:30px;
    cursor: pointer;
`;

export default function Quiz() {
    const router = useRouter();
    return (
        <QuizBackground>
            <IconArrow>
                <FiArrowLeft onClick={() => router.push('/')} />
            </IconArrow>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1>Olá, {router.query.name}!</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p>Em construção...</p>
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/viniciusanchieta" />
        </QuizBackground>
    );
}