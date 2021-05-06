import React from 'react';
import styled from 'styled-components';

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
`;

export default ProductImage;
