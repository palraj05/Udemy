import React from 'react'
import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;


  return (
    <div className='expense-item'>
    <div>{expenseDate.toISOString()}</div>
    <div>
        <h2 className='expense-item__description'>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
    </div>
    
    </div>
  )
}

export default ExpenseItem