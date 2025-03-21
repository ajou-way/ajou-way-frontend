import { css } from '../../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const inputContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',

  w: '100%',
  border: '1px solid {colors.primary.500}',
  rounded: '1rem',

  bg: '{colors.white}',
});

export const input = css({
  w: '100%',
  h: '4.5rem',
  p: '1rem 1.4rem',
  outline: 'none',

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

export const line = css({
  w: '100%',
  h: '0.1rem',
  border: 0,

  bg: '{colors.primary.500}',
});

export const changeButton = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  w: '3rem',
  h: '3rem',
  rounded: 'full',

  bg: '{colors.primary.500}',
  color: '{colors.white}',
});
