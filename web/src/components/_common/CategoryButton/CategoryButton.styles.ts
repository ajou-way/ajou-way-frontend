import { css } from '../../../../styled-system/css';

export const defaultButton = css({
  p: '0.4rem 1.4rem',
  border: '1px solid {colors.primary.500}',
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

export const activeButton = css({
  p: '0.4rem 1.4rem',
  border: '1px solid {colors.primary.500}',
  rounded: 'full',

  bg: '{colors.primary.500}',
  color: '{colors.white}',
  textStyle: 'body',

  cursor: 'pointer',
});
