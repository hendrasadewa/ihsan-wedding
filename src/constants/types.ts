import { AttendanceStatusEnum } from './enums';

export interface Bride {
  name: string;
  description: string;
  avatarSrc: string;
}

export interface Brides {
  husband: Bride;
  wife: Bride;
}

export interface GuestbookEntry {
  id: string;
  sender: string;
  message: string;
  sendAt?: Date;
  attendanceStatus: AttendanceStatusEnum;
}
