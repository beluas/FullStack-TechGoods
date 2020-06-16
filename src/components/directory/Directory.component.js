import React from "react";
import {
	ImageContainer,
	DescriptionContainer,
	HeroContainer,
	DirectoryContainer,
	TitleContainer,
	CategoriesContainer,
} from "./directory.styles";
import { directories } from "../../data/directories";
import CustomButton from "../customButton/CustomButton.component";

import DirectoryCategory from "../directoryCategory/DirectoryCategory.component";

const Directory = (props) => {
	return (
		<DirectoryContainer>
			<HeroContainer>
				<TitleContainer>
					<h3>Beats Solo</h3>
					<h2>Wireless</h2>
					<h1>HEADPHONE</h1>
					<CustomButton width="25%">Shop by category</CustomButton>
				</TitleContainer>
				<DescriptionContainer>
					<h2>Desc</h2>
					<p>
						There are many variations passages of Lorem Ipsum
						available, but the majority have suffered alteration
					</p>
				</DescriptionContainer>
				<ImageContainer>
					<img src="/assets/headphone.png" alt="" />
				</ImageContainer>
			</HeroContainer>

			<CategoriesContainer>
				{directories.map((directory) => (
					<DirectoryCategory key={directory.title} {...directory} />
				))}
			</CategoriesContainer>
		</DirectoryContainer>
	);
};

export default Directory;
