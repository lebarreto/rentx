import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import 'moment/locale/pt-br' 
moment.locale('pt-br');

import { CarDetails, CarImage, CarInfo, CarName, CarTitle, CarTotalValue, Container, DetailsView, Header, CarText, Wrapper, DateView, Title, Value, TotalValue, Total } from './styles';
import api from '../../services/api';
import Dates from '../../components/Dates/Dates';
import Button from '../../components/Button/Button';
import { ScrollView } from 'react-native';

interface IDetails {
    name: string;
    description: string;
}

const token = AsyncStorage.getItem('token');

const Details: React.FC = () => {
    const routes = useRoute();
    const navigation = useNavigation();
    
    const { data } = routes.params;
    const { car, startDate, selectedEndDate } = data;

    const [days, setDays] = useState<number>(0);

    const [speedometer, setSpeedometer] = useState<IDetails>({
        name: '',
        description: ''
    });
    const [fuel, setFuel] = useState<IDetails>({
        name: '',
        description: ''
    });
    const [gear, setGear] = useState<IDetails>({
        name: '',
        description: ''
    });
    const [people, setPeople] = useState<IDetails>({
        name: '',
        description: ''
    });

    const loadDetails = async () => {
        const response = await api.get(`details/${car.id}`, {
            headers: { Authorization: `Bearer ${token._W}`}
        });
        if (response.data) {
            const findSpeedometer = response.data.filter((res: IDetails) => res.name === 'Velocimetro');
            if (findSpeedometer.length) {
                setSpeedometer(findSpeedometer[0]);
            }
            const findFuel = response.data.filter((res: IDetails) => res.name === 'Fuel');
            if (findFuel.length) {
                setFuel(findFuel[0]);
            }
            const findGear = response.data.filter((res: IDetails) => res.name === 'Câmbio');
            if (findGear.length) {
                setGear(findGear[0]);
            }
            const findPeople = response.data.filter((res: IDetails) => res.name === 'Pessoas');
            if (findPeople.length) {
                setPeople(findPeople[0]);
            }
        }
    }

    const calculateTotalValue = () => car.daily_value * days;

    const getDaily = () => {
        const daily = moment(selectedEndDate).diff(moment(startDate), 'days');
        setDays(daily)
    }

    useEffect(() => {
        loadDetails()
        getDaily();
    }, [])

    return (
        <ScrollView>
            <Container>
                <Header>
                    <Icon name="chevron-left" size={24} color="#AEAEB3" onPress={() => navigation.goBack()} />
                </Header>
                <DetailsView>
                    <CarImage source={{uri: car.image }} />
                    <CarInfo>
                        <CarTitle>{car.brand}</CarTitle>
                        <CarTitle>Ao dia</CarTitle>
                    </CarInfo>
                    <CarInfo>
                        <CarName>{car.name}</CarName>
                        <CarTotalValue>R$ {car.daily_value}</CarTotalValue>
                    </CarInfo>
                    <CarInfo>
                        <CarDetails>
                            <IconIonicons name="speedometer-outline" size={28} color="#47474D" />
                            <CarText>{speedometer.description}</CarText>
                        </CarDetails>
                        <CarDetails>
                            <IconMaterialCom name="arrow-collapse-up" size={28} color="#47474D" />
                            <CarText>3.2s</CarText>
                        </CarDetails>
                        <CarDetails>
                            <IconMaterialCom name="steering" size={28} color="#47474D" />
                            <CarText>800 HP</CarText>
                        </CarDetails>
                    </CarInfo>
                    <CarInfo>
                        <CarDetails>
                            <IconMaterialCom name="fuel" size={28} color="#47474D" />
                            <CarText>{fuel.description}</CarText>
                        </CarDetails>
                        <CarDetails>
                            <IconEvilIcons name="gear" size={28} color="#47474D" />
                            <CarText>{gear.description}</CarText>
                        </CarDetails>
                        <CarDetails>
                            <IconIonicons name="person-outline" size={28} color="#47474D" />
                            <CarText>{people.description} pessoas</CarText>
                        </CarDetails>
                    </CarInfo>
                    <CarInfo>
                        <Wrapper>
                            <DateView>
                                <Title>De</Title>
                                <Value>{moment(startDate).format('DD MMM YYYY') !== 'Data inválida' ? moment(startDate).format('DD MMM YYYY') : '____________'}</Value>
                            </DateView>

                            <DateView>
                                <Icon name="arrow-right" size={20} color="#7A7A80" style={{width: '100%'}} />
                            </DateView>

                            <DateView>
                                <Title>Até</Title>
                                <Value>{moment(selectedEndDate).format('DD MMM YYYY') !== 'Data inválida' ? moment(selectedEndDate).format('DD MMM YYYY') : '____________'}</Value>
                            </DateView>
                        </Wrapper>
                    </CarInfo>
                    <CarInfo>
                        <Wrapper>
                            <DateView>
                                <Title>Total</Title>
                                <TotalValue>R$ {car.daily_value} x {days} diárias</TotalValue>
                            </DateView>
                            <DateView>
                                <Total>R$ {calculateTotalValue()}</Total>
                            </DateView>
                        </Wrapper>
                    </CarInfo>
                    <CarInfo>
                        <Button onPress={() => {}}>
                            Alugar agora
                        </Button>
                    </CarInfo>
                </DetailsView>
            </Container>
        </ScrollView>
    )
}

export default Details;