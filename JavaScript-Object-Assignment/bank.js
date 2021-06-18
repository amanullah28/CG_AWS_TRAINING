
class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, isSalary, odLimit) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
        this.isSalary = isSalary;
        this.odLimit = odLimit;
    }

    withdraw(amount) {
        if (this.isSalary) {
            if (amount > this.accountBalance) {
                return "Enter amount is excrrding the Account Balance!!"
            }
            this.accountBalance = this.accountBalance-amount;
        } else {
            let totalBalance = this.accountBalance+this.odLimit;
            if (amount > totalBalance) {
                return "Enter amount is excrrding the Account Balance!!"
            }
            // this.accountBalance - amount;
            this.odLimit = amount<=this.accountBalance? this.odLimit: this.odLimit-(amount-this.accountBalance); 
            this.accountBalance = this.accountBalance-amount<=0? 0: this.accountBalance-amount;
        }
    }

 
    getCurrentBalance() {
        return this.accountBalance;
    }
}

const savingAccount = new BankAccount("1234567890", "Jhon Doe", 10000, true);
const currentAccount = new BankAccount("1234567890", "Jhon Doe", 10000, false, 2000);
console.log(savingAccount.withdraw(8000));
console.log(`Remaining Saving Account Balance = ${savingAccount.getCurrentBalance()}`);

console.log(currentAccount.withdraw(11000));
console.log(`Remaining Balance = ${currentAccount.getCurrentBalance()}`);
console.log(`Remaining odLimit = ${currentAccount.odLimit}`);