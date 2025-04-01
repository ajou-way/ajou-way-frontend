import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'fixed',
  top: '2rem',
  zIndex: 1,

  w: '100%',
  p: '0 2rem',
});

export const container = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  w: '100%',
});

export const mapContainer = css({
  width: '100%',
  height: 'calc(100vh - 6.5rem)',

  overflow: 'hidden',
});
