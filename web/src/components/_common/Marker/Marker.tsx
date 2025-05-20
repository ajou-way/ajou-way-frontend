interface MarkerProps {
  image: string;
}

const Marker = ({ image }: MarkerProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '28px',
        height: '36px',
        cursor: 'pointer',
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
      }}
    />
  );
};

export default Marker;
