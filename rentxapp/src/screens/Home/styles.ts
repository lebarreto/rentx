import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === "ios",
    behavior: "padding",
  })`
    flex: 1;
    background: #1B1B1F;
`;

export const HomeView = styled.View`
    height: 292px;
    padding: 25px;
`;

export const HomeText = styled.Text`
    font-weight: 600;
    font-size: 30px;
    line-height: 34px;
    color: #FFFFFF;
    width: 218px;
    padding-top: 80px;
`;

export const LoginSub = styled.Text`
    font-size: 15px;
    line-height: 25px;
    color: #7A7A80;
    margin-top: 24px;
    padding-bottom: 110px;
`;

export const DatePickerView = styled.View`
    background: #FFFFFF;
    width: 100%;
    height: 100%;
    padding: 24px;
`;

export const CalendarView = styled.View`
    max-width: 335px;
    max-height: 332px;
    margin-left: 24px;
    margin-right: 16px;
    padding-top: 40px;
`;

export const ResultsDateView = styled.View`
    height: 119px;
    padding: 25px;
`;

export const ResultsView = styled.View`
    background: #FFFFFF;
    width: 100%;
    height: 100%;
    padding: 24px;
`;