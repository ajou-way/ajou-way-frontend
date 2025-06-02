import { css, cva } from '../../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  position: 'absolute',
  top: 0,

  w: '100%',
  p: '0 2rem',
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
  position: 'absolute',
  top: '10rem',

  w: 'calc(100% - 4rem)',
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

export const circle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',

  w: '3rem',
  h: '3rem',
  rounded: 'full',

  bg: '{colors.primary.500}',
  color: '{colors.white}',
});

export const button = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    w: '100%',
    h: '4.5rem',
    p: '1rem 1.4rem',
    rounded: '1rem',

    textStyle: 'body',
    color: '{colors.white}',

    transition: 'all 0.2s',
  },
  variants: {
    visual: {
      default: {
        bg: '{colors.primary.500}',
        cursor: 'pointer',

        _hover: {
          bg: '{colors.primary.600}',
        },

        _active: {
          bg: '{colors.primary.600}',
        },
      },
      disabled: {
        bg: '{colors.grey.400}',
        cursor: 'not-allowed',
      },
    },
  },
});
