interface Props {
  name?: string;
  size?: number;
  type?: 'beam' | 'marble' | 'pixel' | 'sunset' | 'bauhaus' | 'ring';
}

const baseUrl = import.meta.env.VITE_BORING_AVATAR_URL || '';

function BoringAvatar({ name, size = 120, type = 'beam' }: Props) {
  const avatarSrc = `${baseUrl}/${type}/${size}/${name}`;
  return (
    <div className="w-10 rounded-full grayscale">
      <img src={avatarSrc} />
    </div>
  );
}

export default BoringAvatar;
