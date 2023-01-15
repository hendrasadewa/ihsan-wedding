import { useRef, useState } from 'react';
import AudioPlayer from './components/AudioPlayer';
import BrideSection from './fragments/BrideSection';
import CountdownSection from './fragments/CountdownSection';
import GuestbookSection from './fragments/GuestbookSection';
import HeroSection from './fragments/HeroSection';
import useAudio from './hooks/useAudio';
import BaseLayout from './layout/BaseLayout';

function App() {
  const [isPlaying, musicToggle] = useAudio(
    '/music/Francisco_Alvear-Wedding_01.mp3'
  );
  
  const [showControl, setShowControl] = useState<boolean>(false);

  const onOpenInvitation = () => {
    if (!isPlaying) {
      musicToggle();
    }
    const scrollTarget = document.getElementById('bride');

    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth' });
    }
    setShowControl(true);
  };

  return (
    <BaseLayout>
      <HeroSection onOpenInvitation={onOpenInvitation} />
      <BrideSection id="bride" />
      <CountdownSection />
      <GuestbookSection />
      {showControl ? (
        <div className="absolute top-0">
          <AudioPlayer toggle={musicToggle} isPlaying={isPlaying} />
        </div>
      ) : null}
    </BaseLayout>
  );
}

export default App;
