import { style } from '@vanilla-extract/css';

export const navPill = style({
  display: 'inline-flex',
  height: 50,
  padding: 12,
  alignItems: 'center',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(15, 20, 25, 0.1)',
      borderRadius: 29,
    },
  },
});

export const navPillDiv = style({
  marginLeft: 20,
  marginRight: 16,
  fontSize: 20,
});
