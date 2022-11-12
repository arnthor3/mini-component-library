/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const convertSizeToPX = (size) => {
  if (size === "large") {
    return "24px";
  }
  if (size === "medium") {
    return "12px";
  }
  if (size === "small") {
    return "8px";
  }
};

const convertValueToBorderRadius = (value) => {
  const fX = (x) => {
    // set threshold to 90
    if (x < 90) {
      return 0;
    }
    if (x > 100) {
      x = 100;
    }
    // last 10 will be range from 0, 100%
    const value = x - 90;
    return (value / 10) * 4;
  };
  return `4px ${fX(value)}px ${fX(value)}px 4px`;
};

const normalize = (value) => {
  if (value > 100) return 100;
  if (value < 0) return 0;
  return value;
};

const StyledProgressBar = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  display: flex;
  height: ${(props) => convertSizeToPX(props.size)};
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  &:after {
    content: " ";
    width: ${(props) => `${normalize(props["aria-valuenow"])}%`};
    background: ${COLORS.primary};
    display: inline-flex;
    margin: ${(props) => (props.size === "large" ? "4px" : 0)};
    border-radius: ${(props) =>
      convertValueToBorderRadius(props["aria-valuenow"])};
  }
`;

const ProgressBar = ({ value, size }) => {
  return (
    <>
      <VisuallyHidden>Progress {value}</VisuallyHidden>
      <StyledProgressBar role="progressbar" aria-valuenow={value} size={size} />
    </>
  );
};

export default ProgressBar;
