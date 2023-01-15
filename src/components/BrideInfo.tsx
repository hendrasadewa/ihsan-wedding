interface Props {
  name: string;
  avatarSrc: string;
  parent: string;
}

function BrideInfo({ name, avatarSrc, parent }: Props) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="avatar">
        <div className="rounded-full w-40 border-2 border-spacing-2">
          <img src={avatarSrc} />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className="font-cursive text-3xl text-center">{name}</h3>
        <p className="text-md text-center">{parent}</p>
      </div>
    </div>
  );
}

export default BrideInfo;
