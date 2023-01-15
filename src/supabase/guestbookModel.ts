import supabase from '.';
import { AttendanceStatusEnum } from '../constants/enums';

export function saveGuestbook(
  sender: string,
  message: string,
  attendanceStatus: AttendanceStatusEnum
) {
  const payload = { sender, message, attendanceStatus };
  return supabase.from('guestbook').insert(payload);
}

export function getGuestbook() {
  return supabase
    .from('guestbook')
    .select()
    .order('sendAt', { ascending: false });
}
