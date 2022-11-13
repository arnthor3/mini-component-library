import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInputWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 2px;
  height: ${(props) => (props.size === "large" ? "36px" : "28px")};
  &:focus-within {
    outline: 1px dashed black;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const Input = styled.input`
  border: none;
  background: none;
  flex: 1;
  font-weight: 700;
  padding-left: ${(props) => (props.size === "large" ? "32px" : "24px")};
  font-size: ${(props) =>
    props.size === "large" ? `${18 / 16}rem` : `${14 / 16}rem`};
  color: ${COLORS.gray700};
  padding-bottom: 2px;
  border-bottom: 2px solid ${COLORS.black};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: 12px;
  pointer-event: none;
  position: absolute;
  pointer-events: none;
  top: 4px;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "large" ? 24 : 16;

  return (
    <IconInputWrapper style={{ width }} size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledIcon id={icon} size={iconSize}></StyledIcon>
      <Input label placeholder={placeholder} size={size}></Input>
    </IconInputWrapper>
  );
};

export default IconInput;
