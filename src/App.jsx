import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TodoPage from './pages/TodoPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
