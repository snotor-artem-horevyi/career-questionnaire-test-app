import Input from "../form/Input";

export default function ComparisonQuestion({
  question,
  answers,
  language,
  onAnswer,
}) {
  return (
    <fieldset className="mb-5" key={question.id}>
      <legend className="block text-lg font-medium mb-2">
        {question[language].question}
      </legend>

      <div className="grid grid-cols-2">
        {question[language].pairs.map((pair, i) => (
          <div
            key={question.id + i}
            className="col-span-2 grid grid-cols-2 gap-1 my-1 border rounded p-1"
          >
            <Input
              type="radio"
              label={`A. ${pair.a}`}
              name={question.en.pairs[i].a}
              value="a"
              checked={answers[`${question.id}.${pair.id}`] === "a"}
              onChange={(e) => {
                onAnswer(`${question.id}.${pair.id}`, e.target.value);
              }}
              />
            <Input
              type="radio"
              label={`B. ${pair.b}`}
              name={question.en.pairs[i].b}
              value="b"
              checked={answers[`${question.id}.${pair.id}`] === "b"}
              onChange={(e) => {
                onAnswer(`${question.id}.${pair.id}`, e.target.value);
              }}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}
