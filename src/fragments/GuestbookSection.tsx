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
      className="flex flex-col items-center gap-4 rounded max-w-lg m-auto"
    >
      <img src="/img/couple.jpg" className="rounded-full w-64" />

      <h2 className="capitalize text-center text-xl">
        Berikan ucapan terbaik untuk kedua mempelai
      </h2>
      <div className="p-2 w-full">
        <GuestbookForm onSubmit={handleSubmit} />
      </div>
      <h2 className="capitalize text-center text-xl">
        Ucapan terkirim kepada pengantin
      </h2>
      <div className="mb-4 max-h-96 overflow-y-scroll w-full px-4">
        <GuestbookList
          isNeedToRefresh={isNeedToRefresh}
          toggleRefresh={toggleRefresh}
        />
      </div>
    </section>
  );
}

export default GuestbookSection;
