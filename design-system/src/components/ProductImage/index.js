import React from 'react';
import styled from 'styled-components';
import { radii } from '../../tokens';

/* ProductImage
 *
 * Image displaying a product
 */
const ProductImage = ({ src, ...props }) => {
	return <StyledProductImage src={src} {...props} />;
};

export const StyledProductImage = styled.img`
	max-width: 100%;
	object-fit: cover;
	border-radius: ${radii.radii16Radius};
`;

export default ProductImage;
