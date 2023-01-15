import GoogleMapFrame from '../components/GoogleMapFrame';
import { EVENT_ADDRESS } from '../constants/contents';

function LocationSection() {
  return (
    <section className="flex flex-col items-center gap-4">
      <header className="flex flex-col gap-2 px-4 text-center">
        <h2 className="text-4xl text-center font-cursive">
          Lokasi Acara Pernikahan
        </h2>
        <p>{EVENT_ADDRESS.streetAddress}</p>
      </header>
      <GoogleMapFrame src={EVENT_ADDRESS.googleMapLink} />
    </section>
  );
}

export default LocationSection;
