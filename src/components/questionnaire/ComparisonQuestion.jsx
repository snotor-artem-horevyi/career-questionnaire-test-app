import Input from "../form/Input";

export default function ComparisonQuestion({
  question,
  answers,
  language,
  onAnswer,
  position,
  total,
}) {
  return (
    <fieldset className="mb-5" key={question.id}>
      <legend className="block text-lg font-medium mb-2">
        <span className="mr-2">
          <b>{position}</b> / <b>{total}</b>
        </span>

        {question[language].question}
      </legend>

      <div className="grid grid-cols-2">
        {question[language].pairs.map((pair, i) => (
          <div
            key={question.id + i}
            className="col-span-2 grid grid-cols-2 gap-3 my-1 p-1 pb-2 border-b border-dashed"
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
