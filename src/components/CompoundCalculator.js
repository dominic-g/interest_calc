import React, { useState } from 'react';
import './styles.css';

const CompoundCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compounded, setCompounded] = useState(false);
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    let interest;
    if (compounded) {
      interest = principal * Math.pow(1 + rate / 100, time) - principal;
    } else {
      interest = (principal * rate * time) / 100;
    }
    setResult(interest);
  };

  return (
    <div className="calculator-page">
      <div className="input-section">
        <h2>{compounded ? "Compound" : "Simple"} Interest Calculator</h2>
        <label>Principal:</label>
        <input value={principal} onChange={(e) => setPrincipal(e.target.value)} type="number" />
        <label>Rate (%):</label>
        <input value={rate} onChange={(e) => setRate(e.target.value)} type="number" />
        <label>Time (years):</label>
        <input value={time} onChange={(e) => setTime(e.target.value)} type="number" />
        <label>Compound Interest:</label>
        <input type="checkbox" checked={compounded} onChange={(e) => setCompounded(e.target.checked)} />
        <button onClick={calculateInterest}>Calculate</button>
      </div>

      <div className="output-section">
        <h2>Calculation Breakdown</h2>
        {result !== null && (
          <div>
            <p>Interest: {result.toFixed(2)}</p>
            <p>Total: {(parseFloat(principal) + result).toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompoundCalculator;
