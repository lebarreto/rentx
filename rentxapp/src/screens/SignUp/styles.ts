import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === "ios",
    behavior: "padding",
  })`
    flex: 1;
    padding: 32px;
`;

export const SignUpText = styled.Text`
    font-weight: 600;
    font-size: 40px;
    line-height: 44px;
    color: #3D3D4D;
    width: 169px;
    padding-top: 160px;
`;

export const SignUpSub = styled.Text`
    font-size: 15px;
    line-height: 25px;
    color: #7A7A80;
    margin-top: 24px;
    padding-bottom: 110px 
`;

export const Info = styled.Text`
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    color: #3D3D4D;
    margin-bottom: 24px;
`;

export const InfoView = styled.View``;