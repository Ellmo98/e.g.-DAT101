"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Part 1: Account Types

const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensjonskonto"
};

// Print all account types on a single comma-separated line
printOut(Object.values(AccountType).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Part 2: Basic Bank Account

class TAccount {
    #type;

    constructor(type) {
        this.#type = type;
    }

    toString() {
        return this.#type;
    }

    setType(aType) {
        console.log(`Account is changed from ${this.#type} to ${aType}`);
        this.#type = aType;
    }
}

// Create account instance
const myTAccount = new TAccount(AccountType.Normal);

// Print initial type
printOut(`myTAccount = ${myTAccount.toString()}`);

// Change account type to Saving
myTAccount.setType(AccountType.Saving);

// Print new type
printOut(`myTAccount = ${myTAccount.toString()}`);

printOut(`myTAccount = ${myTAccount.toString()}`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Klassen BankAccount representerer en bankkonto
class BankAccount {
  // Private felter: kontoType og kontoSaldo
  #kontoType;
  #kontoSaldo;

  // Konstruktør for å lage en ny konto med type og startsaldo
  constructor(startKontoType = "Brukskonto", startSaldo = 0) {
    this.#kontoType = startKontoType;
    this.#kontoSaldo = startSaldo;
  }

  // Returnerer en tekstlig beskrivelse av kontoen
  toString() {
    return `Min ${this.#kontoType} har en saldo på ${this.#kontoSaldo}`;
  }

  // Setter kontotype (f.eks. "Sparekonto")
  setKontoType(nyKontoType) {
    this.#kontoType = nyKontoType;
  }

  // Henter saldoen til kontoen
  hentSaldo() {
    return this.#kontoSaldo;
  }

  // Setter inn penger på kontoen og viser ny saldo
  settInn(penger) {
    this.#kontoSaldo += penger;
    printOut(`Innskudd på ${penger}, ny saldo er ${this.#kontoSaldo}`);
  }

  // Tar ut penger fra kontoen og viser ny saldo
  taUt(penger) {
    if (penger > this.#kontoSaldo) {
      printOut("Ikke nok penger på kontoen!");
      return;
    }
    this.#kontoSaldo -= penger;
    printOut(`Uttak på ${penger}, ny saldo er ${this.#kontoSaldo}`);
  }
}

// Eksempel på bruk av kontoen
const minKonto = new BankAccount();
minKonto.settInn(100);     // Innskudd på 100, ny saldo er 100
minKonto.taUt(25);         // Uttak på 25, ny saldo er 75

printOut(minKonto.toString()); // Min konto har en saldo på 75

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


class Account {
    // Private fields
    #accountType;
    #accountBalance;
    #withdrawCount;

    constructor(startType = "Sparekonto", startBalance = 0) {
        this.#accountType = startType;
        this.#accountBalance = startBalance;
        this.#withdrawCount = 0;
    }

    // Return account balance
    toString() {
        return `My account balance is ${this.#accountBalance}`;
    }

    // Set account type and reset withdrawal counter
    setType(newType) {
        console.log(`Account is changed from ${this.#accountType} to ${newType}.`);
        this.#accountType = newType;
        this.#withdrawCount = 0; // reset counter
    }

    // Get current balance
    getBalance() {
        return this.#accountBalance;
    }

    // Deposit money and reset withdrawal counter
    deposit(amount) {
        this.#accountBalance += amount;
        printOut(`Innskudd på ${amount}kr, ny saldo er ${this.#accountBalance}kr`);
        this.#withdrawCount = 0; // reset counter after deposit
    }

    // Withdraw money with rules
    withdraw(amount) {
        switch (this.#accountType) {
            case "Sparekonto":
                if (this.#withdrawCount >= 3) {
                    printOut("You can't withdraw from a Sparekonto more than three times!");
                    return;
                }
                if (amount > this.#accountBalance) {
                    printOut("Insufficient funds!");
                    return;
                }
                this.#accountBalance -= amount;
                this.#withdrawCount++;
                printOut(`Withdrawal of ${amount}kr, new balance is ${this.#accountBalance}kr`);
                break;

            case "Pensionskonto":
                printOut("You can't withdraw from a Pensionskonto!");
                break;

            default:
                printOut("Unknown account type!");
                break;
        }
    }
}

// ---------- Example usage ----------

// Start with Sparekonto with balance 75
const myAccount = new Account("Sparekonto", 75);

// Ensure balance is 100
myAccount.deposit(25);   // Deposit of 25, new balance is 100

// Withdraw 3 times from Sparekonto
myAccount.withdraw(30);  // Withdrawal of 30, new balance is 70
myAccount.withdraw(30);  // Withdrawal of 30, new balance is 40
myAccount.withdraw(30);  // Withdrawal of 30, new balance is 10

// Attempt 4th withdrawal → should fail
myAccount.withdraw(10);  // You can't withdraw from a Sparekonto more than three times!

// Change account type to Pensionskonto
myAccount.setType("Pensionskonto"); // Account is changed from Sparekonto to Pensionskonto.

// Attempt withdrawal → should fail
myAccount.withdraw(10);  // You can't withdraw from a Pensionskonto!

// Change back to Sparekonto
myAccount.setType("Sparekonto"); // Account is changed from Pensionskonto to Sparekonto

// Withdraw remaining balance
myAccount.withdraw(10);  // Withdrawal of 10, new balance is 0

printOut(myAccount.toString()); // Output the final account balance

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


class AccountWithCurrency {
    // Static currency object
    static Currencies = {
        NOK: { value: 1.0, name: "Norske Kroner", denomination: "kr" },
        EUR: { value: 0.0985, name: "Europeiske euro", denomination: "E" },
        USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
        GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
        INR: { value: 7.8309, name: "Indiske ruppe", denomination: "R" },
        AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
        PHP: { value: 6.5189, name: "Filipinske peso", denomination: "P" },
        SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
        CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
        THB: { value: 3.3289, name: "Thai baht", denomination: "B" }
    };

    // Private fields
    #accountType;
    #accountBalance;
    #withdrawCount;
    #currencyType;

    constructor(startType = "Sparekonto", startBalance = 0, startCurrency = "NOK") {
        this.#accountType = startType;
        this.#accountBalance = startBalance;
        this.#withdrawCount = 0;
        this.#currencyType = startCurrency;
    }

    // Return account balance as string with currency
    toString() {
        const currencySymbol = AccountWithCurrency.Currencies[this.#currencyType].denomination;
        return `My account balance is ${this.#accountBalance}${currencySymbol}`;
    }

    // Set account type and reset withdrawal counter
    setType(newType) {
        console.log(`Account is changed from ${this.#accountType} to ${newType}.`);
        this.#accountType = newType;
        this.#withdrawCount = 0;
    }

    // Get current balance
    getBalance() {
        return this.#accountBalance;
    }

    // Deposit money and reset withdrawal counter
    deposit(amount) {
        this.#accountBalance += amount;
        this.#withdrawCount = 0;
        const currencySymbol = AccountWithCurrency.Currencies[this.#currencyType].denomination;
        console.log(`Deposit of ${amount}${currencySymbol}, new balance is ${this.#accountBalance}${currencySymbol}`);
    }

    // Withdraw money with rules (Sparekonto limit, Pensionskonto no withdraw)
    withdraw(amount) {
        const currencySymbol = AccountWithCurrency.Currencies[this.#currencyType].denomination;
        switch (this.#accountType) {
            case "Sparekonto":
                if (this.#withdrawCount >= 3) {
                    console.log("You cant Withdraw from a Sparekonto more than three times!");
                    return;
                }
                if (amount > this.#accountBalance) {
                    console.log("Insufficient funds!");
                    return;
                }
                this.#accountBalance -= amount;
                this.#withdrawCount++;
                console.log(`Withdrawal of ${amount}kr, new balance is ${this.#accountBalance}kr`);
                break;

            case "Pensionskonto":
                console.log("You cant withdraw from a Pensionskonto!");
                break;

            default:
                console.log("Unknown account type!");
                break;
        }
    }

    // Set currency type, do nothing if same as current
    setCurrencyType(newCurrency) {
        if (newCurrency === this.#currencyType) return; // same currency, do nothing
        if (!AccountWithCurrency.Currencies[newCurrency]) {
            console.log("Currency not supported!");
            return;
        }
        this.#currencyType = newCurrency;
    }
}

// ---------- Example usage ----------

// Create account
const myAccount2 = new AccountWithCurrency(); // defaults: Sparekonto, 0, NOK

// Deposit 150
myAccount2.deposit(150);  // Deposit of 150kr, new balance is 150kr

printOut(myAccount2.toString()); // My account balance is 150kr
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


class AccountWithCurrencyConversion {
    // Static currency object
    static Currencies = {
        NOK: { value: 1.0, name: "Norske kroner", denomination: "kr" },
        EUR: { value: 0.0985, name: "Europeiske euro", denomination: "E" },
        USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
        GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
        INR: { value: 7.8309, name: "Indiske ruppe", denomination: "R" },
        AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
        PHP: { value: 6.5189, name: "Filipinske peso", denomination: "P" },
        SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
        CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
        THB: { value: 3.3289, name: "Thai baht", denomination: "B" }
    };

    #accountType;
    #accountBalance;
    #withdrawCount;
    #currencyType;

    constructor(startType = "Sparekonto", startBalance = 0, startCurrency = "NOK") {
        this.#accountType = startType;
        this.#accountBalance = startBalance;
        this.#withdrawCount = 0;
        this.#currencyType = startCurrency;
    }

    #currencyConvert(newCurrency) {
        const currentValue = AccountWithCurrencyConversion.Currencies[this.#currencyType].value;
        const newValue = AccountWithCurrencyConversion.Currencies[newCurrency].value;
        return (this.#accountBalance * newValue / currentValue);
    }

    toString() {
        const currencySymbol = AccountWithCurrencyConversion.Currencies[this.#currencyType].denomination;
        return `My account balance is ${this.#accountBalance.toFixed(2)}${currencySymbol}`;
    }

    setType(newType) {
        console.log(`Account is changed from ${this.#accountType} to ${newType}.`);
        this.#accountType = newType;
        this.#withdrawCount = 0;
    }

    getBalance() {
        return this.#accountBalance;
    }

    deposit(amount) {
        this.#accountBalance += amount;
        this.#withdrawCount = 0;
        const currencySymbol = AccountWithCurrencyConversion.Currencies[this.#currencyType].denomination;
        console.log(`Deposit of ${amount}${currencySymbol}, new balance is ${this.#accountBalance.toFixed(2)}${currencySymbol}`);
    }

    withdraw(amount) {
        const currencySymbol = AccountWithCurrencyConversion.Currencies[this.#currencyType].denomination;
        switch (this.#accountType) {
            case "Sparekonto":
                if (this.#withdrawCount >= 3) {
                    console.log("You cant Withdraw from a Sparekonto more than three times!");
                    return;
                }
                if (amount > this.#accountBalance) {
                    console.log("Insufficient funds!");
                    return;
                }
                this.#accountBalance -= amount;
                this.#withdrawCount++;
                console.log(`Withdrawal of ${amount}kr, new balance is ${this.#accountBalance.toFixed(2)}${currencySymbol}`);
                break;

            case "Pensionskonto":
                console.log("You cant withdraw from a Pensionskonto!");
                break;

            default:
                console.log("Unknown account type!");
                break;
        }
    }

    setCurrencyType(newCurrency) {
        if (newCurrency === this.#currencyType) return;
        if (!AccountWithCurrencyConversion.Currencies[newCurrency]) {
            console.log("Currency not supported!");
            return;
        }

        const oldCurrencyName = AccountWithCurrencyConversion.Currencies[this.#currencyType].name;
        this.#accountBalance = this.#currencyConvert(newCurrency);
        this.#accountBalance = parseFloat(this.#accountBalance.toFixed(2));
        this.#currencyType = newCurrency;

        const newCurrencyName = AccountWithCurrencyConversion.Currencies[newCurrency].name;
        const currencySymbol = AccountWithCurrencyConversion.Currencies[newCurrency].denomination;

        console.log(`The account currency has changed from ${oldCurrencyName} to ${newCurrencyName}`);
        console.log(`New balance is ${this.#accountBalance.toFixed(2)}${currencySymbol}`);
    }
}

const myAccount3 = new AccountWithCurrencyConversion("Sparekonto", 150, "NOK");
myAccount3.setCurrencyType("SEK");
myAccount3.setCurrencyType("USD");
myAccount3.setCurrencyType("NOK");
printOut(myAccount3.toString());
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("----------Task 7------------");

class AccountPart7 {
    // Static currency object
    static Currencies = {
        NOK: { value: 1.0, name: "Norske Kroner", denomination: "kr" },
        EUR: { value: 0.0985, name: "Europeiske euro", denomination: "E" },
        USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
        GBP: { value: 0.0847, name: "Pound Sterling", denomination: "£" },
        INR: { value: 7.8309, name: "Indiske rupee", denomination: "R" },
        AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
        PHP: { value: 6.5189, name: "Filipinske peso", denomination: "P" },
        SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
        CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
        THB: { value: 3.3289, name: "Thai baht", denomination: "B" }
    };

    #accountType;
    #accountBalance;
    #withdrawCount;
    #currencyType;

    constructor(startType = "Sparekonto", startBalance = 0, startCurrency = "NOK") {
        this.#accountType = startType;
        this.#accountBalance = startBalance;
        this.#withdrawCount = 0;
        this.#currencyType = startCurrency;
    }

    #convertToAccountCurrency(amount, fromCurrency) {
        if (!fromCurrency) fromCurrency = "NOK";
        const fromValue = AccountPart7.Currencies[fromCurrency].value;
        const accountValue = AccountPart7.Currencies[this.#currencyType].value;
        return amount * fromValue / accountValue;
    }

    toString() {
        const symbol = AccountPart7.Currencies[this.#currencyType].denomination;
        return `My account balance is ${this.#accountBalance.toFixed(2)}${symbol}`;
    }

    setType(newType) {
        printOut(`Account is changed from ${this.#accountType} to ${newType}.`);
        this.#accountType = newType;
        this.#withdrawCount = 0;
    }

    getBalance() {
        return this.#accountBalance;
    }

    deposit(amount, currency = "NOK") {
        const amountInAccountCurrency = this.#convertToAccountCurrency(amount, currency);
        this.#accountBalance += amountInAccountCurrency;
        this.#withdrawCount = 0;

        const currencyName = AccountPart7.Currencies[currency].name;
        const accountSymbol = AccountPart7.Currencies[this.#currencyType].denomination;

        printOut(`Deposit of ${amount.toFixed(2)} ${currencyName}, new balance is ${this.#accountBalance.toFixed(2)}${accountSymbol}`);
    }

    withdraw(amount, currency = "NOK") {
        const amountInAccountCurrency = this.#convertToAccountCurrency(amount, currency);
        const accountSymbol = AccountPart7.Currencies[this.#currencyType].denomination;

        switch (this.#accountType) {
            case "Sparekonto":
                if (this.#withdrawCount >= 3) {
                    printOut("You cant Withdraw from a Sparekonto more than three times!");
                    return;
                }
                if (amountInAccountCurrency > this.#accountBalance) {
                    printOut("Insufficient funds!");
                    return;
                }
                this.#accountBalance -= amountInAccountCurrency;
                this.#withdrawCount++;
                printOut(`Withdrawal of ${amount.toFixed(2)} ${AccountPart7.Currencies[currency].name}, new balance is ${this.#accountBalance.toFixed(2)}${accountSymbol}`);
                break;

            case "Pensionskonto":
                printOut("You cant withdraw from a Pensionskonto!");
                break;

            default:
                printOut("Unknown account type!");
                break;
        }
    }

    setCurrencyType(newCurrency) {
        if (newCurrency === this.#currencyType) return;
        if (!AccountPart7.Currencies[newCurrency]) {
            printOut("Currency not supported!");
            return;
        }

        const oldCurrencyName = AccountPart7.Currencies[this.#currencyType].name;
        this.#accountBalance = this.#convertToAccountCurrency(this.#accountBalance, this.#currencyType);
        this.#currencyType = newCurrency;

        const newCurrencyName = AccountPart7.Currencies[newCurrency].name;
        const symbol = AccountPart7.Currencies[newCurrency].denomination;

        printOut(`The account currency has changed from ${oldCurrencyName} to ${newCurrencyName}`);
        printOut(`New balance is ${this.#accountBalance.toFixed(2)} ${symbol}`);
    }
}

// ---------- Example usage ----------

const myAccountPart7 = new AccountPart7("Sparekonto", 250, "NOK");

myAccountPart7.deposit(12, "USD");
myAccountPart7.withdraw(10, "GBP");
myAccountPart7.setCurrencyType("CAD");
myAccountPart7.setCurrencyType("INR");
myAccountPart7.withdraw(150.11, "SEK");

printOut(newLine);
