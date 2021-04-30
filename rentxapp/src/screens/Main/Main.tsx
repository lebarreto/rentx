import React from 'react';
import { useNavigation } from "@react-navigation/native";

import { Container, Logo, Welcome, WelcomeSub, ButtonDiv, LoginButton, ButtonText, SignUpButton, GoBack, GoBackText } from './styles';
import Union from '../../assets/union.png';

const Main: React.FC = () => {
    const navigation = useNavigation();

    return (
      <Container>
          <Logo source={Union}  />
          <Welcome>Seja Bem-vindo</Welcome>
          <WelcomeSub>O que você deseja fazer?</WelcomeSub>

          <ButtonDiv>
              <LoginButton onPress={() => navigation.navigate('Login')}>
                  <ButtonText>Login</ButtonText>
              </LoginButton>
              <SignUpButton onPress={() => navigation.navigate('SignUp')}>
                  <ButtonText>Cadastro</ButtonText>
              </SignUpButton>
          </ButtonDiv>

          <GoBack onPress={() => navigation.goBack()}>
              <GoBackText>Voltar</GoBackText>
          </GoBack>
      </Container>
    )
}

export default Main;