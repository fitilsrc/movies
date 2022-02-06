import './atom-image.module.scss';
import { Image } from '@chakra-ui/react'

/* eslint-disable-next-line */
export interface AtomImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

export function AtomImage(props: AtomImageProps) {
  return (
    <Image
      w={props.width}
      h={props.height}
      objectFit='cover'
      src={props.src}
      alt={props.alt}
    />
  );
}

export default AtomImage;
