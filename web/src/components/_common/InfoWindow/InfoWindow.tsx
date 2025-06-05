import { css } from '../../../../styled-system/css';

interface InfoWindowProps {
  title: string;
}

const InfoWindow = ({ title, children }: React.PropsWithChildren<InfoWindowProps>) => {
  return (
    <div
      className={css({
        px: '10px',
        py: '8px',
        rounded: 'lg',
        backgroundColor: '{colors.white}',
        shadow: 'md',
        color: '{colors.grey.800}',
        fontSize: 'md',
      })}
    >
      <p
        className={css({
          fontSize: 'lg',
          fontWeight: 'semibold',
        })}
      >
        {title}
      </p>
      {children}
    </div>
  );
};

export default InfoWindow;
