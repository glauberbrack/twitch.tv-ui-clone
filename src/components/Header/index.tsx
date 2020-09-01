import React from 'react';

import colors from '../../styles/colors';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';
import { Materialcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <Materialcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        <Button>
          <MaterialconsCommunityIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        <Button>
          <Feather
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
