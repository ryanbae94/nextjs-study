import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: '#fff',
});

export const leftSectionWrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  flexGrow: 1,
});

export const leftSection = style({
  height: '100dvh',
  width: 275,
});

globalStyle(`${leftSection} nav li`, {
  listStyleType: 'none',
});

export const leftSectionFixed = style({
  position: 'fixed',
  height: '100dvh',
  width: 'inherit',
  backgroundColor: 'orange',
  display: 'flex',
  flexDirection: 'column',
});

globalStyle(`${leftSectionFixed} nav`, {
  flex: 1,
});

export const rightSectionWrapper = style({
  backgroundColor: 'blue',
  display: 'flex',
  alignItems: 'flex-start',
  height: '100dvh',
  flexDirection: 'column',
  flexGrow: 1,
});

export const rightSection = style({
  width: 350,
  height: '100%',
});

export const rightSectionInner = style({
  height: '100%',
  width: 990,
  display: 'flex',
  justifyContent: 'space-between',
});

export const main = style({
  width: 600,
  height: '200dvh',
  backgroundColor: 'white',
});

export const search = style({
  position: 'fixed',
  height: 42,
  width: 'inherit',
  borderRadius: 21,
  backgroundColor: 'rgb(239, 243, 244)',
  marginTop: 6,
  marginBottom: 12,
  display: 'flex',
  alignItems: 'center',
});

export const searchSvg = style({
  marginLeft: 20,
  fill: 'rgb(83, 100, 113)',
});

export const searchInput = style({
  outline: 'none',
  backgroundColor: 'inherit',
  border: 'none',
  padding: 12,
  marginLeft: 5,
  fontSize: 15,
});

export const logo = style({
  display: 'inline-block',
  height: 56,
  marginTop: 2,
});

export const logoPill = style({
  width: 50,
  height: 50,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(15, 20, 25, 0.1)',
    },
  },
});

export const postButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '16px 0',
  height: 52,
  width: 234,
  backgroundColor: 'rgb(29, 155, 240)',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 28px',
  color: '#ffffff',
  fontWeight: 700,
  fontSize: 17,
  borderRadius: 26,
  ':hover': {
    backgroundColor: 'rgb(26, 140, 216)',
  },
});
