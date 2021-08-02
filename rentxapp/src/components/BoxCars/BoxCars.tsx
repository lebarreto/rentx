import React from 'react';

import { Container, Box, Info, Brand } from './styles';
import { useNavigation } from '@react-navigation/core';


interface ICarsProps {
  brand: string;
  name: string;
  dailyPrice: number;
  image: string;
}

const BoxCars: React.FC<ICarsProps> = (props: ICarsProps) => {
    const { brand, name, dailyPrice, image } = props;
    const navigation = useNavigation();

    return (
        <Container>
          <Box>
            <Info>
              <Brand>{brand}</Brand>
            </Info>

          </Box>
        </Container>
      )
};

export default BoxCars;