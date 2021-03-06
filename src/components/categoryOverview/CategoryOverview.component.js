import React from "react";

import { CategoryOverviewContainer } from "./categoryOverview.styles";
import { connect } from "react-redux";
import {
	selectAllItemsInOneArray,
	selectItemsInSpecificCategory,
} from "../../redux/initialData/initialData.selectors";

import ShopSidebar from "../shopSidebar/ShopSidebar.component";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import CategoryItem from "../categoryItem/CategoryItem.component";
import Pagination from "react-router-pagination";

const CategoryOverview = ({
	allItems,
	pageNumber,
	category,
	itemsInSpecificCategory,
}) => {
	// use 10 and not 2  and move the indexes inside the if
	const indexOfLastItem = pageNumber * 10;
	const indexOfFirstItem = indexOfLastItem - 10;
	let currentItems = [];

	let totalPages = 0;
	if (category === "all") {
		currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);
		totalPages = Math.ceil(allItems.length / 10);
	} else {
		if (itemsInSpecificCategory) {
			currentItems = itemsInSpecificCategory.slice(
				indexOfFirstItem,
				indexOfLastItem
			);
			totalPages = Math.ceil(itemsInSpecificCategory.length / 10);
		} else {
			console.log("wait");
		}
	}

	const match = {
		path: "/shop/:category/:pageNumber",
		params: {
			category,
		},
	};
	return (
		<CategoryOverviewContainer>
			<Breadcrumb
				links={[
					{
						label: "Products",
						routeName: `shop/${category}/${pageNumber}`,
					},
				]}
				title="Products"
			/>

			<div className="content">
				<ShopSidebar />
				<div className="categories">
					<div className="items">
						{currentItems.map((item) => (
							<CategoryItem key={item.name} {...item} />
						))}
					</div>
					<Pagination
						spread={3}
						match={match}
						totalPages={totalPages}
						pageNumber={pageNumber}
					/>
				</div>
			</div>
		</CategoryOverviewContainer>
	);
};

const stateToProps = (state, ownProps) => {
	console.log("props", ownProps);
	return {
		allItems: selectAllItemsInOneArray(state),
		itemsInSpecificCategory: selectItemsInSpecificCategory(state)(
			ownProps.category
		),
	};
	//.filter(
	// 	(item) => item.category === ownProps.category
	// ),
};

export default connect(stateToProps, null)(CategoryOverview);
