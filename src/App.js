import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SimpleCalculator from './components/SimpleCalculator';
import DailyCalculator from './components/DailyCalculator';
import CompoundCalculator from './components/CompoundCalculator';
import ForexCalculator from './components/ForexCalculator';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/simple">Simple</Link>
          <Link to="/compound">Compound</Link>
          <Link to="/daily">Daily Compound</Link>
          <Link to="/forex">Forex Compound</Link>
        </nav>
        <hr class="mb"/>
        <Routes>
          <Route path="/" element={<SimpleCalculator />} />
          <Route path="/simple" element={<SimpleCalculator />} />
          <Route path="/compound" element={<CompoundCalculator />} />
          <Route path="/daily" element={<DailyCalculator />} />
          <Route path="/forex" element={<ForexCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

