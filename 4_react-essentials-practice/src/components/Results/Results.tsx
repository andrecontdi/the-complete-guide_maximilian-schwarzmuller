import { InvestmentResults } from '../../models/investment.model';
import { formatter } from '../../utils/investment';
import './Results.css';

interface ResultsProps {
  annualData: InvestmentResults[];
}

export default function Results({ annualData }: ResultsProps) {
  const initialInvestment = annualData[0]?.valueEndOfYear - annualData[0]?.interest - annualData[0]?.annualInvestment;

  const tableRows = annualData.map((data: InvestmentResults, index: number) => {
    const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
    const totalAmountInvested = data.valueEndOfYear - totalInterest;

    return (
      <tr key={index}>
        <td>{data.year}</td>
        <td>{formatter.format(data.valueEndOfYear)}</td>
        <td>{formatter.format(data.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Values</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{annualData && tableRows}</tbody>
    </table>
  );
}
