import { CSSProperties } from 'react';

interface Props {
  label: string;
  value: number;
  disabled?: boolean;
}

function CountdownItem({ label, value }: Props) {
  const style = { '--value': value } as CSSProperties;

  return (
    <div className="flex flex-col">
      <span className="countdown font-cursive text-5xl">
        <span style={style}></span>
      </span>
      <span>{label}</span>
    </div>
  );
}

export default CountdownItem;
