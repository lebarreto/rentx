import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br' 
moment.locale('pt-br')
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';

import { Container, ListText, ListView, ResultText, Wrapper, InputWrapper } from './styles';
import InputSearch from '../../components/InputSearch/Input';
import { getCarsRequest } from '../../store/cars/actions';
import api from '../../services/api';
import BoxCars from '../../components/BoxCars/BoxCars';
import { ICarsInfo } from '../../store/cars/types';
import { ApplicationState } from '../../store/rootReducer';
import Axios from 'axios';

const CarsList: React.FC = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { auth } = useSelector((state: ApplicationState) => state);

    const formRef = useRef<FormHandles>(null);

    const [cars, setCars] = useState<ICarsInfo[]>([]);

    const getCars = async () => {
        dispatch(getCarsRequest())
    }
    const handleSearchCarName = () => {
        console.log('OIE')
        getCars();
    }

    useEffect(() => {
        getCars();
    }, [])

    return (
        <Container>
            <ListView>
                    <ListText>Listagem</ListText>
                    <ResultText>12 carros</ResultText>
            </ListView>

            <InputWrapper>
                <Form onSubmit={handleSearchCarName} ref={formRef}>
                    <InputSearch
                        name="car_name"
                        icon="search"
                        placeholder="Qual carro você procura?"
                        autoCorrect={false}
                        autoCapitalize="none"
                        returnKeyType="send"
                        onPress={handleSearchCarName}
                        onSubmitEditing={() => formRef.current?.submitForm()}
                    />
                </Form>
            </InputWrapper>

            <Wrapper>
                {cars && cars.map(car => (
                    <BoxCars
                        key={car.id}
                        brand={car.brand}
                        name={car.name}
                        dailyPrice={car.daily_value}
                        image={car.image}
                    />
                ))}
            </Wrapper>
           
        </Container>
    );
}

export default CarsList;   