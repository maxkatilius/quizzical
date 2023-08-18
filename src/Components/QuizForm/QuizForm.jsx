import React from "react";

const QuizForm = () => {
	return (
		<div className="quizSettings">
			<div className="numOfQuestionsContainer">
				<label htmlFor="numOfQuestions">Number of Questions:</label>
				<select
					id="numOfQuestions"
					name="numOfQuestions"
					defaultValue="5"
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
			</div>

			<div className="difficultyContainer">
				<label htmlFor="difficulty">Difficulty:</label>
				<select id="difficulty" name="difficulty">
					<option value="">Any Difficulty</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</div>

			<div className="categoryContainer">
				<label htmlFor="category">Category:</label>
				<select id="category" name="category">
					<option value="">Any Category</option>
					<option value="9">General Knowledge</option>
					<option value="10">Books</option>
					<option value="11">Film</option>
					<option value="12">Music</option>
					<option value="13">Musicals & Theatres</option>
					<option value="14">Television</option>
					<option value="15">Video Games</option>
					<option value="16">Board Games</option>
					<option value="17">Science & Nature</option>
					<option value="18">Computers</option>
					<option value="19">Mathematics</option>
					<option value="20">Mythology</option>
					<option value="21">Sports</option>
					<option value="22">Geography</option>
					<option value="23">History</option>
					<option value="24">Politics</option>
					<option value="25">Art</option>
					<option value="26">Celebrities</option>
					<option value="27">Animals</option>
					<option value="28">Vehicles</option>
					<option value="29">Comics</option>
					<option value="30">Gadgets</option>
					<option value="31">Japanese Anime & Manga</option>
					<option value="32">Cartoon & Animations</option>
				</select>
			</div>
		</div>
	);
};

export default QuizForm;
