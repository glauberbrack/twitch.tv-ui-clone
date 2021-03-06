import React from 'react';
import { View, FlatList } from 'react-native';

import { Wrapper, Container, Main } from './styles';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },

      {
        key: 'FOLLOWED CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true
      },
      { key: 'C1', render: () => <View/> },

      
      {
        key: 'LIVE CHANNELS',
        render: () =>  <Title>Live Channels</Title>,
        isTitle: true
      },
      { key: 'C2', render: () => <View/> },

      
      {
        key: 'CONTINUE WATCHING',
        render: () =>  <Title>Continue Watching</Title>,
        isTitle: true
      },
      { key: 'C3', render: () => <View/> },

      {
        key: 'OFFLINE CHANNELS',
        render: () =>  <Title>Offline Channels</Title>,
        isTitle: true
      },
      { key: 'C4', render: () => <View/> },
    ];

    const indexes: number[] = [];

    items.forEach(( item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes
    }
  },[])

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indexes}

            onRefresh={() => {}}
            refreshing={true}

          />
        </Main>
      </Container>
    </Wrapper>
    
  );
};

export default Following;
