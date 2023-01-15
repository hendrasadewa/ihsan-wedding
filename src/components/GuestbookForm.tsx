import { FormEvent, useState } from 'react';
import { RSVP_COPY_FROM_ENUM } from '../constants/contents';
import { AttendanceStatusEnum } from '../constants/enums';

interface Props {
  onSubmit: (
    name: string,
    message: string,
    attendanceStatus: AttendanceStatusEnum
  ) => Promise<void>;
}

interface FormElements extends HTMLFormControlsCollection {
  nameInput: HTMLInputElement;
  messageTextArea: HTMLTextAreaElement;
  attendanceStatusSelect: HTMLSelectElement;
}

interface GuestbookFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function GuestbookForm({ onSubmit }: Props) {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<GuestbookFormElement>) => {
    event.preventDefault();

    const { messageTextArea, nameInput, attendanceStatusSelect } =
      event.currentTarget.elements;

    setSubmitting(true);

    onSubmit(
      nameInput.value,
      messageTextArea.value,
      attendanceStatusSelect.value as AttendanceStatusEnum
    )
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label>Pengirim</label>
        <input
          id="name"
          className="input input-bordered w-full"
          name="nameInput"
          disabled={isSubmitting}
          type="text"
          placeholder="Nama lengkap atau keluarga Pengirim"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Pesan</label>
        <textarea
          id="message"
          className="textarea textarea-bordered w-full"
          disabled={isSubmitting}
          name="messageTextArea"
          placeholder="Sampaikan ucapan terbaik kepada kedua pengantin"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Reservasi</label>
        <select
          id="attendanceStatus"
          className="select select-bordered w-full"
          name="attendanceStatusSelect"
          defaultValue={AttendanceStatusEnum.tentative}
        >
          <option value={AttendanceStatusEnum.isAttending}>
            {RSVP_COPY_FROM_ENUM.isAttending}
          </option>
          <option value={AttendanceStatusEnum.notAttending}>
            {RSVP_COPY_FROM_ENUM.notAttending}
          </option>
          <option value={AttendanceStatusEnum.tentative}>
            {RSVP_COPY_FROM_ENUM.tentative}
          </option>
        </select>
      </div>
      <div>
        <button className="btn btn-block">Kirim</button>
      </div>
    </form>
  );
}

export default GuestbookForm;
