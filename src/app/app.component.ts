import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('incomeForm') incomeForm!: NgForm;
  title = 'budgetCalculator';
  remainingAmount: number = 0;
  incomeArray: any[] = [];
  expensesArray: any[] = [];

  add() {
    if (this.incomeForm.value.expenseType === 'income') {
      this.incomeArray.push({
        amount: this.incomeForm.value.amount,
        description: this.incomeForm.value.description,
      });
    }
    if (this.incomeForm.value.expenseType === 'expense') {
      this.expensesArray.push({
        amount: this.incomeForm.value.amount,
        description: this.incomeForm.value.description,
      });
    }

    this.incomeForm.resetForm();

    this.remainingAmount =
      this.incomeArray
        .map((income) => income.amount)
        .reduce(
          (previousValue, amount) => {
            const sum = amount + previousValue;
            return sum;
          },

          0
        ) -
      this.expensesArray
        .map((expense) => expense.amount)
        .reduce(
          (previousValue, amount) => {
            const sum = amount + previousValue;
            return sum;
          },

          0
        );
  }
}
