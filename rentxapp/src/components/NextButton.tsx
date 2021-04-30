import React from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const NextButton: React.FC = (props: any) => {
  return (
    <Button
        icon={<Icon name="chevron-right" size={20} color="#AEAEB3" />}
        title=""
        buttonStyle={{
            backgroundColor: '#E5E5E5'
          }}
        {...props}
    />
  );
};

export default NextButton;
