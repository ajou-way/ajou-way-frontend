import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  blink: {
    '0%': { opacity: '0' },
    '20%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  wave: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-4px)' },
  },
});
