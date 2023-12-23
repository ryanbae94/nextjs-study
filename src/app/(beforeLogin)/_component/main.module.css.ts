import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#fff',
  height: '100dvh',
  width: '100dvw',
});

export const left = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const right = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

globalStyle(`${right} h1`, {
  fontSize: 64,
  margin: '48px 0',
});

globalStyle(`${right} h2`, {
  fontSize: 31,
  marginBottom: 32,
});

globalStyle(`${right} h3`, {
  fontSize: 17,
  marginBottom: 20,
  marginTop: 40,
});

export const signup = style({
  width: 300,
  height: 40,
  borderRadius: 20,
  padding: '0 16',
  fontSize: 15,
  backgroundColor: 'rgb(29, 155, 240)',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgb(26, 140, 216)',
    },
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const login = style({
  width: 300,
  height: 40,
  borderRadius: 20,
  padding: '0 16',
  fontSize: 15,
  color: 'rgb(29, 155, 240)',
  border: '1px solid rgb(207, 217, 222)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(29, 155, 240, 0.1)',
    },
  },
});
