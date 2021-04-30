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

export const InputImgDiv = styled.View`
    width: 55px;
    height: 56px;
    background: #DEDEE3;
    margin-right: 2px;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

export const InputField = styled.TextInput`
    background: #DEDEE3;
    width: 270px;
    height: 56px;
    padding-left: 24px;
    padding-right: 24px;
    color: #7A7A80;
    font-size: 15px;
    line-height: 18px;
`