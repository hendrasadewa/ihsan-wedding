import BrideInfo from '../components/BrideInfo';
import { BRIDES } from '../constants/contents';

function BrideSection() {
  const { husband, wife } = BRIDES;
  return (
    <section className="min-h-screen flex flex-col items-center gap-6 p-4">
      <header>
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
