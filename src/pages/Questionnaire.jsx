import questionsData from "../questionnaire.json";
import careerData from "../careers-scoring.json";
import QuestionnaireForm from "../components/questionnaire/QuestionnaireForm";
import QuestionnaireResults from "../components/questionnaire/QuestionnaireResults";
import Select from "../components/form/Select";
import { ReactComponent as GlobeSvg } from "../assets/globe.svg";
import React, { useState, useEffect } from "react";

export default function QuestionnairePage() {
  const [answers, setAnswers] = useState({});
  const [careers, setCareers] = useState({});
  const [isFinished, setIsfinished] = useState(false);
  const [language, setLanguage] = useState("en");

  const languages = {
    en: "English",
    et: "Eesti keel",
    ru: "Русский",
  };

  useEffect(() => {
    const careersPaths = {};
    for (const career of careerData.careerPaths) {
      careersPaths[career.id] = career;
    }
    setCareers(careersPaths);
  }, []);

  useEffect(() => {
    if (isFinished) {
      // Send an event to Google Analytics
      console.table({
        event: "questionnaire_submitted",
        answers,
      });
      // gtag('event', 'questionnaire_submitted', { answers });
    }
  }, [isFinished, answers]);

  return (
    <div className="mx-auto w-[600px] py-2">
      <div className="flex gap-1 justify-center items-center">
        <Select
          label=""
          name="language"
          options={languages}
          selected={language}
          onChange={setLanguage}
          className=""
        />
        <GlobeSvg />
      </div>

      {isFinished ? (
        <QuestionnaireResults
          answers={answers}
          careers={careers}
          language={language}
          scoring={careerData.scoring}
          goBack={() => setIsfinished(false)}
        />
      ) : (
        <QuestionnaireForm
          questions={questionsData.questions}
          language={language}
          answers={answers}
          setAnswers={setAnswers}
          finish={() => setIsfinished(true)}
        />
      )}
    </div>
  );
}
