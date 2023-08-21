import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TitlePage from "./pages/TitlePage";
import QuestionsPage from "./pages/QuestionsPage";

const App = () => {
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

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<TitlePage
								changeNumOfQuestions={changeNumOfQuestions}
								changeDifficulty={changeDifficulty}
								changeCategory={changeCategory}
							/>
						}
					/>
					<Route
						path="questions"
						element={
							<QuestionsPage
								numOfQuestions={numOfQuestions}
								difficulty={difficulty}
								category={category}
								changeNumOfQuestions={changeNumOfQuestions}
								changeDifficulty={changeDifficulty}
								changeCategory={changeCategory}
							/>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
