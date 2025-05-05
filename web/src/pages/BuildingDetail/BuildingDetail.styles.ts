import { css } from '../../../styled-system/css';

export const layout = css({
  w: '100%',
});

export const buttonContainer = css({
  display: 'flex',
  alignItems: 'center',

  w: '100%',
  p: '1.5rem 2rem',
});

export const header = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  w: '100%',
  p: '2rem',
});

export const body = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  w: '100%',
  p: '2rem',
});

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',

  textStyle: 'body',
  fontWeight: 'normal',
});

export const title = css({
  fontSize: '2rem',
  fontWeight: 'semibold',
});

export const image = css({
  w: '100%',
  h: '20rem',
  rounded: '1rem',

  objectFit: 'cover',
});

export const tab = css({
  display: 'flex',
  overflowX: 'auto',
  scrollbar: 'hidden',
});

export const defaultItem = css({
  flexShrink: 0,

  w: '20vw',
  p: '0.8rem 0',
  roundedTop: '1rem',

  bg: '{colors.white}',

  color: '{colors.grey.400}',
  textStyle: 'small',
  textAlign: 'center',

  _hover: {
    bg: '{colors.grey.100}',
  },

  _active: {
    bg: '{colors.grey.100}',
  },
});

export const activeItem = css({
  flexShrink: 0,

  w: '20vw',
  p: '0.8rem 0',
  borderBottom: '0.1rem solid {colors.primary.500}',
  roundedTop: '1rem',

  bg: '{colors.primary.300}',

  color: '{colors.white}',
  textStyle: 'small',
  textAlign: 'center',
});

export const subTitle = css({
  textStyle: 'subTitle',
  fontWeight: 'semibold',
});
