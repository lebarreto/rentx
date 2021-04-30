import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import 'moment/locale/pt-br' 
moment.locale('pt-br')

import { Container, HomeText, DatePickerView, HomeView, CalendarView } from './styles';
import Button from '../../components/Button/Button';
import Dates from '../../components/Dates/Dates';
import { getCarsAvailabilityRequest } from '../../store/cars/actions';
import { signOut } from '../../store/auth/actions';

const Home: React.FC = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const minDate = new Date(); 
    const maxDate = new Date(2021, 12, 31);

    const [selectedStartDate,  setSelectedStartDate] = useState<Date | null>(null);
    const [selectedEndDate,  setSelectedEndDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date, type: string) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date)
        } else {
            setSelectedStartDate(date)
            setSelectedEndDate(null)
        }
    }

    const handleConfirmDates = () => {
        const startDate = moment(selectedStartDate).format('YYYY-MM-DD').concat(' 00:00:00');
        const endDate = moment(selectedEndDate).format('YYYY-MM-DD').concat(' 23:59:59');

        const data = {
            start_date: startDate,
            end_date: endDate,
        }
        
        dispatch(getCarsAvailabilityRequest(data))
    }

    return (
        <Container>
           <HomeView>
                <HomeText>Escolha a data e encontre um carro.</HomeText>
                <Dates from={moment(selectedStartDate).format('DD MMM YYYY')} to={moment(selectedEndDate).format('DD MMM YYYY')} />
           </HomeView>

            <DatePickerView>
                <CalendarView>
                    <CalendarPicker
                        startFromMonday={true}
                        allowRangeSelection={true}
                        minDate={minDate}
                        maxDate={maxDate}
                        weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
                        months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                        nextTitle=">"
                        nextTitleStyle={{color: '#7A7A80'}}
                        previousTitle="<"
                        previousTitleStyle={{color: '#7A7A80'}}
                        todayBackgroundColor="#FDEDEF"
                        selectedDayColor="#DC1637"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={handleDateChange}
                        textStyle={{color: '#47474D'}}
                    />

                    <Button onPress={() => dispatch(signOut())}>
                        Confirmar
                    </Button>
                </CalendarView>
            </DatePickerView>
           
        </Container>
    );
}

export default Home;   