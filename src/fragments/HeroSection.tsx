import dayjs from 'dayjs';
import { BRIDES, EVENT_TIME } from '../constants/contents';

interface Props {
  onOpenInvitation: () => void;
}

function HeroSection({ onOpenInvitation }: Props) {
  const title = 'Undangan Acara Pernikahan';
  const heading = `${BRIDES.husband.nickname} & ${BRIDES.wife.nickname}`;
  const date = dayjs(EVENT_TIME.covenant).format('DD MMMM YYYY');

  return (
    <section
      id="Hero"
      className="flex flex-col justify-between items-center min-h-screen py-2"
    >
      <img src="/img/flower-ornament.png" className="rotate-180 h-20" />

      <div className="text-center flex flex-col gap-6 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src="/img/hero-image.png" className="rounded-full w-64" />
          <p className="text-md">{title}</p>
          <h2 className="text-6xl font-cursive">{heading}</h2>
          <div className='flex flex-col gap-4'>
            <p className="text-lg font-mono">{date}</p>
            <button onClick={onOpenInvitation} className="animate-bounce btn btn-outline btn-sm">
              Buka undangan
            </button>
          </div>
        </div>
      </div>
      <img src="/img/flower-ornament.png" className="h-20" />
    </section>
  );
}

export default HeroSection;
