import Typography from 'typography';
import theme from 'typography-theme-parnassus';

// theme.overrideStyles = () => ({
//   body: {
//     color: '#555',
//   },
// });

const typography = new Typography(theme);
const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };

// import Typography from 'typography';

// const typography = new Typography({
//   baseFontSize: '18px',
//   // baseLineHeight: 1.45,
//   textDecoration: 'none',
//   headerFontFamily: ['Open Sans'],
//   bodyFontFamily: ['Open Sans'],
// });

// // Insert styles directly into the <head>
// typography.injectStyles();

// export default typography;

// import Typography from 'typography';
// import theme from 'typography-theme-lawton';

// theme.overrideThemeStyles = () => ({
//   html: {
//     baseFontSize: '18px',
//     baseLineHeight: 1.45,
//   },
//   a: {
//     color: 'black',
//     textDecoration: 'none',
//     // borderBottom: '2px solid gold',
//   },

//   'a:hover': {
//     color: 'black',
//     textDecoration: 'none',
//     // borderBottom: '2px solid gold',
//   },
// });

// const typography = new Typography(theme);

// export default typography;
