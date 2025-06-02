interface RouteMarkerProps {
  label: string;
  image: string;
}

const RouteMarker = ({ label, image }: RouteMarkerProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          padding: '2px 8px',
          borderRadius: '20px',
          backgroundColor: '#F7C152',
          color: '#FFFFFF',
          fontSize: '10px',
          fontWeight: 500,
          textAlign: 'center',
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '28px',
          height: '36px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain',
        }}
      />
    </div>
  );
};

export default RouteMarker;
