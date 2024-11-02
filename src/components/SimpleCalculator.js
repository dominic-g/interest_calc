import React, { useState } from 'react';
import InvestmentResults from './calc/InvestmentResults';
import './styles.css';

const SimpleCalculator = () => {
  

  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compounded, setCompounded] = useState(false);
  const [result, setResult] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateInterest = () => {
    let interest, futureValue;
    if (compounded) {
      futureValue = principal * Math.pow(1 + rate / 100, time);
      interest = futureValue - principal;
    } else {
      interest = (principal * rate * time) / 100;
      futureValue = parseFloat(principal) + interest;
    }

    setResult(futureValue.toFixed(2));
    setTotalInterest(interest.toFixed(2));
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

        {result && (
          <InvestmentResults
            futureInvestmentValue={result}
            totalInterestEarned={totalInterest}
            initialBalance={principal}
            yearlyRate={rate}
            compoundedRate={compounded ? (Math.pow(1 + rate / 100, 1) - 1) * 100 : rate}
            allTimeRateOfReturn={((result - principal) / principal) * 100}
            timeToDoubleInvestment={compounded ? (72 / rate).toFixed(1) : (100 / rate).toFixed(1)}
            monthlyBreakdown={[]} // Placeholder: pass actual monthly breakdown data
            yearlyBreakdown={[]}  // Placeholder: pass actual yearly breakdown data
          />
        )}
      </div>
    </div>
  );
};

export default SimpleCalculator;
