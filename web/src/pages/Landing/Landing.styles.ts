import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6rem',

  minH: '100vh',
  px: '3rem',

  bg: '{colors.gray.50}',

  textAlign: 'center',
});

export const header = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: '2rem',
});

export const title = css({
  color: '{colors.primary.500}',
  fontSize: '5xl',
  fontWeight: 'bold',
});

export const subTitle = css({
  color: '{colors.gray.800}',
  textStyle: 'body',
  lineHeight: '1.6',
});

export const footer = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: '1.4rem',
});

export const googleLogo = css({
  w: '1.8rem',
  h: '1.8rem',
});

export const googleButton = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.6rem',

  w: '100%',

  px: '1.6rem',
  py: '1.2rem',
  border: '2px solid {colors.gray.100}',
  rounded: 'full',

  bg: '{colors.white}',

  color: '{colors.gray.800}',
  textStyle: 'body',

  cursor: 'pointer',
  transition: 'all 0.2s',

  _hover: {
    bg: '{colors.gray.100}',
  },

  _active: {
    bg: '{colors.gray.100}',
  },
});

export const tooltip = css({
  position: 'relative',

  px: '0.6rem',
  py: '0.3rem',
  rounded: 'md',

  bg: '{colors.secondary.400}',

  color: '{colors.white}',
  textStyle: 'lg',
  whiteSpace: 'nowrap',

  _after: {
    content: '""',

    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',

    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: '{colors.secondary.400} transparent transparent transparent',
  },
});
