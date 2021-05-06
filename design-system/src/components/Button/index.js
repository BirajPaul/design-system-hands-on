/*
 * Button component. It provides interfaces for all types
 * of the buttons.
 */

import { bool, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../tokens';

const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: none;
	border: 1px solid;
	border-color: ${(p) =>
		p.isOutline
			? p.isActive
				? colors.secondary300
				: colors.secondary500
			: 'transparent'};
	box-sizing: border-box;
	line-height: 24px;
	position: relative;
	user-select: none;
	text-decoration: none;
	border-radius: 1rem;
	padding: ${(p) => (p.label ? '16px' : '12px')};
	background-color: ${(p) =>
		p.isOutline ? (p.isActive ? colors.secondary50 : 'transparent') : p.color};
	opacity: ${(p) => (p.disabled ? 0.6 : 1)};
	color: ${(p) =>
		p.isOutline
			? p.isActive
				? colors.secondary300
				: colors.secondary500
			: colors.secondary50};
	font-size: 14px;
	font-weight: 700;
	width: ${(p) => (p.isStretched ? '100%' : null)};
	${(p) =>
		p.isActive &&
		`svg {
      fill: ${colors.secondary300};
        path {
          fill-opacity: 1;
        }
  }`}
`;

const Button = ({ href, label, children, to, ...props }) => {
	return (
		<StyledButton as={href && 'a'} href={href} {...props}>
			{label ? label : children}
		</StyledButton>
	);
};

Button.propTypes = {
	label: string,
	disabled: bool,
	isStretched: bool,
	isOutline: bool,
	color: string,
};

Button.defaultProps = {
	color: colors.secondary500,
};

export default Button;
