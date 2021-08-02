import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background: #F4F5F6;
`;

export const Box = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Info = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Brand = styled.Text`
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    text-transform: uppercase;
    color: #AEAEB3;
`;

export const Logo = styled.Image`
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
