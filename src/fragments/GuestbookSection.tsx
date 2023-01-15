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
      <h2 className="text-4xl font-cursive">
        Guestbook
      </h2>
      <div className="px-2 rounded">
        <header className="py-2 capitalize bg-neutral w-full rounded-t">
          <h2 className="capitalize text-center text-xl text-slate-50">
            Ucapan Kepada Pengantin
          </h2>
        </header>
        <div className="mb-4 max-h-96 overflow-y-scroll w-full px-4 graph-paper-bg">
          <GuestbookList
            isNeedToRefresh={isNeedToRefresh}
            toggleRefresh={toggleRefresh}
          />
        </div>
      </div>
      <div className="p-2 w-full">
        <header className="py-2 capitalize bg-neutral w-full rounded-t">
          <h2 className="capitalize text-center text-xl text-slate-50">
            Kirim Ucapan
          </h2>
        </header>
        <div className="w-full p-4 bg-white">
          <GuestbookForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}

export default GuestbookSection;
