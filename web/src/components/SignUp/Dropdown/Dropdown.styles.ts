import { css } from '../../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.5rem',
});

export const dropdown = css({
  position: 'relative',

  cursor: 'pointer',
});

export const selected = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  w: '100%',
  h: '4rem',
  px: '1rem',
  border: '1px solid {colors.grey.200}',
  rounded: 'lg',

  textStyle: 'lg',
});

export const icon = css({
  color: '{colors.grey.600}',
});

export const list = css({
  position: 'absolute',
  top: '4.6rem',
  left: 0,
  zIndex: 10,

  w: '100%',
  maxH: '20rem',
  border: '1px solid {colors.grey.200}',
  rounded: 'lg',
  boxShadow: 'md',
  overflowY: 'auto',

  bg: '{colors.white}',

  textStyle: 'lg',
});

export const item = css({
  p: '1rem',

  cursor: 'pointer',

  _hover: {
    bg: '{colors.grey.100}',
  },

  _active: {
    bg: '{colors.grey.100}',
  },
});
