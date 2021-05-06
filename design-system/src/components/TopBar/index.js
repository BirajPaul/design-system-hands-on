
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";
import { colors, typography } from "tokens";

/* TopBar
 *
 * TODO: add component description
 */
const TopBar = ({
  rightIcon,
  leftIcon,
  title
}) => {
  return (
    <StyledTopBarContainer>
      <StyledMenuButtonLeft>
        <Icon name={leftIcon} />
      </StyledMenuButtonLeft>
      {
        title && (
          <StyledTitle>
            <span>{title}</span>
          </StyledTitle>
        )
      }
      {rightIcon && (
        <StyledMenuButtonRight>
          <Icon name={rightIcon} />
        </StyledMenuButtonRight>
      )}
    </StyledTopBarContainer>
  );
};

export const StyledTopBarContainer = styled.div`
  display: flex;
  margin-top: 48px;
  height: 48px;
  position: relative;
`;

export const StyledMenuButtonLeft = styled(Button)`
  margin-left: 4px;
  width: 48px;
  height: 48px;
  position: absolute;
  left: 0;
`;

export const StyledMenuButtonRight = styled(Button)`
  margin-right: 4px;
  width: 48px;
  height: 48px;
  position: absolute;
  right: 0
`;

export const StyledTitle = styled.div`
  font-family: ${typography.headline4FontFamily};
  font-style: ${typography.headline4FontStyle};
  font-weight: ${typography.headline4FontWeight};
  font-size: ${typography.headline4FontSize};
  text-decoration: ${typography.headline4TextDecoration};
  line-height: ${typography.headline4LineHeight};
  letter-spacing: ${typography.headline4LetterSpacing};
  color: ${colors.onBackground500};
  margin: 0 76px;
  display: flex;
  align-items: center;
  overflow: hidden;

  > span {
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default TopBar;
