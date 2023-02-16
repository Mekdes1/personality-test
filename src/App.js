import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPage from "./container/landingScreen";
import QuestionPage from "./container/questionPage";
import FinalResult from "./container/finalResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/result" element={<FinalResult />} />
      </Routes>
    </Router>
  );
}

export default App;
