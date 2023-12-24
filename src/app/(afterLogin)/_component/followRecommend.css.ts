import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  padding: '12px 0',
  height: 66,
  display: 'flex',
});

export const userLogo = style({
  width: 40,
  height: 40,
  borderRadius: 20,
});

globalStyle(`${userLogo} img`, {
  width: 40,
  height: 40,
  borderRadius: 20,
});

export const userInfo = style({
  flex: 1,
});

export const title = style({
  fontSize: 15,
  fontWeight: 'bold',
  lineHeight: '20px',
});

export const count = style({
  color: 'rgb(83, 100, 113)',
  fontSize: 13,
  lineHeight: '16px',
});

export const followButtonSection = style({
  width: 76,
});

globalStyle(`${followButtonSection} button`, {
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  color: 'white',
  background: '#000',
  fontSize: 14,
  fontWeight: 'bold',
  height: 32,
  borderRadius: 16,
});

globalStyle(`${followButtonSection} button:hover`, {
  backgroundColor: 'rgb(39, 44, 48)',
});
