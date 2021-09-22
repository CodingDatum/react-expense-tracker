import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {title: "Car Insurance", amount: 294.67, date: new Date(2020, 2, 28), id: "0.1234567"},
  {title: "Health Insurance", amount: 204.33, date: new Date(2019, 2, 14), id: "0.1234568"},
  {title: "Phone Bill", amount: 103.50, date: new Date(2021, 2, 11), id: "0.1234569"},
  {title: "Rent", amount: 350, date: new Date(2021, 2, 1), id: "0.1234566"}
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses => {
      return([expense, ...prevExpenses])
    }))
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;
