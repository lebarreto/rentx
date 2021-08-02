import React, { useState } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import 'moment/locale/pt-br' 
moment.locale('pt-br');

import Dates from '../../components/Dates/Dates';
import { Container, ResultsView, ResultsDateView, ResultsText, Header, Total, CarContainer, CarHeader, CarTitle, CarName, CarTotalValue, CarImage } from './styles';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/rootReducer';
import { ICarsInfo } from '../../store/cars/types';
import { useNavigation, useRoute } from '@react-navigation/native';

const ResultsList: React.FC = () => {
    const routes = useRoute();
    const navigation = useNavigation();

    const { data } = routes.params;
    const {selectedStartDate, selectedEndDate} = data;
    const { cars } = useSelector((state: ApplicationState) => state);
    const [results, setResults] = useState<ICarsInfo[]>(cars.carsInfo);
    const startDate = selectedStartDate;

    return (
        <Container>
            <ResultsDateView>
                <Dates from={moment(selectedStartDate).format('DD MMM YYYY')} to={moment(selectedEndDate).format('DD MMM YYYY')} />
            </ResultsDateView>
            <ResultsView>
                <Header>
                    <ResultsText>Resultados</ResultsText>
                    <Total>3 carros</Total>
                    <TouchableOpacity onPress={() => {}}>
                        <Icon name="filter" size={20} color="#47474D" />
                    </TouchableOpacity>
                </Header>
                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    {results.map(car => (
                        <CarContainer key={car.id} onPress={() => navigation.navigate('Details', {
                             data: {
                                car, startDate, selectedEndDate
                            },
                        })}>
                            <CarHeader>
                                <CarTitle>{car.brand}</CarTitle>
                                <CarTitle>Ao dia</CarTitle>
                            </CarHeader>
                            <CarHeader>
                                <CarName>{car.name}</CarName>
                                <CarTotalValue>R$ {car.daily_value}</CarTotalValue>
                            </CarHeader>
                            <CarImage source={{ uri: car.image }}  />
                        </CarContainer>
                    ))}
                </ScrollView>
            </ResultsView>
        </Container>
    )
}

export default ResultsList;