import { useEffect, useState } from 'react';
import { GuestbookEntry } from '../constants/types';
import { getGuestbook } from '../supabase/guestbookModel';
import GuestbookListItem from './GuestbookListItem';

interface Props {
  isNeedToRefresh: boolean;
  toggleRefresh: (forceRefresh?: boolean) => void;
}

function GuestbookList({ isNeedToRefresh, toggleRefresh }: Props) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    const handleLoadData = async () => {
      try {
        setLoading(true);

        const result = await getGuestbook();

        setEntries(result.data as GuestbookEntry[]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (isNeedToRefresh) {
      toggleRefresh();
      handleLoadData();
    }

    handleLoadData();
  }, [isNeedToRefresh]);

  return (
    <ul className="flex flex-col gap-2">
      {entries.length <= 0 ? (
        <li className="text-center p-2">Belum ada kiriman ucapan</li>
      ) : null}
      {entries.map(({ id, attendanceStatus, message, sender, sendAt }) => (
        <li key={id}>
          <GuestbookListItem
            attendanceStatus={attendanceStatus}
            message={message}
            sender={sender}
            sentAt={sendAt}
          />
        </li>
      ))}
      {isLoading ? <li>Memuat data ...</li> : null}
    </ul>
  );
}

GuestbookList.defaultProps = {
  isNeedToRefresh: false,
};

export default GuestbookList;
