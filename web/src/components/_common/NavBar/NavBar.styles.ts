import { css } from '../../../../styled-system/css';

export const layout = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',

  position: 'fixed',
  bottom: 0,
  zIndex: 1,

  width: '100%',
  height: '6.5rem',

  bg: '{colors.white}',
});

export const defaultLink = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '6.5rem',

  color: '{colors.grey.400}',

  transition: 'all 0.4s',

  _hover: {
    bg: '{colors.primary.50}',
    color: '{colors.primary.400}',
  },

  _active: {
    bg: '{colors.primary.50}',
    color: '{colors.primary.400}',
  },
});

export const activeLink = css({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '6.5rem',

  color: '{colors.primary.400}',
});

export const homeLink = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '6.5rem',
});

export const homeIcon = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '4rem',
  height: '4rem',
  rounded: 'full',

  bg: '{colors.primary.500}',
  color: '{colors.white}',
});

export const line = css({
  position: 'absolute',
  top: 0,

  width: '70%',
  height: '0.4rem',
  roundedBottom: 'full',

  bg: '{colors.primary.400}',
});

export const gap = css({
  width: '100%',
  height: '6.5rem',
});
