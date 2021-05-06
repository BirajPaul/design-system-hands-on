/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import { Avatar, Button, colors, Icon, ProductItem } from 'design-system';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const data = require('../data/data.js');

const Home = () => {
	return (
		<div>
			<StyledDiv1>
				<StyledDiv2>
					<Avatar src={data.user.avatar} />
					<Button isOutline>
						<Icon name='menu' />
					</Button>
				</StyledDiv2>
				<Styledh1>Store</Styledh1>

				<StyledDiv3>
					<h4>All Product</h4>

					<StyledDiv4>
						<StyledButton color='transparent'>
							<Icon name='viewItem' width={24} height={16} />
						</StyledButton>
						<StyledButton color='transparent'>
							<Icon name='viewGrid' width={24} height={16} />
						</StyledButton>
						<StyledBorder />
						<StyledButton color='transparent'>
							<Icon name='filter' width={24} height={16} />
						</StyledButton>
					</StyledDiv4>
				</StyledDiv3>
				<StyledDiv5>
					{Object.entries(data.products).map(([id, item]) => {
						return (
							<StyledLink key={id} to={`/details/${id}`}>
								<ProductItem item={item} id={id} />
							</StyledLink>
						);
					})}
				</StyledDiv5>
			</StyledDiv1>
		</div>
	);
};

const StyledDiv1 = styled.div`
	padding: 64px 40px;
`;

const Styledh1 = styled.h1`
	margin-bottom: 40px;
	letter-spacing: -1.6px;
`;

const StyledDiv2 = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
`;

const StyledDiv3 = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
`;
const StyledDiv4 = styled.div`
	display: flex;
	align-items: center;
`;

const StyledDiv5 = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px 24px;
`;

const StyledLink = styled(Link)`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: inherit;
`;

const StyledBorder = styled.div`
	width: 1px;
	height: 16px;
	background-color: ${colors.primaryBlack10};
	margin: 0 8px;
`;

const StyledButton = styled(Button)`
	padding: 0;
	border: 0;
	margin: 0 8px;
	&:last-child {
		margin-right: 0;
	}
`;

export default Home;
