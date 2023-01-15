import { useState } from 'react';
import GuestbookForm from '../components/GuestbookForm';
import GuestbookList from '../components/GuestbookList';
import { AttendanceStatusEnum } from '../constants/enums';
import { saveGuestbook } from '../supabase/guestbookModel';

function GuestbookSection() {
  const [isNeedToRefresh, setNeedToRefresh] = useState<boolean>(false);

  const toggleRefresh = (forceRefresh: boolean = false) => {
    setNeedToRefresh((prevState) => forceRefresh || !prevState);
  };

  const handleSubmit = async (
    sender: string,
    message: string,
    attendanceStatus: AttendanceStatusEnum
  ) => {
    try {
      await saveGuestbook(sender, message, attendanceStatus);
      setNeedToRefresh(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="Guestbook"
      className="snap-center flex flex-col gap-4 rounded mx-2"
    >
      <img src="/img/couple.jpg" className="rounded-md shadow" />
      <h2 className="capitalize text-center text-xl">
        Berikan ucapan terbaik untuk kedua mempelai
      </h2>
      <div className="bg-white p-2 rounded-lg shadow">
        <GuestbookForm onSubmit={handleSubmit} />
      </div>
      <h2 className="capitalize text-center text-xl">
        Ucapan terkirim kepada pengantin
      </h2>
      <div className='mb-4 max-h-screen overflow-y-scroll'>
        <GuestbookList isNeedToRefresh={false} toggleRefresh={toggleRefresh} />
      </div>
    </section>
  );
}

export default GuestbookSection;
