import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: #1B1B1F;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

export const Logo = styled.Image`
`;

export const MainText = styled.Text`
    font-weight: 600;
    font-size: 30px;
    line-height: 33px;
    text-align: center;
    color: #E1E1E6;
    padding-top: 46px;
`;

export const SubText = styled.Text`
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #A8A8B3;
    padding-top: 16px;
`;

export const Button = styled(RectButton)`
    width: 80px;
    height: 56px;
    background: #29292E;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`;

export const ButtonText = styled.Text`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
`;
