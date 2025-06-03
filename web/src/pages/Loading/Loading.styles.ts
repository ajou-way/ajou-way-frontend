import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',

  minH: '100vh',
  px: '3rem',

  bg: '{colors.primary.25}',

  textAlign: 'center',
});

export const loadingImage = css({
  width: '5.4rem',
  height: '5.4rem',
});

export const loadingText = css({
  color: '{colors.primary.800}',
  fontSize: 'xl',
  fontWeight: 'medium',
  lineHeight: '1.6',

  animation: 'wave 2s ease infinite',
});
