import React, { useRef, useCallback } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useDispatch } from 'react-redux';

import { Container, LoginSub, LoginText } from './styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { loginRequest } from '../../store/auth/actions';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const formRef = useRef<FormHandles>(null);
	const passwordRef = useRef<TextInput>(null);
    
    const handleSignIn = useCallback((data: object) => {
        dispatch(loginRequest(data));
        navigation.navigate('Home')
      }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={20} color="#AEAEB3" />
                </TouchableOpacity>

                <LoginText>Estamos quase lá.</LoginText>
                <LoginSub>Faça seu login para começar uma experiência incrível.</LoginSub>

                <Form onSubmit={handleSignIn} ref={formRef}>
                    <Input
                        name="email"
                        icon="mail"
                        placeholder="E-mail"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current?.focus()}
                    />
                    <Input
                        name="password"
                        icon="lock"
                        placeholder="Senha"
                        secureTextEntry
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={() => formRef.current?.submitForm()}
                    />

                    <Button onPress={() => formRef.current?.submitForm()}>
                        Login
                    </Button>
                </Form>
            </Container>
        </SafeAreaView>
    );
}

export default Login;   