import React, { useState, useEffect } from "react";
import Button from "../form/Button";

export default function QuestionnaireResults({
  answers,
  careers,
  scoring,
  language,
  goBack,
}) {
  const [userScores, setUserScore] = useState({});

  const addUserScore = (store, career, score) => {
    const updated = { ...store };
    updated[career] = store[career] ? store[career] + score : score;
    return updated;
  };

  useEffect(() => {
    let scores = {};
    Object.keys(answers).forEach(function (questionId) {
      const question = questionId.split(".")[0];
      const subquestion = questionId.split(".")[1];
      const answer = answers[questionId];

      const scoresMap = subquestion
        ? scoring[question][subquestion]
        : scoring[question];

      if (!scoresMap) {
        return; // No score map found
      }

      for (const [scoreAnswer, careerPoints] of Object.entries(scoresMap)) {
        if (scoreAnswer === answer) {
          for (const [career, points] of Object.entries(careerPoints)) {
            scores = addUserScore(scores, career, points);
          }
        }
      }
    });

    setUserScore(scores);
  }, [answers, scoring]);

  return (
    <div className="p-2 w-full">
      <h1 className="my-2 pb-4 text-2xl font-bold text-center uppercase">
        Career Results
      </h1>

      <div className="grid grid-cols-2 gap-2 mb-2">
        {Object.keys(userScores)
          .map((key) => [key, userScores[key]])
          .sort((a, b) => b[1] - a[1])
          .map(obj => obj[0])
          .map((carrerId, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 border-2 rounded-lg"
              >
                <div className="text-lg">
                  {careers[carrerId][language] ?? "No title"}
                </div>
                <div className="text-2xl font-bold">
                  {userScores[carrerId] ?? "00"}
                </div>
              </div>
            );
          })}
      </div>

      <Button label="CHANGE ANSWERS" onClick={goBack} />
    </div>
  );
}
