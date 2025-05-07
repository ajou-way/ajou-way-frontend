import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  w: '100vw',
  p: '3rem 2rem',
});

export const buttonList = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  flexWrap: 'wrap',
});

export const button = css({
  p: '0.4rem 1.4rem',
  border: '1px solid {colors.primary.800}',
  rounded: 'full',

  bg: '{colors.white}',
  color: '{colors.primary.800}',
  textStyle: 'body',

  cursor: 'pointer',
  transition: 'all 0.2s',

  _hover: {
    bg: '{colors.primary.100}',
  },

  _active: {
    bg: '{colors.primary.100}',
  },
});

export const list = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  textStyle: 'body',
});
