import { css } from '../../../styled-system/css';

export const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'fixed',
  top: '2rem',
  zIndex: 1,

  w: '100%',
});

export const mapContainer = css({
  width: '100%',
  height: 'calc(100vh - 6.5rem)',

  overflow: 'hidden',
});

export const modalContainer = css({
  position: 'fixed',
  bottom: '9rem',
  zIndex: 1,

  w: '100%',
  p: '0 1rem',
});
