
import React from "react";
import styled from "styled-components";
import TopBar from '../TopBar';
import Carousel from '../Carousel';
import { colors, typography } from "tokens";

/* Header
 *
 * TODO: add component description
 */
const Header = ({
  leftIcon,
  rightIcon,
  topBarTitle,
  title,
  carouselImages
}) => {
  return (
    <StyledHeader>
      <TopBar leftIcon={leftIcon} rightIcon={rightIcon} title={topBarTitle} />
      <StyledTitle>
        {title}
      </StyledTitle>
      {carouselImages.length > 0 && (
        <Carousel images={carouselImages} />
      )}
    </StyledHeader>
  )
};

export const StyledHeader = styled.div`
  padding: 0 40px;
`;
export const StyledTitle = styled.div`
  font-family: ${typography.headline2FontFamily};
  font-style: ${typography.headline2FontStyle};
  font-weight: ${typography.headline2FontWeight};
  font-size: ${typography.headline2FontSize};
  text-decoration: ${typography.headline2TextDecoration};
  line-height: ${typography.headline2LineHeight};
  letter-spacing: ${typography.headline2LetterSpacing};
  color: ${colors.onBackground500};
  margin-top: 40px;
  margin-bottom: 34px;
`;

Header.defaultProps = {
  carouselImages: [],
};

export default Header;
