import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
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
    color: #FDEDEF;
    opacity: 0.24;
    padding-top: 9px;
    padding-bottom: 25px;
`;