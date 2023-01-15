import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

function SectionLayout({ children, className, ...rest }: Props) {
  const classNames = className ? [...className.split(' ')].join(' ') : '';
  return (
    <section {...rest} className={classNames}>
      {children}
    </section>
  );
}

export default SectionLayout;
