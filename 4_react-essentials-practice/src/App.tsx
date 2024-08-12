import { ChangeEvent, useState } from 'react';
import Calculator from './components/Calculator/Calculator';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import { InvestmentResults, InvestmentValues } from './models/investment.model';
import { calculateInvestmentResults } from './utils/investment';

const INITIAL_INVESTMENT: InvestmentValues = {
  annualInvestment: 0,
  duration: 0,
  expectedReturn: 0,
  initialInvestment: 0
};

function App() {
  const [investmentValues, setInvestmentValues] = useState<InvestmentValues>(INITIAL_INVESTMENT);
  const [annualData, setAnnualData] = useState<InvestmentResults[]>([]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setInvestmentValues((prevState: InvestmentValues) => {
      const updatedInvestmentValues = { ...prevState, [id]: +value };
      const newAnnualData = calculateInvestmentResults(updatedInvestmentValues);

      setAnnualData(newAnnualData);

      return updatedInvestmentValues;
    });
  };

  const isValidInvestmenmtValues = (): boolean => {
    return investmentValues.duration >= 1;
  };

  return (
    <>
      <Header />
      <main>
        <Calculator investmentValues={investmentValues} onInputChange={onInputChange} />
        {!isValidInvestmenmtValues() && <p className="center">Please enter a duration greater than zero (0)</p>}
        {isValidInvestmenmtValues() && <Results annualData={annualData} />}
      </main>
    </>
  );
}

export default App;
