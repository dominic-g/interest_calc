import React, { useState } from 'react';
import './styles.css';

const DailyCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [days, setDays] = useState('');
  const [forexRate, setForexRate] = useState('');
  const [result, setResult] = useState(null);

  const calculateDailyCompound = () => {
    const compoundedAmount = principal * Math.pow(1 + rate / 100 / 365, days);
    const finalAmount = compoundedAmount * (forexRate || 1);
    setResult({ compoundedAmount, finalAmount });
  };

  return (
    <div className="calculator-page">
      <div className="input-section">
        <h2>Daily & Forex Compound Calculator</h2>
        <label>Principal:</label>
        <input value={principal} onChange={(e) => setPrincipal(e.target.value)} type="number" />
        <label>Rate (% per year):</label>
        <input value={rate} onChange={(e) => setRate(e.target.value)} type="number" />
        <label>Days:</label>
        <input value={days} onChange={(e) => setDays(e.target.value)} type="number" />
        <label>Forex Rate (Optional):</label>
        <input value={forexRate} onChange={(e) => setForexRate(e.target.value)} type="number" />
        <button onClick={calculateDailyCompound}>Calculate</button>
      </div>

      <div className="output-section">
        <h2>Calculation Breakdown</h2>
        {result && (
          <div>
            <p>Compounded Amount: {result.compoundedAmount.toFixed(2)}</p>
            <p>Amount with Forex Rate: {result.finalAmount.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyCalculator;
