import React from "react";
import {
	CategoryPreviewContainer,
	ItemsContainer,
	TitleContainer,
} from "./categoryPreview.styles";
import CategoryItem from "../categoryItem/CategoryItem.component";

const CategoryPreview = ({ items, category, routeName }) => {
	return (
		<CategoryPreviewContainer>
			<TitleContainer>
				<h2>{category.toUpperCase()}</h2>
				<div />
			</TitleContainer>

			<ItemsContainer>
				{items.map((item, idx) => (
					<CategoryItem key={idx} {...item} routeName={routeName} />
				))}
			</ItemsContainer>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
