import React from 'react';
import { Text } from 'react-native';

import { Wrapper, Container, Main } from './styles';
import Header from '../../components/Header';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  React.useMemo(() => {

  },[])
  return (
    <Wrapper>
      <Container>
        <Header />

        <Main />
      </Container>
    </Wrapper>
    
  );
};

export default Following;
