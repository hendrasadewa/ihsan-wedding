interface Props {
  allowFullScreen: boolean;
  src: string;
}

function GoogleMapFrame({ allowFullScreen, src }: Props) {
  return (
    <iframe
      allowFullScreen={allowFullScreen}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={src}
    />
  );
}

GoogleMapFrame.defaultProps = {
  allowFullScreen: false,
  src: '',
};

export default GoogleMapFrame;
