import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const HiddenSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  background: ${COLORS.transparentGray15};
  padding: 12px 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  border-radius: 8px;
  ${HiddenSelect}:focus + & {
    outline: 1px dashed black;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const Text = styled.span`
  font-size: 1rem;
  color: ${COLORS.gray700};
  padding-right: 12px;
`;

const StyledIcon = styled(Icon)`
  color: ${COLORS.gray700};
`;

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  margin: 0;
  padding: 0;
  &:hover ${Text} {
    color: ${COLORS.black};
  }
  &:hover ${StyledIcon} {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <StyledSelect>
        <Text>{displayedValue}</Text>
        <StyledIcon id="chevron-down" size="24" />
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
