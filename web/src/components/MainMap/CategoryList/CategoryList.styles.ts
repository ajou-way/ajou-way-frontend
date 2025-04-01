import { css } from '../../../../styled-system/css';

export const buttonList = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  maxW: 'calc(100vw - 4rem)',
  overflowX: 'auto',
  whiteSpace: 'nowrap',

  _scrollbar: {
    display: 'none',
  },
});

export const cancelButton = css({
  p: '0.4rem',
  border: '1px solid {colors.grey.400}',
  rounded: 'full',

  bg: '{colors.white}',
  color: '{colors.grey.400}',
  textStyle: 'body',

  cursor: 'pointer',
  transition: 'all 0.2s',

  _hover: {
    bg: '{colors.grey.100}',
  },

  _active: {
    bg: '{colors.grey.100}',
  },
});
