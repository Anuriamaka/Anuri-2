//Create 4 accounts as objects.  
// Each should have: name, balance, currency, and type (e.g., "Savings", "Checking"). 
 
let Acct1 = {
    Name: "Chidimma",
    Balance: 50000,
    Currency: "NGN",
    Type: "Savings",
 };

let Acct2 = {
    Name: "Mmasi",
    Balance: 30000,
    Currency: "NGN" ,
    Type: "Savings",
 };

let Acct3 = {
    Name: "Mmesoma",
    Balance: 20000,
    Currency: "NGN" ,
    Type: "Savings",
 };

let Acct4 = {
    Name: "Chisimdi",
    Balance: 10000,
    Currency: "NGN" ,
    Type: "Checking",
 };

// Simulate deposits:  Add different deposit amounts to two accounts. 
// Show the new balances. 
let depositamount1 = 1000
let depositamount2 = 5000

//add depositamount1 to acct1
Acct1.Balance += depositamount1
console.log("The current balance1 is: " +   Acct1.Balance)

Acct2.Balance += depositamount2
console.log("The current balance2 is: " + Acct2.Balance)

//Simulate withdrawals: 
// Attempt withdrawals from two accounts. 
// If the balance is insufficient, print: 
// "Withdrawal denied for <name>: insufficient funds" 

let withdrawalamount3 = 3000
let withdrawalamount4 = 15000

Acct3.Balance -= withdrawalamount3
if (Acct3.Balance >= withdrawalamount3) {
    console.log (Acct3.Balance -= withdrawalamount3)
    
} else {
    console.log ( "insufficient balance")
    
}

Acct4.Balance -= withdrawalamount4
if (Acct4.Balance >= withdrawalamount4) { 
    console.log (Acct4.Balance -= withdrawalamount4)
    
} else {
    console.log ( "insufficient balance")
    
}

//Transfers:  Transfer money between two accounts only if they have the same currency. 
//  If currencies are different, print:  "Transfer failed: currency mismatch" 

let transferamount = 4000
if (Acct1.Currency === Acct2.Currency ) {
   Acct1.Balance -= transferamount
   Acct2.Balance += transferamount
   console.log ("The current balance of acct1 is: " + Acct1.Balance + "The current balance of acct2 is :" + Acct2.Balance)
    
} else {
    console.log("Currency mismatch") 
    
}
//Monthly maintenance: 
// If account type is "Savings", add interest (e.g., 2% of balance). 
// If account type is "Checking", deduct fees (e.g., 50 units). 
 
if (Acct1.Type === "savings") {
     Acct1.Balance += Acct1.Balance * 0.02
    console.log (Acct1.Balance)
} else if  (Acct1.Type === "Checking") {
   Acct1.Balance -= 50
   console.log (Acct1.Balance)
} 

//Print out the account with the highest balance. 
//  Print out the account with the lowest balance. 
// if {} (Acct1.Balance >= Acct2.Balance)
  //  if (Acct2.Balance >= Acct3.Balance)
    //    if (Acct3.Balance>= )

 
 
// Account status check: 
//  If balance > 0 → "Active"  If balance === 0 → "Empty"  If balance < 0 → "Overdrawn" 
 
 
 
// Transaction summary: 
 
 //After all operations, print all accounts with final balances and statuses in a clean format. 
 
 


