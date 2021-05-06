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
			<StyledImage src={item.image} />
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

const StyledImage = styled(ProductImage)`
	margin-bottom: ${spacing.spacingLgBottom};
`;

const StyledP = styled.p`
	color: ${colors.secondary500};
	font-weight: ${typography.paragraph1FontWeight};
	margin-top: ${spacing.spacingBaseTop};
`;

export default ProductItem;
