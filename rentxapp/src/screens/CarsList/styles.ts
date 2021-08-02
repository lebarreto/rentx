import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === "ios",
    behavior: "padding",
  })`
    flex: 1;
    background: #1B1B1F;
`;

export const ListView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 62px;
    padding-left: 25px;
    padding-right: 25px;
`;

export const ListText = styled.Text`
    font-weight: 600;
    font-size: 30px;
    line-height: 34px;
    color: #FFFFFF;
    width: 218px;
`;

export const ResultText = styled.Text`
    font-size: 13px;
    line-height: 16px;
    text-align: right;
    color: #7A7A80;
`;

export const InputWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-left: 25px;
    padding-right: 25px;
`;

export const Wrapper = styled.View`
    background: #FFFFFF;
    width: 100%;
    height: 100%;
    margin-top: 20px;
`;

