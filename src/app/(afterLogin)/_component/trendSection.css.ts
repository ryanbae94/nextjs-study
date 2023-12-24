import { globalStyle, style } from '@vanilla-extract/css';

export const trendBg = style({
  backgroundColor: 'rgb(247, 249, 249)',
  borderRadius: 16,
  marginTop: 12,
});

export const trend = style({
  fontSize: 20,
  fontWeight: 'bold',
  padding: '12px 0',
});

globalStyle(`${trend} h3`, {
  marginBottom: 12,
  padding: '0 16px',
});
