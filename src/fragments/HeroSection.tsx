import dayjs from 'dayjs';
import { BRIDES, EVENT_TIME } from '../constants/contents';

function HeroSection() {
  const title = 'Acara Pernikahan';
  const heading = `${BRIDES.husband.nickname} & ${BRIDES.wife.nickname}`;
  const date = dayjs(EVENT_TIME.covenant).format('DD MMMM YYYY');

  return (
    <section
      id="Hero"
      className="flex flex-col justify-between items-center min-h-screen py-2"
    >
      <img src="/img/flower-ornament.png" className="rotate-180 h-24" />

      <header className="text-center flex flex-col gap-6 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-md">{title}</h1>
          <img src="/img/hero-image.png" className="rounded-full w-64" />
          <h2 className="text-6xl font-cursive">{heading}</h2>
          <p className="text-lg font-mono">{date}</p>
        </div>
      </header>
      <img src="/img/flower-ornament.png" className="h-24" />
    </section>
  );
}

export default HeroSection;
