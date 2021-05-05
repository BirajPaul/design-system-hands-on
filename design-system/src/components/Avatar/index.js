import React from 'react';
import styled from 'styled-components';
import { radii } from '../../tokens';

/* Avatar
 *
 * Avatar displays user picture
 */
const Avatar = ({ src, ...props }) => {
	return <StyledAvatar src={src} />;
};

export const StyledAvatar = styled.img`
	width: 48px;
	height: 48px;
	border-radius: ${radii.radii16Radius};
`;

export default Avatar;
