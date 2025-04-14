import { css } from '../../../../styled-system/css';

export const layout = css({
  w: '100%',
  rounded: '1.5rem',
  boxShadow: 'lg',
});

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  w: '100%',
  p: '2.6rem 2rem 2rem 2rem',
  rounded: '1.5rem 1.5rem 0 0',

  bg: '{colors.white}',
});

export const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  w: '100%',
});

export const title = css({
  textStyle: 'subTitle',
  fontWeight: 'semibold',
});

export const buttonContainer = css({
  display: 'flex',
  gap: '0.4rem',
});

export const routingButton = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  h: '2.6rem',
  p: '0.4rem 1.2rem',
  border: '1px solid {colors.primary.700}',
  rounded: 'full',

  bg: '{colors.white}',
  color: '{colors.primary.700}',
  textStyle: 'small',

  cursor: 'pointer',
  transition: 'all 0.2s',

  _hover: {
    bg: '{colors.primary.100}',
  },

  _active: {
    bg: '{colors.primary.100}',
  },
});

export const closeButton = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  w: '2.6rem',
  h: '2.6rem',
  rounded: 'full',

  bg: '{colors.grey.100}',
  color: '{colors.grey.400}',

  cursor: 'pointer',
  transition: 'all 0.2s',

  _hover: {
    bg: '{colors.grey.200}',
  },

  _active: {
    bg: '{colors.grey.200}',
  },
});

export const linkButton = css({
  w: '100%',
  h: '5rem',
  p: '1.2rem 1.6rem',
  rounded: '0 0 1.5rem 1.5rem',

  bg: '{colors.secondary.300}',
  color: '{colors.white}',
  textStyle: 'body',
  textAlign: 'center',
  fontWeight: 'semibold',

  cursor: 'pointer',
  transition: 'all 0.2s',

  _hover: {
    bg: '{colors.secondary.400}',
  },

  _active: {
    bg: '{colors.secondary.400}',
  },
});
