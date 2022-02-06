import './atom-image.module.scss';
import { Image } from '@chakra-ui/react'

/* eslint-disable-next-line */
export interface AtomImageProps {
  src: string;
  alt: string;
}

export function AtomImage(props: AtomImageProps) {
  return (
    <Image
      w='100%'
      h='100%'
      objectFit='cover'
      src={props.src}
      alt={props.alt}
    />
  );
}

export default AtomImage;
