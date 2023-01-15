import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function BaseLayout({ children }: Props) {
  return (
    <main className='bg-gradient-to-l from-slate-50 to-slate-100 relative'>
      {children}
    </main>
  )
}

export default BaseLayout;