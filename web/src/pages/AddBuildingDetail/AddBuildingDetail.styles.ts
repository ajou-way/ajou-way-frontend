import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  w: '100vw',
  p: '3rem 2rem',

  textStyle: 'body',
});

export const container = css({
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

export const buttonList = css({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',

  w: '100%',
});

export const addButton = css({
  flex: 1,

  p: '1rem',
  rounded: 'full',

  bg: '{colors.secondary.400}',

  color: '{colors.white}',
});

export const saveButton = css({
  flex: 1,

  p: '1rem',
  rounded: 'full',

  bg: '{colors.primary.400}',

  color: '{colors.white}',
});
