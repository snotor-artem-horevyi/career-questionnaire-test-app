import Input from "../form/Input";

export default function SingleQuestion({
  question,
  answers,
  language,
  onAnswer,
  position,
  total,
}) {
  return (
    <fieldset className="mb-5" key={question.id}>
      <legend className="flex items-center text-lg font-medium mb-2">
        <span className="mr-3 text-base text-nowrap">
          <b>{position}</b> / <b>{total}</b>
        </span>
        <span>{question[language].question}</span>
      </legend>

      <div className="pl-10">
        {question[language].options.map((option, i) => (
          <div key={question.id + i} className="my-1 ">
            <Input
              type="radio"
              label={option}
              name={question.id}
              value={question.en.options[i]}
              checked={answers[question.id] === question.en.options[i]}
              onChange={(e) => {
                onAnswer(question.id, e.target.value);
              }}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}
