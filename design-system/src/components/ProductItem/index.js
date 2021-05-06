import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../tokens';
import ProductImage from '../ProductImage';

/* ProductItem
 *
 * TODO: add component description
 */
const ProductItem = ({ id, item, ...props }) => {
	return (
		<StyledProductItem>
			<ProductImage src={item.image} />
			<h4>{item.name}</h4>
			<StyledP>{item.price}</StyledP>
		</StyledProductItem>
	);
};

export const StyledProductItem = styled.div`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: inherit;
`;

const StyledP = styled.p`
	color: ${colors.primary700};
	font-weight: ${typography.paragraph1FontWeight};
	margin-top: ${spacing.spacingBaseTop};
`;

export default ProductItem;
