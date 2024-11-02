import React from 'react';

function changeBreakdown(option) {
  const yearlyAmortization = document.getElementById("yearlyAmortization");
  const monthlyAmortization = document.getElementById("monthlyAmortization");

  if (option === 1) {
    yearlyAmortization.style.display = "none";
    monthlyAmortization.style.display = "table";
  } else {
    monthlyAmortization.style.display = "none";
    yearlyAmortization.style.display = "table";
  }
}

function toggleAmortisation() {
  const amortisationTable = document.getElementById("amortisationTable");
  const graphContainer = document.getElementById("graphContainer");
  const amortisationToggle = document.getElementById("amortisationToggle");
  const graphToggle = document.getElementById("graphToggle");
  const showTableInput = document.querySelector('input[name="showTable"]');
  const showChartInput = document.querySelector('input[name="showChart"]');

  amortisationTable.style.display = "block";
  graphContainer.style.display = "none";
  amortisationToggle.classList.add("highlightIcon");
  graphToggle.classList.remove("highlightIcon");

  if (showTableInput) showTableInput.value = '1';
  if (showChartInput) showChartInput.value = '0';
}

const InvestmentResults = ({
  futureInvestmentValue,
  totalInterestEarned,
  initialBalance,
  yearlyRate,
  compoundedRate,
  allTimeRateOfReturn,
  timeToDoubleInvestment,
  monthlyBreakdown,
  yearlyBreakdown
}) => {
  return (
    <div id="results1" className="calculator_results" style={{ marginBottom: 0 }}>
      <h2>Interest calculation for 5 years</h2>
      <div className="wrapper">
        <div className="one">
          Future investment value
          <button className="btn resultCopy hideFromPrint" data-clipboard-text={`$${futureInvestmentValue}`} />
          <span className="projectionFigure" style={{ color: 'var(--tcs-green)' }}>${futureInvestmentValue}</span> 
          Total interest earned
          <button className="btn resultCopy hideFromPrint" data-clipboard-text={`$${totalInterestEarned}`} />
          <span className="projectionFigure" style={{ color: 'var(--tcs-darkorange)' }}>${totalInterestEarned}</span> 
          Initial balance
          <span className="projectionFigure" style={{ color: 'var(--tcs-blue)' }}>${initialBalance}</span>
        </div>
        
        <div className="two">
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>
              <span>Yearly rate →</span>
              <span style={{ color: 'var(--tcs-darkorange)' }}>Compounded rate</span>
            </span>
            <span className="projectionFigure" style={{ display: 'inline-block' }}>
              <span>{yearlyRate}%</span>
              <svg style={{ fill: 'currentColor', width: 20, height: 20, marginLeft: 7, marginRight: 0 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M435.3 267.3L446.6 256l-11.3-11.3-168-168L256 65.4 233.4 88l11.3 11.3L385.4 240 16 240 0 240l0 32 16 0 369.4 0L244.7 412.7 233.4 424 256 446.6l11.3-11.3 168-168z" />
              </svg>
              <span style={{ color: 'var(--tcs-orange)' }}>{compoundedRate}%</span>
            </span>
            <span id="apyInfo">The compounded rate ({compoundedRate}%) is the effective yearly rate you earn on your investment after compounding. In comparison, the {yearlyRate}% rate is the nominal yearly rate <strong>before</strong> compounding.</span>
          </span>
          All-time rate of return (RoR)
          <br />
          <span className="projectionFigure" style={{ display: 'inline-block' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="var(--tcs-green)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm17-393L385 231l17 17L368 281.9l-17-17-71-71V376v24H232V376 193.9l-71 71-17 17L110.1 248l17-17L239 119l17-17 17 17z" />
            </svg>
            {allTimeRateOfReturn}%
          </span>
          <span id="rorInfo">
            The RoR represents the profit or loss % returned from your investment over the entire investment term. 
            <a href="#rorTWR" onClick={() => window.scrollTo({ top: document.querySelector('#rorTWR').offsetTop, behavior: 'smooth' })}>Learn more</a>.
          </span>
          <div style={{ border: 0 }}>
            <svg id="scrollBackUp" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM379.3 276.7l-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 198.6 356.7 299.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z" />
            </svg>
            Time needed to double investment
            <br />
            <span className="projectionFigure" style={{ fontSize: 25, lineHeight: 1.3, verticalAlign: 'top' }}>
              {timeToDoubleInvestment} years, 11 months
            </span>
          </div>
        </div>
      </div>

      <form id="breakdownOptions">
        <span className="radio-switch">
          <input type="radio" id="radio-months" name="breakdown" onClick={() => changeBreakdown(1)} />
          <label htmlFor="radio-months">monthly</label>
          <input type="radio" id="radio-years" name="breakdown" defaultChecked onClick={() => changeBreakdown(2)} />
          <label htmlFor="radio-years">yearly</label>
        </span>
      </form>

      <span id="toggleOptions">
        <span id="amortisationToggle" className="toggleIcons highlightIcon pulse" onClick={() => toggleAmortisation()}></span>
      </span>
      <span style={{ display: 'block', clear: 'both' }}></span>

      <div id="summaryContainer">
        <div className="containerTitle">Summary</div>
        <span>Initial deposit:</span>${initialBalance}
        <br />
        <span>Interest rate:</span>{yearlyRate}% yearly
        <br />
        <span>Effective Rate:</span>{compoundedRate}%
        <br />
        <div id="effectiveFAQ">
          The effective annual rate (APY) is the yearly rate of interest/earnings that you receive on your investment after compounding has been included.
          <a href="#effectiveRate" onClick={() => window.scrollTo({ top: document.querySelector('#effectiveRate').offsetTop, behavior: 'smooth' })}>Learn more</a>
        </div>
        <span>Time:</span>5 years
        <br />
        <span>Compounding:</span>Monthly
      </div>

      <div id="targetContainer">
        <div className="containerTitle">Make the most of compound interest</div>
        <ul style={{ margin: '15px 0 0' }}>
          <li>Start investing early.</li>
          <li>Make regular contributions if possible.</li>
          <li>Consider tax-efficient savings products with more frequent compounding.</li>
        </ul>
      </div>

      <div id="amortisationTable">
        <table id="monthlyAmortization" className="shadowOutline">
          <caption>Monthly breakdown</caption>
          <tbody>
            <tr>
              <th>Month</th>
              <th>Deposits & Withdrawals</th>
              <th>Interest</th>
              <th>Total Deposits & Withdrawals</th>
              <th>Accrued Interest</th>
              <th>Balance</th>
            </tr>
            {monthlyBreakdown.map((month, index) => (
              <tr key={index}>
                <td>{month.month}</td>
                <td className="periodDeposits">{month.deposits}</td>
                <td className="earnings">{month.interest}</td>
                <td className="totalDeposits">{month.totalDeposits}</td>
                <td>{month.accruedInterest}</td>
                <td>{month.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table id="yearlyAmortization" className="shadowOutline">
          <caption>Yearly breakdown</caption>
          <tbody>
            <tr>
              <th>Year</th>
              <th>Deposits & Withdrawals</th>
              <th>Interest</th>
              <th>Total Deposits & Withdrawals</th>
              <th>Accrued Interest</th>
              <th>Balance</th>
            </tr>
            {yearlyBreakdown.map((year, index) => (
              <tr key={index}>
                <td>{year.year}</td>
                <td className="periodDeposits">{year.deposits}</td>
                <td className="earnings">{year.interest}</td>
                <td className="totalDeposits">{year.totalDeposits}</td>
                <td>{year.accruedInterest}</td>
                <td>{year.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestmentResults;
