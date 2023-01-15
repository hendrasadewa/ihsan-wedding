import ReactCountdown from 'react-countdown';

import CountdownItem from './CountdownItem';

interface Props {
  targetDate: Date;
}

function Countdown({ targetDate }: Props) {
  return (
    <ReactCountdown
      date={targetDate}
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <CountdownItem label="hari" value={days} />
            <CountdownItem label="jam" value={hours} />
            <CountdownItem label="menit" value={minutes} />
            <CountdownItem label="detik" value={seconds} />
          </div>
        );
      }}
    />
  );
}

export default Countdown;
