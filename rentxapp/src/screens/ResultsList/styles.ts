import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === "ios",
    behavior: "padding",
  })`
    flex: 1;
    background: #FFFFFF;
`;

export const ResultsDateView = styled.View`
    height: 119px;
    padding: 25px;
    background: #1B1B1F;
`;

export const ResultsView = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 24px;
`;

export const ResultsText = styled.Text`
    font-weight: 600;
    font-size: 25px;
    line-height: 27px;
    color: #47474D;
`;

export const Total = styled.Text`
    font-size: 13px;
    line-height: 16px;
    text-align: right;
    color: #AEAEB3;
    margin-left: 93px;
    margin-right: 26px;
`;

export const CarContainer = styled.TouchableOpacity`
    background: #F4F5F6;
    width: 343px;
    height: 240px;
    margin-bottom: 16px;
`;

export const CarHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 4px;
`;

export const CarTitle = styled.Text`
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    text-transform: uppercase;
    color: #AEAEB3;
    padding-top: 24px;
`;

export const CarName = styled.Text`
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #47474D;
`;

export const CarTotalValue = styled.Text`
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #DC1637;
`;

export const CarImage = styled.Image`
    width: 252px;
    height: 119px;
    margin-left: 46px;
    margin-right: 46px;
    margin-top: 14px;
`;