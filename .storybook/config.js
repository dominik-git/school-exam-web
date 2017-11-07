import React from "react";
import theme from "../src/themes/default"
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
const req = require.context("../src/components", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}
addDecorator(story =>
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>);

configure(loadStories, module);
