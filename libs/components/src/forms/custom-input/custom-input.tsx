import { chakra, Input } from '@chakra-ui/react';
import React, { FC, InputHTMLAttributes } from 'react';
import './custom-input.module.scss';

/* eslint-disable-next-line */
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
}

export const CustomInput:FC<CustomInputProps> = ({ label, name, type, placeholder, ...rest }) => {
  let { onChange, value } = rest
  return (
    <>
      <chakra.label
        htmlFor={name}
        display={'flex'}
        flexDirection={'column'}
        w={'100%'}
        gap={'1rem'}
      >
        <span>{ label }</span>
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </chakra.label>
    </>
  );
}

export default CustomInput;
