import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDir: 'column',
  padding: '2rem',
});

export const title = css({
  py: '2rem',

  color: '{colors.primary.800}',
  fontSize: '3xl',
  fontWeight: 'bold',
});

export const container = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.4rem',
});

export const name = css({
  color: '{colors.gray.800}',
  textStyle: 'body',
  fontWeight: 'semibold',
});

export const info = css({
  color: '{colors.gray.700}',
  textStyle: 'lg',
});
