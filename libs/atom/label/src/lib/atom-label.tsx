import './atom-label.module.scss';
import { Text } from '@chakra-ui/react'

/* eslint-disable-next-line */
export interface AtomLabelProps {
  label: string
}

export function AtomLabel(props: AtomLabelProps) {
  return (
    <Text color={ 'gray.500' }>{ props.label }</Text>
  );
}

export default AtomLabel;
