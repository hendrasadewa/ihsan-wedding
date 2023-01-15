import { AttendanceStatusEnum } from './enums';
import { Brides } from './types';

export const RSVP_COPY_FROM_ENUM: Record<AttendanceStatusEnum, string> = {
  isAttending: 'Menghadiri Acara',
  notAttending: 'Tidak Menghadiri Acara',
  tentative: 'Tentatif untuk Menghadiri Acara',
};

export const EVENT_ADDRESS = {
  googleMapLink:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15888.874760569995!2d105.2322761!3d-5.3835979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9f45359064f1eb6!2sWarung%20Basri!5e0!3m2!1sen!2sid!4v1673670280118!5m2!1sen!2sid',
  streetAddress:
    'Jl. Purnawirawan, Gg. Purnawirawan 4 No. 16 Gunung Terang Bandar Lampung. Kode post. 35152',
};

export const EVENT_TIME = {
  covenant: new Date('02/05/2023 08:00'),
  reception: new Date('02/05/2023 10:00'),
  receptionEnd: new Date('02/05/2023 16:00'),
};

export const BRIDES = {
  husband: {
    name: 'Ihsan Ichwansyah',
    nickname: 'Ihsan',
    description: 'Putra kedua dari Bapak Ichwani & Ibu Yayah Rokayah',
    avatarSrc: '/img/husband.png',
  },
  wife: {
    name: 'Rizki Aprilia Putri',
    nickname: 'Riris',
    description:
      'Putri ketiga dari Bpk. Ktut Sucipto Hadi dan Ibu Wiwi Kartiwi',
    avatarSrc: '/img/wife.png',
  },
};

export const BANK = {
  owner: BRIDES.husband.name,
  accountNumber: '',
  qrSrc: '/img/qris.png',
};
