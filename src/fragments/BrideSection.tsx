import { HTMLAttributes } from 'react';
import BrideInfo from '../components/BrideInfo';
import { BRIDES } from '../constants/contents';

interface Props extends HTMLAttributes<HTMLElement> {}

function BrideSection({ ...rest }: Props) {
  const { husband, wife } = BRIDES;
  return (
    <section
      className="min-h-screen flex flex-col items-center gap-6 p-4"
      {...rest}
    >
      <header className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2 shadow rounded p-4 bg-white">
          <p>
            وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ
          </p>
          <p className="text-sm">
            “Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu
            mengingat kebesaran Allah.”{' '}
          </p>
          <p className="font-cursive">QS Az-Zariyat:49</p>
        </div>
        <h3 className="text-4xl font-cursive">Pengantin</h3>
      </header>

      <BrideInfo
        avatarSrc={husband.avatarSrc}
        name={husband.name}
        parent={husband.description}
      />
      <div className="divider font-cursive text-xl">&amp;</div>
      <BrideInfo
        avatarSrc={wife.avatarSrc}
        name={wife.name}
        parent={wife.description}
      />
    </section>
  );
}

export default BrideSection;
