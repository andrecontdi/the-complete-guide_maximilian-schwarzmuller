import InvestmentCalculatorLogo from '../../assets/investment-calculator-logo.png';
import './Header.css';

export default function Header() {
  return (
    <header id="header">
      <img src={InvestmentCalculatorLogo} alt="Investment calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
