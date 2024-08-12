export interface InvestmentValues {
  annualInvestment: number;
  duration: number;
  expectedReturn: number;
  initialInvestment: number;
}

export interface InvestmentResults {
  annualInvestment: number;
  interest: number;
  valueEndOfYear: number;
  year: number;
}
