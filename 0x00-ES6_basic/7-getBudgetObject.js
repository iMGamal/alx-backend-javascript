export default function getBudgetObject(income, gdp, capita) {
  const income = this.income;
  const gdp = this.gdp;
  const capita = this.capita;

  const budget = {
    income,
    gdp,
    capita,
  };
  
  return budget;
}
