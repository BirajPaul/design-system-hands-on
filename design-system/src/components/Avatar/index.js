import React from 'react';
import styled from 'styled-components';

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
	border-radius: 16px;
`;

export default Avatar;
