import { globalStyle, style } from '@vanilla-extract/css';

export const logoutButton = style({
  width: 258,
  height: 66,
  padding: 12,
  display: 'flex',
  margin: '12px 0',
  cursor: 'pointer',
  border: 'none',
  alignItems: 'center',
  backgroundColor: '#fff',
  textAlign: 'left',
  ':hover': {
    backgroundColor: 'rgba(15, 20, 25, 0.1)',
    borderRadius: 33,
  },
});

export const logoutUserImage = style({
  display: 'flex',
  alignItems: 'center',
});

globalStyle(`${logoutUserImage} img`, {
  width: 40,
  borderRadius: '50%',
});

export const logoutUserName = style({
  margin: '0 12px',
});

globalStyle(`${logoutUserName} div:first-child`, {
  fontWeight: 'bold',
});
