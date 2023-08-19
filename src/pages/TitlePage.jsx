import React from "react";
import QuizForm from "../components/QuizForm";

const TitlePage = ({
	changeNumOfQuestions,
	changeDifficulty,
	changeCategory,
}) => {
	return (
		<QuizForm
			changeNumOfQuestions={changeNumOfQuestions}
			changeDifficulty={changeDifficulty}
			changeCategory={changeCategory}
		/>
	);
};

export default TitlePage;
