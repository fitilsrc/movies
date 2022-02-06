import './atom-headerh1.module.scss';

/* eslint-disable-next-line */
export interface AtomHeaderh1Props {
  text: string
}

export function AtomHeaderH1(props: AtomHeaderh1Props) {
  return (
    <>
      <h1>{ props.text }</h1>
    </>
  );
}

export default AtomHeaderH1;
