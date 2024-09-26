import QuestionnairePage from "./pages/Questionnaire";
// import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-row border-b">
      <Routes>
        <Route path="/" element={<QuestionnairePage />} />
      </Routes>
    </div>
  );
}

export default App;
