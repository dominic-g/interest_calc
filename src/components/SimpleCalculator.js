import React, { useState } from 'react';
import './styles.css';

const SimpleCalculator = () => {
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
        <div id="results1" class="calculator_results" style="margin-bottom:0">
          <h2>Interest calculation for 5 years</h2>
          <div class="wrapper">
              <div class="one">Future investment value<br/><button class="btn resultCopy hideFromPrint" data-clipboard-text="$6,416.79"></button>
                  <span class="projectionFigure" style="color:var(--tcs-green)">$6,416.79</span> Total interest earned<br/><button class="btn resultCopy hideFromPrint" data-clipboard-text="$1,416.79"></button>
                  <span class="projectionFigure" style="color:var(--tcs-darkorange)">$1,416.79</span> Initial balance<br/><span class="projectionFigure" style="color:var(--tcs-blue)">$5,000.00</span></div>
              <div class="two"><span style="display:block"><span style="display:block"><span>Yearly rate →</span>
                  <span style="color:var(--tcs-darkorange)">Compounded rate</span></span>
                  <span class="projectionFigure" style="display:inline-block"><span>5%</span><svg style="fill:currentColor; width:20px; height:20px; margin-left:7px; margin-right:0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M435.3 267.3L446.6 256l-11.3-11.3-168-168L256 65.4 233.4 88l11.3 11.3L385.4 240 16 240 0 240l0 32 16 0 369.4 0L244.7 412.7 233.4 424 256 446.6l11.3-11.3 168-168z"></path></svg>
                  <span style="color:var(--tcs-orange)">5.12%</span></span>
                  <span id="apyInfo">The compounded rate (5.12%) is the effective yearly rate you earn on your investment after compounding. In comparison, the 5% rate is the nominal yearly rate <strong>before</strong> compounding.</span></span>
                  All-time rate of return (RoR)<br/><span class="projectionFigure" style="display:inline-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="var(--tcs-green)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm17-393L385 231l17 17L368 281.9l-17-17-71-71V376v24H232V376 193.9l-71 71-17 17L110.1 248l17-17L239 119l17-17 17 17z"></path></svg>28.34%</span>
                  <span id="rorInfo">The RoR represents the profit or loss % returned from your investment over the entire investment term. <a href="#rorTWR" onclick="$.scrollTo('#rorTWR',1000,{'axis':'y'});return false;">Learn more</a>.</span>
                  <div style="border:0"><svg id="scrollBackUp" onclick="$.scrollTo('#scrollTop',500, {'axis':'y'}); return false;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM379.3 276.7l-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 198.6 356.7 299.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"></path></svg>Time needed to double investment<br/><span class="projectionFigure" style="font-size:25px;line-height:1.3;vertical-align:top">13 years, 11 months</span></div>
              </div>
          </div>
          <form id="breakdownOptions">
            <span class="radio-switch">
              <input type="radio" id="radio-months" name="breakdown" onclick="changeBreakdown(1)"/>
              <label for="radio-months">monthly</label>
              <input type="radio" id="radio-years" name="breakdown" checked="" onclick="changeBreakdown(2)"/>
              <label for="radio-years">yearly</label>
            </span>
          </form>
          <span id="toggleOptions">
            <span id="amortisationToggle" class="toggleIcons highlightIcon pulse" onclick="toggleAmortisation();">
              
            </span>
          </span>
          <span style="display:block;clear:both"></span>
          <div id="summaryContainer">
            <div class="containerTitle">Summary
            </div>
            <span>Initial deposit:</span>$5,000.00<br/><span>Interest rate:</span>5% yearly<br/><span>Effective Rate:</span>5.12%<br/>
            <div id="effectiveFAQ">The effective annual rate (APY) is the yearly rate of interest/earnings that you receive on your investment after compounding has been included.
              <a href="#effectiveRate" onclick="$.scrollTo('#effectiveRate',1200,{'axis':'y'});return false;">Learn more</a>
            </div><span>Time:</span>5 years<br/><span>Compounding:</span>Monthly
          </div>
          <div id="targetContainer">
              <div class="containerTitle">Make the most of compound interest</div>
              <ul style="margin:15px 0 0">
                  <li>Start investing early.</li>
                  <li>Make regular contributions if possible.</li>
                  <li>Consider tax-efficient savings products with more frequent compounding.</li>
                  <li><a href="#what-is" onclick="scrollToInfo('what-is');return false;">What is compound interest?</a> | <a href="#growth-strategies" onclick="scrollToInfo('growth-strategies');return false;">Making it work for you</a>.</li>
              </ul>
          </div>
          <div id="amortisationTable">
            <table id="monthlyAmortization" class="shadowOutline">
                <caption>Monthly breakdown</caption>
                <tbody>
                    <tr>
                        <th>Month</th>
                        <th>Deposits &amp;<br/>Withdrawals</th>
                        <th>Interest</th>
                        <th>Total Deposits &amp; Withdrawals</th>
                        <th>Accrued<br/>Interest</th>
                        <th>Balance</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td class="periodDeposits">$5,000.00</td>
                        <td class="earnings">–</td>
                        <td class="totalDeposits">$5,000.00</td>
                        <td>–</td>
                        <td>$5,000.00</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$20.83</td>
                        <td class="totalDeposits"></td>
                        <td>$20.83</td>
                        <td>$5,020.83</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$20.92</td>
                        <td class="totalDeposits"></td>
                        <td>$41.75</td>
                        <td>$5,041.75</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.01</td>
                        <td class="totalDeposits"></td>
                        <td>$62.76</td>
                        <td>$5,062.76</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.09</td>
                        <td class="totalDeposits"></td>
                        <td>$83.86</td>
                        <td>$5,083.86</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.18</td>
                        <td class="totalDeposits"></td>
                        <td>$105.04</td>
                        <td>$5,105.04</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.27</td>
                        <td class="totalDeposits"></td>
                        <td>$126.31</td>
                        <td>$5,126.31</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.36</td>
                        <td class="totalDeposits"></td>
                        <td>$147.67</td>
                        <td>$5,147.67</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.45</td>
                        <td class="totalDeposits"></td>
                        <td>$169.12</td>
                        <td>$5,169.12</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.54</td>
                        <td class="totalDeposits"></td>
                        <td>$190.66</td>
                        <td>$5,190.66</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.63</td>
                        <td class="totalDeposits"></td>
                        <td>$212.28</td>
                        <td>$5,212.28</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.72</td>
                        <td class="totalDeposits"></td>
                        <td>$234.00</td>
                        <td>$5,234.00</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.81</td>
                        <td class="totalDeposits"></td>
                        <td>$255.81</td>
                        <td>$5,255.81</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.90</td>
                        <td class="totalDeposits"></td>
                        <td>$277.71</td>
                        <td>$5,277.71</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$21.99</td>
                        <td class="totalDeposits"></td>
                        <td>$299.70</td>
                        <td>$5,299.70</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.08</td>
                        <td class="totalDeposits"></td>
                        <td>$321.78</td>
                        <td>$5,321.78</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.17</td>
                        <td class="totalDeposits"></td>
                        <td>$343.96</td>
                        <td>$5,343.96</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.27</td>
                        <td class="totalDeposits"></td>
                        <td>$366.22</td>
                        <td>$5,366.22</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.36</td>
                        <td class="totalDeposits"></td>
                        <td>$388.58</td>
                        <td>$5,388.58</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.45</td>
                        <td class="totalDeposits"></td>
                        <td>$411.03</td>
                        <td>$5,411.03</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.55</td>
                        <td class="totalDeposits"></td>
                        <td>$433.58</td>
                        <td>$5,433.58</td>
                    </tr>
                    <tr>
                        <td>21</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.64</td>
                        <td class="totalDeposits"></td>
                        <td>$456.22</td>
                        <td>$5,456.22</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.73</td>
                        <td class="totalDeposits"></td>
                        <td>$478.95</td>
                        <td>$5,478.95</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.83</td>
                        <td class="totalDeposits"></td>
                        <td>$501.78</td>
                        <td>$5,501.78</td>
                    </tr>
                    <tr>
                        <td>24</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$22.92</td>
                        <td class="totalDeposits"></td>
                        <td>$524.71</td>
                        <td>$5,524.71</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.02</td>
                        <td class="totalDeposits"></td>
                        <td>$547.73</td>
                        <td>$5,547.73</td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.12</td>
                        <td class="totalDeposits"></td>
                        <td>$570.84</td>
                        <td>$5,570.84</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.21</td>
                        <td class="totalDeposits"></td>
                        <td>$594.05</td>
                        <td>$5,594.05</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.31</td>
                        <td class="totalDeposits"></td>
                        <td>$617.36</td>
                        <td>$5,617.36</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.41</td>
                        <td class="totalDeposits"></td>
                        <td>$640.77</td>
                        <td>$5,640.77</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.50</td>
                        <td class="totalDeposits"></td>
                        <td>$664.27</td>
                        <td>$5,664.27</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.60</td>
                        <td class="totalDeposits"></td>
                        <td>$687.87</td>
                        <td>$5,687.87</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.70</td>
                        <td class="totalDeposits"></td>
                        <td>$711.57</td>
                        <td>$5,711.57</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.80</td>
                        <td class="totalDeposits"></td>
                        <td>$735.37</td>
                        <td>$5,735.37</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$23.90</td>
                        <td class="totalDeposits"></td>
                        <td>$759.27</td>
                        <td>$5,759.27</td>
                    </tr>
                    <tr>
                        <td>35</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.00</td>
                        <td class="totalDeposits"></td>
                        <td>$783.26</td>
                        <td>$5,783.26</td>
                    </tr>
                    <tr>
                        <td>36</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.10</td>
                        <td class="totalDeposits"></td>
                        <td>$807.36</td>
                        <td>$5,807.36</td>
                    </tr>
                    <tr>
                        <td>37</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.20</td>
                        <td class="totalDeposits"></td>
                        <td>$831.56</td>
                        <td>$5,831.56</td>
                    </tr>
                    <tr>
                        <td>38</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.30</td>
                        <td class="totalDeposits"></td>
                        <td>$855.86</td>
                        <td>$5,855.86</td>
                    </tr>
                    <tr>
                        <td>39</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.40</td>
                        <td class="totalDeposits"></td>
                        <td>$880.26</td>
                        <td>$5,880.26</td>
                    </tr>
                    <tr>
                        <td>40</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.50</td>
                        <td class="totalDeposits"></td>
                        <td>$904.76</td>
                        <td>$5,904.76</td>
                    </tr>
                    <tr>
                        <td>41</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.60</td>
                        <td class="totalDeposits"></td>
                        <td>$929.36</td>
                        <td>$5,929.36</td>
                    </tr>
                    <tr>
                        <td>42</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.71</td>
                        <td class="totalDeposits"></td>
                        <td>$954.07</td>
                        <td>$5,954.07</td>
                    </tr>
                    <tr>
                        <td>43</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.81</td>
                        <td class="totalDeposits"></td>
                        <td>$978.87</td>
                        <td>$5,978.87</td>
                    </tr>
                    <tr>
                        <td>44</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$24.91</td>
                        <td class="totalDeposits"></td>
                        <td>$1,003.79</td>
                        <td>$6,003.79</td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.02</td>
                        <td class="totalDeposits"></td>
                        <td>$1,028.80</td>
                        <td>$6,028.80</td>
                    </tr>
                    <tr>
                        <td>46</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.12</td>
                        <td class="totalDeposits"></td>
                        <td>$1,053.92</td>
                        <td>$6,053.92</td>
                    </tr>
                    <tr>
                        <td>47</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.22</td>
                        <td class="totalDeposits"></td>
                        <td>$1,079.15</td>
                        <td>$6,079.15</td>
                    </tr>
                    <tr>
                        <td>48</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.33</td>
                        <td class="totalDeposits"></td>
                        <td>$1,104.48</td>
                        <td>$6,104.48</td>
                    </tr>
                    <tr>
                        <td>49</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.44</td>
                        <td class="totalDeposits"></td>
                        <td>$1,129.91</td>
                        <td>$6,129.91</td>
                    </tr>
                    <tr>
                        <td>50</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.54</td>
                        <td class="totalDeposits"></td>
                        <td>$1,155.45</td>
                        <td>$6,155.45</td>
                    </tr>
                    <tr>
                        <td>51</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.65</td>
                        <td class="totalDeposits"></td>
                        <td>$1,181.10</td>
                        <td>$6,181.10</td>
                    </tr>
                    <tr>
                        <td>52</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.75</td>
                        <td class="totalDeposits"></td>
                        <td>$1,206.86</td>
                        <td>$6,206.86</td>
                    </tr>
                    <tr>
                        <td>53</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.86</td>
                        <td class="totalDeposits"></td>
                        <td>$1,232.72</td>
                        <td>$6,232.72</td>
                    </tr>
                    <tr>
                        <td>54</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$25.97</td>
                        <td class="totalDeposits"></td>
                        <td>$1,258.69</td>
                        <td>$6,258.69</td>
                    </tr>
                    <tr>
                        <td>55</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$26.08</td>
                        <td class="totalDeposits"></td>
                        <td>$1,284.77</td>
                        <td>$6,284.77</td>
                    </tr>
                    <tr>
                        <td>56</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$26.19</td>
                        <td class="totalDeposits"></td>
                        <td>$1,310.95</td>
                        <td>$6,310.95</td>
                    </tr>
                    <tr>
                        <td>57</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$26.30</td>
                        <td class="totalDeposits"></td>
                        <td>$1,337.25</td>
                        <td>$6,337.25</td>
                    </tr>
                    <tr>
                        <td>58</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$26.41</td>
                        <td class="totalDeposits"></td>
                        <td>$1,363.65</td>
                        <td>$6,363.65</td>
                    </tr>
                    <tr>
                        <td>59</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$26.52</td>
                        <td class="totalDeposits"></td>
                        <td>$1,390.17</td>
                        <td>$6,390.17</td>
                    </tr>
                    <tr>
                        <td>60</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$26.63</td>
                        <td class="totalDeposits"></td>
                        <td>$1,416.79</td>
                        <td>$6,416.79</td>
                    </tr>
                </tbody>
            </table>
            <table id="yearlyAmortization" class="shadowOutline">
                <caption>Yearly breakdown</caption>
                <tbody>
                    <tr>
                        <th>Year</th>
                        <th>Deposits &amp;<br/>Withdrawals</th>
                        <th>Interest</th>
                        <th>Total Deposits &amp; Withdrawals</th>
                        <th>Accrued<br/>Interest</th>
                        <th>Balance</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td class="periodDeposits">$5,000.00</td>
                        <td class="earnings">–</td>
                        <td class="totalDeposits">$5,000.00</td>
                        <td>–</td>
                        <td>$5,000.00</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$255.81</td>
                        <td class="totalDeposits"></td>
                        <td>$255.81</td>
                        <td>$5,255.81</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$268.90</td>
                        <td class="totalDeposits"></td>
                        <td>$524.71</td>
                        <td>$5,524.71</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$282.65</td>
                        <td class="totalDeposits"></td>
                        <td>$807.36</td>
                        <td>$5,807.36</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$297.12</td>
                        <td class="totalDeposits"></td>
                        <td>$1,104.48</td>
                        <td>$6,104.48</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td class="periodDeposits"></td>
                        <td class="earnings">$312.32</td>
                        <td class="totalDeposits"></td>
                        <td>$1,416.79</td>
                        <td>$6,416.79</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;
