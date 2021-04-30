import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 327px;
    height: 56px;
    background: #DC1637;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
`;

export const ButtonText = styled.Text`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
`;