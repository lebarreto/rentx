import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === "ios",
    behavior: "padding",
  })`
    flex: 1;
    background: #FFF;
`;

export const Header = styled.View`
    flex-direction: row;
    padding-top: 62px;
    padding-left: 32px;
`;

export const DetailsView = styled.View`
    flex-direction: column;
    justify-content: center;
    padding: 24px;
`;

export const CarImage = styled.Image`
    width: 280px;
    height: 132px;
    margin-left: 46px;
    margin-right: 46px;
    margin-top: 14px;
`;

export const CarInfo = styled.View`
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
    padding-bottom: 24px;
`;

export const CarTotalValue = styled.Text`
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #DC1637;
    padding-bottom: 24px;
`;

export const CarDetails = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F4F5F6;
    height: 92px;
    width: 109px;
    margin-top: 8px;
`;

export const CarText = styled.Text`
    font-weight: 500;
    font-size: 13px;
    text-align: center;
    color: #7A7A80;
    margin-top: 14px;
`;

export const ResultsDateView = styled.View`
    height: 119px;
    padding: 25px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 48px;
`;

export const DateView = styled.View`
    flex-direction: column;
    justify-content: center;
    padding-left: 42px;
`;

export const Title = styled.Text`
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    text-transform: uppercase;
    color: #7A7A80;
    text-align: left;
`;

export const Value = styled.Text`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #DC1637;
    padding-top: 9px;
    padding-bottom: 25px;
`;

export const TotalValue = styled.Text`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #47474D;
    padding-top: 9px;
    padding-bottom: 25px;
`;

export const Total = styled.Text`
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
    color: #3D3D4D;
    padding-top: 9px;
    padding-bottom: 25px;
`;