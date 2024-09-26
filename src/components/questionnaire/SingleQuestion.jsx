import Input from "../form/Input";

export default function SingleQuestion({ question, answers, language, onAnswer }) {

  return (
    <fieldset className="mb-5" key={question.id}>
      <legend className="block text-lg font-medium mb-2">
        {question[language].question}
      </legend>

      <div className="">
        {question[language].options.map((option, i) => (
          <div
            key={question.id + i}
            className="my-1 border rounded p-1"
          >
            <Input
              type="radio"
              label={option}
              name={question.id}
              value={question.en.options[i]}
              checked={answers[question.id] === question.en.options[i]}
              onChange={(e) => { onAnswer(question.id, e.target.value); }}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}
