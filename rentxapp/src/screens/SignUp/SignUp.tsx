import React, { useRef, useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useDispatch } from 'react-redux';

import { Container, SignUpSub, SignUpText, Info } from './styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { signUpRequest } from '../../store/auth/actions';

interface ISignUpParams { 
    password: string;
}

interface ISignUpInfoParams { 
    name: string;
    email: string;
}

const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const form1Ref = useRef<FormHandles>(null);
    const form2Ref = useRef<FormHandles>(null);

    const emailRef = useRef<TextInput>(null);
	const passwordRef = useRef<TextInput>(null);

    const [infoView, setInfoView] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSignUp = (data: ISignUpParams) => {
        const payload = {
            name: name,
            email: email,
            password: data.password,
            admin: false
        }
        
        dispatch(signUpRequest(payload));
        navigation.navigate('Success', { mainText: 'Conta criada!', subText: 'Agora é só fazer login e aproveitar.', navigateTo: 'Main' })
    };

    const handleInfo = (data: ISignUpInfoParams) => {
        setName(data.name)
        setEmail(data.email)
        form1Ref.current?.reset();
        setInfoView(false)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={20} color="#AEAEB3" />
                </TouchableOpacity>

                <SignUpText>Crie sua conta.</SignUpText>
                <SignUpSub>Faça seu cadastro de forma rápida e fácil.</SignUpSub>

                    {infoView ? (
                        <Form onSubmit={handleInfo} ref={form1Ref}>
                            <Info>1. Dados</Info>
                            <Input
                                name="name"
                                icon="user"
                                placeholder="Nome"
                                autoCorrect={false}
                                autoCapitalize="words"
                                returnKeyType="next"
                                onSubmitEditing={() => emailRef.current?.focus()}
                            />
                            <Input
                                name="email"
                                icon="mail"
                                ref={emailRef}
                                placeholder="E-mail"
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                onSubmitEditing={() => form1Ref.current?.submitForm()}
                            />
        
                            <Button onPress={() => form1Ref.current?.submitForm()}>
                                Próximo
                            </Button>
                        </Form>
                    ): (
                        <Form onSubmit={handleSignUp} ref={form2Ref}>
                            <Info>2. Senha</Info>
                            <Input
                                name="password"
                                icon="lock"
                                placeholder="Senha"
                                ref={passwordRef}
                                secureTextEntry
                                returnKeyType="next"
                                onSubmitEditing={() => passwordRef.current?.focus()}
                            />
                            <Input
                                name="password"
                                icon="lock"
                                placeholder="Repetir senha"
                                ref={passwordRef}
                                secureTextEntry
                                returnKeyType="send"
                                onSubmitEditing={() => form2Ref.current?.submitForm()}
                            />
        
                            <Button onPress={() => form2Ref.current?.submitForm()}>
                                Cadastrar
                            </Button>
                        </Form>
                    )}
            </Container>
        </SafeAreaView>
    );
}

export default SignUp;   