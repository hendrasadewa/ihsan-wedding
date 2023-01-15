import BrideSection from './fragments/BrideSection';
import CountdownSection from './fragments/CountdownSection';
import GuestbookSection from './fragments/GuestbookSection';
import HeroSection from './fragments/HeroSection';
import BaseLayout from './layout/BaseLayout';

function App() {
  return (
    <BaseLayout>
      <HeroSection />
      <BrideSection />
      <CountdownSection />
      <GuestbookSection />
    </BaseLayout>
  );
}

export default App;
