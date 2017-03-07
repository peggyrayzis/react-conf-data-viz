import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import Playground from "component-playground";
import styled from "styled-components";
import "../node_modules/spectacle/lib/themes/default/playground.css";
import "../node_modules/spectacle/lib/themes/default/codemirror.css";
import { defaultCode } from "../node_modules/spectacle/lib/utils/playground.default-code";

const ComponentPlaygroundContainer = styled.div`
  background: ${(props) => (
    props.previewBackgroundColor || "#fff"
  )};
  border-radius: 0 0 6px 6px;
  height: 100%;
  width: 100%;
`;

const ComponentPlayground = ({
  code,
  previewBackgroundColor,
  scope = {},
  theme = "dark"
}) => {
  const useDarkTheme = theme === "dark";

  if (useDarkTheme) {
    require("../node_modules/spectacle/lib/themes/default/dark.codemirror.css");
  } else {
    require("../node_modules/spectacle/lib/themes/default/light.codemirror.css");
  }

  return (
    <ComponentPlaygroundContainer
      className={`theme-${theme}`}
      previewBackgroundColor={previewBackgroundColor}
    >
      <Playground
        codeText={(code || defaultCode).trim()}
        scope={{ React, Component, render, ...scope }}
        noRender={false}
        theme={useDarkTheme ? "material" : "elegant"}
      />
    </ComponentPlaygroundContainer>
  );
};

ComponentPlayground.propTypes = {
  code: PropTypes.string,
  previewBackgroundColor: PropTypes.string,
  theme: PropTypes.string,
  scope: PropTypes.object
};

export default ComponentPlayground;
