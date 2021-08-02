import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0;
    flex-direction: row;
    width: 100%;
`;

export const InputDiv = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 8px;
`;

export const InputImgDiv = styled(RectButton)`
    width: 55px;
    height: 56px;
    background: #F4F5F6;
    margin-right: 2px;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

export const InputField = styled.TextInput`
    background: #F4F5F6;
    width: 270px;
    height: 56px;
    padding-left: 24px;
    padding-right: 24px;
    color: #7A7A80;
    font-size: 15px;
    line-height: 18px;
`