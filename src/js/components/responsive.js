import styled, { css } from 'styled-components';

const breakpoints = {
  xl: 1200,
  lg: 900,
  md: 700,
  sm: 400,
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
