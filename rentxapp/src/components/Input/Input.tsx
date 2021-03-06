import React, {
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
  } from 'react';
  import { TextInputProps } from 'react-native';
  import { useField } from '@unform/core';
  import Icon from 'react-native-vector-icons/Feather';

  import { Container, InputDiv, InputImgDiv, InputField } from './styles';
  
  interface InputProps extends TextInputProps {
    name: string;
    icon?: string;
  }
  
  interface InputValueReference {
    value: string;
  }
  
  interface InputRef {
    focus(): void;
  }
  
  const Input: React.RefForwardingComponent<InputRef, InputProps> = (
    { name, icon, ...rest },
    ref,
  ) => {
    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
    const inputElementRef = useRef<any>(null);
  
    useImperativeHandle(ref, () => ({
      focus() {
        inputElementRef.current.focus();
      },
    }));
  
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputValueRef.current,
        path: 'value',
        setValue(ref: any, value: string) {
          inputValueRef.current.value = value;
          inputElementRef.current.setNativeProps({
            text: value,
          });
        },
        clearValue() {
          inputValueRef.current.value = '';
          inputElementRef.current.clear();
        },
      });
    }, [fieldName, registerField]);
  
    return (
      <Container>
        {icon && (
          <InputDiv>
            <InputImgDiv>
              <Icon name={icon} size={25} color="#7A7A80" />
            </InputImgDiv>
          </InputDiv>
        )}
        <InputField
          ref={inputElementRef}
          keyboardAppearance="dark"
          placeholderTextColor="#7A7A80"
          defaultValue={defaultValue}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          {...rest} 
        />
      </Container>
    );
  };
  
  export default forwardRef(Input);