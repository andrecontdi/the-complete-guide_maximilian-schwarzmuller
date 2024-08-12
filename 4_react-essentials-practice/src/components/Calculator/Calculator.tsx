import { ChangeEventHandler } from 'react';
import { InvestmentValues } from '../../models/investment.model';
import './Calculator.css';

interface CalculatorProps {
  investmentValues: InvestmentValues;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
}

const INPUTS_CONFIG: Record<string, string> = {
  initialInvestment: 'Initial Investment',
  annualInvestment: 'Annual Investment',
  expectedReturn: 'Expected Return',
  duration: 'Duration'
};

export default function Calculator({ investmentValues, onInputChange }: CalculatorProps) {
  return (
    <section id="user-input">
      {Object.entries(INPUTS_CONFIG).map(([key, value], index) => (
        <div key={index} className="input-group">
          <label>{value}</label>
          <input
            id={key}
            min="1"
            onChange={onInputChange}
            required
            type="number"
            value={investmentValues[key as keyof InvestmentValues]}
          />
        </div>
      ))}
    </section>
  );
}
