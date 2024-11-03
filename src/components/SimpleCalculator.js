import React, { useState } from 'react';
import InvestmentResults from './calc/InvestmentResults';
import './styles.css';
import './main.css';

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


  function processCalc(fid) {
    console.log(fid);
   
    var formID = '#' + fid.id;
    var form = document.querySelector(formID);
    var curHeight = document.getElementById('resultDiv').offsetHeight;

    document.getElementById("resultContent").innerHTML = `
        <div style="text-align: -webkit-center; padding: 20px 0px;">
            <div class="lds-dual-ring"></div>
        </div>
    `;

    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var noScroll = 0;

    var formOffsetTop = form.getBoundingClientRect().top + window.scrollY;
    if (formOffsetTop < scrollPosition) {
        noScroll = 1;
    }

    var windowWidth = window.innerWidth;
    var maxDeviceWidth = 970;

    if (windowWidth < maxDeviceWidth) {
        var resultDiv = document.getElementById('resultDiv');
        if (document.getElementById('ezoic-pub-ad-placeholder-170')) {
            window.scrollTo({
                top: resultDiv.offsetTop - 140,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: resultDiv.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    console.log(new FormData(form));
    return false;
}


  return (
    <div className="calculator-page">
      
    <div id="form-left">
      <span className="calculator_form_wrapper tabsAbove" id="content1">
        <form
          method="post"
          name="form1"
          id="compoundcalc"
          acceptCharset="iso-8859-1"
          onSubmit={(event) => {event.preventDefault(); processCalc(event.target)}}

          autoComplete="off"
        >
          <div id="currencyBox" className="single-field-noHighlight" style={{ paddingTop: "15px" }}>
            <label htmlFor="currency" className="heading">Currency:</label>
            <span className="radio-switch">
              <input type="radio" id="radio-one" name="currency" value="dollar" defaultChecked />
              <label htmlFor="radio-one">$</label>
              <input type="radio" id="radio-two" name="currency" value="euro" />
              <label htmlFor="radio-two">€</label>
              <input type="radio" id="radio-three" name="currency" value="pound" />
              <label htmlFor="radio-three">£</label>
              <input type="radio" id="radio-four" name="currency" value="rupee" />
              <label htmlFor="radio-four">₹</label>
              <input type="radio" id="radio-five" name="currency" value="yen" />
              <label htmlFor="radio-five">¥</label>
              <input type="radio" id="radio-six" name="currency" value="none" />
              <label htmlFor="radio-six">&nbsp;</label>
            </span>
            <span className="clearElement"></span>
          </div>

          <div className="single-field">
            <label htmlFor="amount" className="heading">Initial investment:</label>
            <span className="currSymbol">$</span>
            <input
              type="number"
              step="any"
              name="amount"
              id="amount"
              defaultValue="5000"
              className="calculatorInput"
              tabIndex="0"
              required
              inputMode="decimal"
            />
            <span className="clearElement"></span>
          </div>

          <div className="single-field">
            <label htmlFor="percent" className="heading">Interest rate:</label>
            <input
              type="number"
              step="any"
              name="percent"
              id="percent"
              defaultValue="5"
              className="calculatorShortInput percentIcon"
              required
              inputMode="decimal"
            />
            <select name="percentPeriod" className="select_inline" defaultValue="yearly">
              <option value="daily">daily</option>
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
              <option value="quarterly">quarterly</option>
              <option value="yearly">annual</option>
            </select>
            <svg id="minusIR" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M432 280H408L40 280H16l0-48 24 0 368 0 24 0v48z"></path>
            </svg>
            <span className="clearElement"></span>
          </div>

          <div className="single-field-noHighlight compoundingOptions">
            <label htmlFor="calculateinterest" className="heading" style={{ display: "block" }}>
              Compound frequency:
            </label>
            <select name="calculateinterest" id="calculateinterest" required defaultValue="monthly">
              <option value="daily">Daily (365/yr)</option>
              <option value="daily360">Daily (360/yr)</option>
              <option value="semiweekly">Semi-Weekly (104/yr)</option>
              <option value="weekly">Weekly (52/yr)</option>
              <option value="biweekly">Bi-Weekly (26/yr)</option>
              <option value="halfmonthly">Semi-Monthly (24/yr)</option>
              <option value="monthly">Monthly (12/yr)</option>
              <option value="bimonthly">Bi-Monthly (6/yr)</option>
              <option value="quarterly">Quarterly (4/yr)</option>
              <option value="halfyearly">Half-Yearly (2/yr)</option>
              <option value="yearly">Yearly (1/yr)</option>
              <option value="custom">--Custom--</option>
            </select>
            <span className="clearElement"></span>
          </div>

          <svg id="customCompoundsArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
          </svg>

          <div id="customCompoundsBox" className="single-field-noHighlight compoundingOptions">
            <label htmlFor="customCompounds" style={{ display: "block" }}>Compounds / year:</label>
            <input
              type="number"
              min="1"
              max="365"
              placeholder="1-365"
              name="customCompounds"
              id="customCompounds"
              defaultValue="1"
              className="calculatorShortInput"
              inputMode="decimal"
              
            />
            <span className="clearElement"></span>
          </div>

        

          <span style={{ display: "block" }}>
            <div className="single-field-noHighlight yearsMonths" style={{ marginRight: "4px" }}>
              <label htmlFor="years" className="heading" style={{ display: "block" }}>Years:</label>
              <input
                type="number"
                step="any"
                min="0"
                max="999"
                name="years"
                id="years"
                defaultValue="5"
                className="calculatorShortInput"
                inputMode="decimal"
                placeholder="0"
              />
              <span className="clearElement"></span>
            </div>

            <div className="single-field-noHighlight yearsMonths" style={{ paddingLeft: 0 }}>
              <label htmlFor="months" className="heading" style={{ display: "block" }}>Months:</label>
              <input
                type="number"
                name="months"
                id="months"
                className="calculatorShortInput"
                inputMode="numeric"
                placeholder="0"
                onKeyDown={(event) => { if (event.key === ".") event.preventDefault(); }}
              />
            </div>

          </span>

          <span id="advancedOptionsDiv">
            <div className="single-field-noHighlight notRequired" style={{ paddingTop: "8px" }}>
              <label htmlFor="regtype" className="heading">Additional contributions:</label>
              <span className="radio-switch noOptional">
                <input type="radio" id="contribution-four" name="regtype" value="none" />
                <label htmlFor="contribution-four">None</label>
                <input type="radio" id="contribution-one" name="regtype" value="deposit" defaultChecked />
                <label htmlFor="contribution-one">Deposits</label>
                <input type="radio" id="contribution-two" name="regtype" value="withdraw" />
                <label htmlFor="contribution-two">Withdrawals</label>
              </span>
            </div>
          </span>

          <button
            className="submitButton"
            type="submit"
            id="calculateBtn"
            value="Calculate"
            style={{ marginTop: "20px" }}
          >
            Calculate
          </button>
        </form>
      </span>
    </div>



      <div id="resultDiv" className="output-section">
        <span id="resultContent">
          {result && (
            <InvestmentResults
              futureInvestmentValue={result}
              totalInterestEarned={totalInterest}
              initialBalance={principal}
              yearlyRate={rate}
              compoundedRate={compounded ? ((Math.pow(1 + rate / 100, 1) - 1) * 100).toFixed(2) : rate.toFixed(2)}
              allTimeRateOfReturn={(((result - principal) / principal) * 100).toFixed(2)}
              timeToDoubleInvestment={compounded ? (72 / rate).toFixed(1) : (100 / rate).toFixed(1)}
              monthlyBreakdown={[]} // Placeholder: pass actual monthly breakdown data
              yearlyBreakdown={[]}  // Placeholder: pass actual yearly breakdown data
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default SimpleCalculator;
