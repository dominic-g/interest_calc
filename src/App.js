import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SimpleCompoundCalculator from './components/SimpleCompoundCalculator';
import DailyForexCalculator from './components/DailyForexCalculator';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Simple & Compound Calculator</Link>
          <Link to="/daily-forex">Daily & Forex Calculator</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SimpleCompoundCalculator />} />
          <Route path="/daily-forex" element={<DailyForexCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

