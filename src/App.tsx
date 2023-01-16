import { useRef, useState } from 'react';
import AudioPlayer from './components/AudioPlayer';
import BrideSection from './fragments/BrideSection';
import CountdownSection from './fragments/CountdownSection';
import GiftSection from './fragments/GiftSection';
import GuestbookSection from './fragments/GuestbookSection';
import HeroSection from './fragments/HeroSection';
import LocationSection from './fragments/LocationSection';
import useAudio from './hooks/useAudio';
import BaseLayout from './layout/BaseLayout';

function App() {
  const [isPlaying, musicToggle] = useAudio(
    '/music/Francisco_Alvear-Wedding_01.mp3'
  );

  const [isInvitationOpen, setShowControl] = useState<boolean>(false);

  const onOpenInvitation = () => {
    if (!isPlaying) {
      musicToggle();
    }

    setShowControl(true);

    setTimeout(() => {
      const scrollTarget = document.getElementById('bride');
  
      if (scrollTarget) {
        scrollTarget.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000)

  };

  return (
    <BaseLayout>
      {isInvitationOpen ? (
        <div className="sticky top-0 z-30">
          <AudioPlayer toggle={musicToggle} isPlaying={isPlaying} />
        </div>
      ) : null}
      <HeroSection onOpenInvitation={onOpenInvitation} />
      {isInvitationOpen ? (
        <>
          <BrideSection id="bride" />
          <CountdownSection />
          <LocationSection />
          <GiftSection />
          <GuestbookSection />
        </>
      ) : null}
    </BaseLayout>
  );
}

export default App;
