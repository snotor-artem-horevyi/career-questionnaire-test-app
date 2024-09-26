import ComparisonQuestion from "./ComparisonQuestion";
import SingleQuestion from "./SingleQuestion";
import Button from "../form/Button";

export default function QuestionnaireForm({
  questions,
  language,
  answers,
  setAnswers,
  finish,
}) {
  const onAnswer = (questionId, answer) => {
    const updatedAnswers = { ...answers };

    if (!answer) {
      delete updatedAnswers[questionId];
      return;
    }

    updatedAnswers[questionId] = answer;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="p-2 w-full">
      <h1 className="pb-4 text-2xl font-bold text-center uppercase">Career Questionnaire</h1>
      <form>
        {questions.map(
          (question) =>
            ({
              "single-choice": (
                <SingleQuestion
                  question={question}
                  language={language}
                  key={question.id}
                  answers={answers}
                  onAnswer={onAnswer}
                />
              ),
              comparison: (
                <ComparisonQuestion
                  question={question}
                  language={language}
                  key={question.id}
                  answers={answers}
                  onAnswer={onAnswer}
                />
              ),
            })[question.type]
        )}
        <Button label="FINISH" onClick={finish} />
      </form>
    </div>
  );
}
