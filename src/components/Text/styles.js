import styled from "styled-components";

const primary = theme => `color: ${theme.color.primary}`;
const secondary = theme => `color: ${theme.color.secondary}`;
const success = theme => `color: ${theme.color.success}`;
const danger = theme => `color: ${theme.color.danger}`;
const warning = theme => `color: ${theme.color.warning}`;
const info = theme => `color: ${theme.color.info}`;
const light = theme => `color: ${theme.color.light}`;
const dark = theme => `color: ${theme.color.dark}`;
const setFontSize = size => `font-size: ${size}rem`;

const StyledSpan = styled.span`
  ${props => props.primary && primary(props.theme)};
  ${props => props.secondary && secondary(props.theme)};
  ${props => props.success && success(props.theme)};
  ${props => props.danger && danger(props.theme)};
  ${props => props.warning && warning(props.theme)};
  ${props => props.info && info(props.theme)};
  ${props => props.light && light(props.theme)};
  ${props => props.dark && dark(props.theme)};
  ${props => props.xs && setFontSize(0.8)};
  ${props => props.italic && "font-style: italic"};
  ${props => props.bold && "font-weight: bold"};
  ${props => props.uppercase && "text-transform: uppercase"};
  ${props => props.underline && "text-decoration: underline"};
  ${props => props.xxxxl && setFontSize(2.8)};
  ${props => props.xxxl && setFontSize(2.1)};
  ${props => props.xxl && setFontSize(1.8)};
  ${props => props.xl && setFontSize(1.5)};
  ${props => props.lg && setFontSize(1.2)};
  ${props => props.sm && setFontSize(0.9)};
  ${props => props.xs && setFontSize(0.8)};
`;

export default StyledSpan;
