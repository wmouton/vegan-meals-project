import React from "react";
import VMLogoImg from "./images/vegan-dish.png";
import { Wrapper, Content, LogoImg } from "./Header.styles";

const Header = () => {
	return (
		<Wrapper>
			<Content>
					<LogoImg src={VMLogoImg} alt="vm-logo" />
			</Content>
		</Wrapper>
	);
};

export default Header;
