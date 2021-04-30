import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, DateView, Title, Wrapper, Value } from './styles';

interface DatesProps {
  from: string;
  to: string
}

const Dates: React.FC<DatesProps> = ({ from, to }) => (
  <Container>
      <Wrapper>
        <DateView>
            <Title>De</Title>
            <Value>{from !== 'Data inválida' ? from : '____________'}</Value>
        </DateView>

        <DateView>
            <Icon name="arrow-right" size={20} color="#7A7A80" style={{width: '100%'}} />
        </DateView>

        <DateView>
            <Title>Até</Title>
            <Value>{to !== 'Data inválida' ? to : '____________'}</Value>
        </DateView>
      </Wrapper>
      
  </Container>
);

export default Dates;