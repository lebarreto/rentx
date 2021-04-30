import React from 'react';

import { Container, Logo, MainText, SubText, Button, ButtonText } from './styles';
import UnionImage from '../../assets/union-white.png';
import Done from '../../assets/Done.png';
import { useNavigation } from '@react-navigation/core';


interface ISuccessProps {
  route: {
    params: {
      mainText: string;
      subText: string;
      navigateTo: string;
    }
  }
}

const Success: React.FC = (props: ISuccessProps) => {
    const { route } = props;
    const navigation = useNavigation();

    return (
        <Container>
          <Logo source={UnionImage}  />
          <Logo source={Done}  />

          <MainText>{route.params.mainText}</MainText>
          <SubText>{route.params.subText}</SubText>

          <Button onPress={() => navigation.navigate(route.params.navigateTo)}>
            <ButtonText>Ok</ButtonText>
          </Button>
        </Container>
      )
};

export default Success;