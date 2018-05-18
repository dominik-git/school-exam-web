import React from "react";
import { StyledA, StyledMessageWrapper } from "./styles";

const FlatIconMessage = () => (
  <StyledMessageWrapper>
    Icons made by{" "}
    <StyledA href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
      Eucalyp
    </StyledA>{" "}
    from{" "}
    <StyledA href="https://www.flaticon.com/" title="Flaticon">
      www.flaticon.com
    </StyledA>{" "}
    is licensed by{" "}
    <StyledA href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
      CC 3.0 BY
    </StyledA>
  </StyledMessageWrapper>
);
export default FlatIconMessage;
