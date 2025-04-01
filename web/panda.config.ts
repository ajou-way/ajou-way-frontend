import { defineConfig } from '@pandacss/dev';

import { globalStyles } from './src/styles/globalStyles';
import { textStyles } from './src/styles/textStyles';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Global Styles
  globalCss: globalStyles,

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        fontWeights: {
          light: { value: '300' },
          regular: { value: '400' },
          medium: { value: '500' },
          semibold: { value: '600' },
          bold: { value: '700' },
        },
        colors: {
          white: { value: '#FFFFFF' },
          black: { value: '#000000' },
          primary: {
            50: { value: '#f3f6fc' },
            100: { value: '#e6ecf8' },
            200: { value: '#c7d7f0' },
            300: { value: '#95b5e4' },
            400: { value: '#5d8fd3' },
            500: { value: '#3871bf' },
            600: { value: '#2a5caa' },
            700: { value: '#214683' },
            800: { value: '#1f3d6d' },
            900: { value: '#1f355b' },
            950: { value: '#14223d' },
          },
          secondary: {
            50: { value: '#FEF9EC' },
            100: { value: '#FDEDC8' },
            200: { value: '#FAD98D' },
            300: { value: '#F7C152' },
            400: { value: '#F5A623' },
            500: { value: '#EF8611' },
            600: { value: '#D3640C' },
            700: { value: '#AF440E' },
            800: { value: '#8F3511' },
            900: { value: '#752C12' },
            950: { value: '#431505' },
          },
          grey: {
            25: { value: '#FDFDFD' },
            50: { value: '#FAFAFA' },
            100: { value: '#F5F5F5' },
            200: { value: '#E9EAEB' },
            300: { value: '#D5D7DA' },
            400: { value: '#A4A7AE' },
            500: { value: '#717680' },
            600: { value: '#535862' },
            700: { value: '#414651' },
            800: { value: '#252B37' },
            900: { value: '#181D27' },
            950: { value: '#0A0D12' },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
