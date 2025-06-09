import { defineGlobalStyles } from '@pandacss/dev';

export const globalStyles = defineGlobalStyles({
  html: {
    fontSize: '62.5%',
  },
  'input[type=number]::-webkit-inner-spin-button': {
    appearance: 'none',
    margin: 0,
  },
  'input[type=number]::-webkit-outer-spin-button': {
    appearance: 'none',
    margin: 0,
  },
  'input[type=number]': {
    MozAppearance: 'textfield',
  },
});
