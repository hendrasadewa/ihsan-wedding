import dayjs from 'dayjs';
import { RSVP_COPY_FROM_ENUM } from '../constants/contents';
import { AttendanceStatusEnum } from '../constants/enums';
import BoringAvatar from './BoringAvatar';

interface Props {
  sender: string;
  message: string;
  attendanceStatus: AttendanceStatusEnum;
  sentAt?: Date;
}

function GuestbookListItem({
  sender,
  message,
  attendanceStatus,
  sentAt,
}: Props) {
  const attendanceCopy = RSVP_COPY_FROM_ENUM[attendanceStatus];
  const formattedDate = sentAt ? dayjs(sentAt).format('DD / MM / YYYY - HH:mm') : '';

  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <BoringAvatar name={sender} size={64} />
      </div>
      <div className="chat-header">
        {sender}
        <time className="ml-2 text-xs opacity-50">{formattedDate}</time>
      </div>
      <div className="chat-bubble">{message}</div>
      <div className="chat-footer opacity-50">{attendanceCopy}</div>
    </div>
  );
}

export default GuestbookListItem;
