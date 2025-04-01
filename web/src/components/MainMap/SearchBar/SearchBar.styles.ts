import { css } from '../../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',

  position: 'absolute',
  top: 0,

  w: '100%',
  p: '0 2rem',
});

export const input = css({
  w: '100%',
  h: '4.5rem',
  p: '1rem 1.4rem',
  border: '1px solid {colors.primary.500}',
  rounded: '1rem',
  outline: 'none',

  bg: '{colors.white}',
  textStyle: 'body',

  _placeholder: { color: '{colors.grey.300}' },
});

export const list = css({
  w: '100%',
  maxH: '18rem',
  rounded: '1rem',
  overflowY: 'auto',

  bg: '{colors.white}',
});

export const item = css({
  display: 'flex',
  alignItems: 'center',

  w: '100%',
  h: '4.5rem',
  p: '1rem 1.4rem',

  bg: '{colors.white}',
  color: '{colors.primary.800}',
  textStyle: 'body',

  _hover: {
    bg: '{colors.primary.50}',
  },

  _active: {
    bg: '{colors.primary.50}',
  },
});

export const searchButton = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  w: '3rem',
  h: '3rem',
  m: '0 2rem',
  border: '1px solid {colors.primary.800}',
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
