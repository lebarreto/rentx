import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === "ios",
    behavior: "padding",
  })`
    flex: 1;
    background-color: #1B1B1F;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

export const Logo = styled.Image`
`;

export const Welcome = styled.Text`
    font-weight: 600;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    color: #F4F5F6;
    padding-top: 140px;
`;

export const WelcomeSub = styled.Text`
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #DEDEE3;
    margin-top: 16px;
`;

export const ButtonDiv = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 177px;
`;

export const LoginButton = styled(RectButton)`
    background: #DC1637;
    width: 156px;
    height: 56px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
`

export const SignUpButton = styled(RectButton)`
    background: #29292E;
    width: 156px;
    height: 56px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
`

export const ButtonText = styled.Text`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #E1E1E6;
`;

export const GoBack = styled.TouchableOpacity`
    border: 0;
    margin-top: 43px;
`;

export const GoBackText = styled.Text`
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    text-align: center;
    color: #7A7A80;
`;