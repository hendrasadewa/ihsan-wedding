import dayjs from 'dayjs';
import Countdown from '../components/Countdown';
import { EVENT_TIME } from '../constants/contents';

function CountdownSection() {
  const headingCovenant = 'Menuju akad nikah';
  const headingReception = 'Menuju Resepsi';
  const covenantDate = dayjs(EVENT_TIME.covenant).format('DD MMMM YYYY | HH:mm');
  const receptionDate = dayjs(EVENT_TIME.reception).format('DD MMMM YYYY | HH:mm');
  const receptionDateEnd = dayjs(EVENT_TIME.receptionEnd).format('HH:mm');
  const receptionCopy = `${receptionDate} - ${receptionDateEnd}`
  return (
    <section
      id="Countdown"
      className="flex flex-col gap-12 justify-center items-center min-h-screen max-h-screen"
      style={{
        background: `url('/img/floral-potrait.png')`,
      }}
    >
      <div className="flex flex-col gap-4 bg-white bg-opacity-50 backdrop-blur p-4 rounded-lg">
        <Countdown targetDate={EVENT_TIME.covenant} />
        <div className="text-center flex flex-col gap-2">
          <p className="text-4xl font-cursive">{headingCovenant}</p>
          <p>{covenantDate}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white bg-opacity-50 backdrop-blur p-4 rounded-lg">
        <Countdown targetDate={EVENT_TIME.reception} />
        <div className="text-center flex flex-col gap-2">
          <p className="text-4xl font-cursive">{headingReception}</p>
          <p>{receptionCopy}</p>
        </div>
      </div>
    </section>
  );
}

export default CountdownSection;
