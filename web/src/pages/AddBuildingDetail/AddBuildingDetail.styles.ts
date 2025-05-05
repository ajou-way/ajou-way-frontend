import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',

  w: '100%',
  p: '3rem',

  textStyle: 'body',
});

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
});

export const inputContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const inputField = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const input = css({
  w: 'full',
  p: '1rem',
  border: '1px solid {colors.grey.200}',
  rounded: '0.5rem',
});

export const addButton = css({
  w: '100%',
  p: '1rem',
  rounded: 'full',

  bg: '{colors.secondary.400}',

  color: '{colors.white}',
});

export const postButton = css({
  w: '100%',
  p: '1rem',
  rounded: 'full',

  bg: '{colors.primary.400}',

  color: '{colors.white}',
});
