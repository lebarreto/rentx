import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";

import CalendarImg from '../assets/calendar.png';
import CarImg from '../assets/car.png';
import NextButton from './NextButton';

// import { Container } from './styles';

const OnboardingScreen: React.FC = () => {
    const navigation = useNavigation();

  return (
    <Onboarding
        showDone={true}
        onDone={() => navigation.navigate('Main')}
        NextButtonComponent={NextButton}
        showSkip={false}
        bottomBarColor="#E5E5E5"
        pages={[
        {
            title: 'Primeiro, escolha a data!',
            subtitle:
            'Você é quem define um período, e nós mostraremos os carros disponíveis.',
            backgroundColor: '#E5E5E5',
            image: <Image source={CalendarImg} />,
        },
        {
            title: 'Depois, escolha o carro',
            subtitle:
            'Vários modelos para você dirigir seguro, com conforto e segurança.',
            backgroundColor: '#E5E5E5',
            image: <Image source={CarImg} />,
        },
        ]}
    />
  )
}

export default OnboardingScreen;