import { rem } from "polished";

const color = {
  primary: "#004085",
  secondary: "#dddfe2",
  success: "#d4edda",
  danger: "#f8d7da",
  warning: "#fff3cd",
  info: "#d1ecf1",
  light: "#fefefe",
  dark: "#d6d8d9",
  bmwGrey: "#929292",
  bmwLightBlue: "#009ada",
  bmwDarkBlue: "#10369c;",
  bmwRed: "#e10707",
  bmwBlack: "rgb(39, 37, 37)",
};
const border = {
  primaryBorder: "4px",
};

const theme = {
  color,
  border,
  rem: sizeInPx => rem(sizeInPx),
};

export default theme;
