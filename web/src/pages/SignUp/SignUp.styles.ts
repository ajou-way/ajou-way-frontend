import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDirection: 'column',

  px: '2rem',
  py: '4rem',
});

export const titleContainer = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.4rem',

  mb: '2rem',
});

export const title = css({
  color: '{colors.primary.800}',
  fontSize: '3xl',
  fontWeight: 'bold',
});

export const description = css({
  color: '{colors.grey.800}',
  fontSize: 'lg',
  fontWeight: 'medium',
});

export const form = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.4rem',
});

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',

  color: '{colors.gray.800}',
  textStyle: 'lg',
});

export const input = css({
  w: '100%',
  h: '4rem',
  px: '1rem',
  border: '1px solid {colors.grey.200}',
  rounded: 'lg',

  textStyle: 'lg',

  _disabled: {
    bg: '{colors.grey.100}',
    color: '{colors.grey.500}',

    cursor: 'not-allowed',
  },

  _focus: {
    borderColor: '{colors.primary.500}',
    boxShadow: '0 0 0 2px var(--colors-primary-200)',
    outline: 'none',
  },
});

export const submit = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  w: '100%',
  h: '4rem',

  mt: '2rem',
  px: '1.2rem',
  py: '0.8rem',
  rounded: 'full',

  bg: '{colors.primary.400}',

  color: '{colors.white}',
  textStyle: 'lg',
  fontWeight: 'medium',

  transition: 'all 0.2s',

  _disabled: {
    bg: '{colors.grey.400}',

    cursor: 'not-allowed',
  },
});
