import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitlePage from "./Components/TitlePage/TitlePage";
import QuestionsPage from "./Components/QuestionsPage/QuestionsPage";

const App = () => {
	const [currentPage, setCurrentPage] = React.useState("title-page");
	const [numOfQuestions, setNumOfQuesetions] = React.useState("5");
	const [difficulty, setDifficulty] = React.useState("");
	const [category, setCategory] = React.useState("");

	function changeNumOfQuestions(num) {
		setNumOfQuesetions(num);
	}

	function changeDifficulty(difficulty) {
		setDifficulty(difficulty);
	}

	function changeCategory(category) {
		setCategory(category);
	}

	function changePage(Component) {
		setCurrentPage(Component);
	}

	let selectedPage;
	if (currentPage === "title-page") {
		selectedPage = (
			<TitlePage
				changeNumOfQuestions={changeNumOfQuestions}
				changeDifficulty={changeDifficulty}
				changeCategory={changeCategory}
				changePage={(Component) => {
					changePage(Component);
				}}
			/>
		);
	} else if (currentPage === "questions-page") {
		selectedPage = (
			<QuestionsPage
				numOfQuestions={numOfQuestions}
				difficulty={difficulty}
				category={category}
			/>
		);
	}

	return <main id="main">{selectedPage}</main>;
};

export default App;
