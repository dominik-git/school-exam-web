import React from "react";
import { storiesOf } from "@storybook/react";
import Title from "./index";

storiesOf("Title", module).add("test title with text", () => (
  <Title>Im text in Title</Title>
));
