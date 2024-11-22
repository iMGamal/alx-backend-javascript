export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };
  
  const n_budget = {income, gdp, capita};

  return n_budget;
}
