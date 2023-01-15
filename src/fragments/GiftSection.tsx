import { useEffect, useState } from 'react';
import AccountCard from '../components/AccountCard';
import { BANK } from '../constants/contents';

function GiftSection() {
  const [isToastVisible, setToastVisible] = useState<boolean>(false);
  const [timeout, storeTimeout] = useState<number>();

  const handleCardClick = (copiedText: string) => {
    navigator.clipboard.writeText(copiedText);
    setToastVisible(true);
  };

  useEffect(() => {
    if (isToastVisible && !timeout) {
      const timeoutId = setTimeout(() => {
        setToastVisible(false);
        clearTimeout(timeout);
      }, 3000);

      storeTimeout(timeoutId);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isToastVisible, timeout]);

  return (
    <section className="p-4 flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-center text-4xl font-cursive">
          Hadiah Kepada Pengantin
        </h2>
      </header>
      <AccountCard
        accountNumber={BANK.accountNumber}
        bankLogoSrc="/img/mandiri-logo.svg"
        owner={BANK.owner}
        onClick={handleCardClick}
      />
      <p className="text-center text-sm text-slate-400">
        Tap pada kartu untuk menyalin nomor rekening
      </p>

      <p>
        Anda dapat mengirim hadiah kepada pengantin dengan cara transfer tunai
        ke nomor rekening yang tertera pada kartu.
      </p>
      {isToastVisible ? (
        <div className="toast toast-end" onClick={() => setToastVisible(false)}>
          <div className="alert bg-neutral">
            <div>
              <span className="text-sm text-white">
                Momor rekening berhasil disalin
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default GiftSection;
