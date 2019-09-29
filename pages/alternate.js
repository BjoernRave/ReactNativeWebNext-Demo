import React from "react";
import styled from "styled-components/native";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Title>React Native with 💅 Styled Components</Title>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: palevioletred;
`;
