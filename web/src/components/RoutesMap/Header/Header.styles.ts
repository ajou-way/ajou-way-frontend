import { css } from '../../../../styled-system/css';

export const layout = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',

  position: 'absolute',
  top: 0,

  w: '100%',
  p: '0 2rem',
});

export const container = css({
  display: 'flex',
  alignItems: 'center',

  w: 'calc(50% - 3rem)',
  h: '4.5rem',
  p: '1rem 1.4rem',
  bg: '{colors.primary.50}',

  border: '1px solid {colors.primary.500}',
  rounded: '1rem',

  color: '{colors.primary.900}',
  textStyle: 'body',
});

export const circle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  w: '3rem',
  h: '3rem',
  rounded: 'full',

  bg: '{colors.primary.500}',
  color: '{colors.white}',
});
