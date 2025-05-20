interface ClusterMarkerProps {
  image: string;
}

const ClusterMarker = ({ image }: ClusterMarkerProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        color: 'white',
        fontSize: '10px',
        fontWeight: 'bold',
        cursor: 'pointer',
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
      }}
    />
  );
};

export default ClusterMarker;
