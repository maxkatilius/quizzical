import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

const Header = () => {
	return (
		<header>
			<Link to="/" className="header-link">
				<FaQuestion />
				<h2>Quizzical</h2>
			</Link>
		</header>
	);
};

export default Header;
