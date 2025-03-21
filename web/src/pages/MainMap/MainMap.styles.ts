import { css } from '../../../styled-system/css';

export const layout = css({
  position: 'fixed',
  top: '2rem',
  zIndex: 1,

  w: '100%',
  p: '0 2rem',
});

export const mapContainer = css({
  width: '100%',
  height: 'calc(100vh - 6.5rem)',

  overflow: 'hidden',
});

export const searchButton = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  w: '3rem',
  h: '3rem',
  border: '1px solid {colors.primary.500}',
  rounded: 'full',

  bg: '{colors.white}',
  color: '{colors.primary.800}',

  cursor: 'pointer',
  transition: 'all 0.2s',

  _hover: {
    bg: '{colors.primary.100}',
  },

  _active: {
    bg: '{colors.primary.100}',
  },
});
