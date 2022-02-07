import './atom-header.module.scss';
import { Heading } from "@chakra-ui/react"

/* eslint-disable-next-line */
export interface AtomHeaderProps {
  title: string
}

export function AtomHeader(props: AtomHeaderProps) {
  return (
    <Heading
      as="h3"
      size='sm'
    >{props.title}</Heading>
  );
}

export default AtomHeader;
