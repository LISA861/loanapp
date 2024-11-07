const apiUrl = 'https://localhost:7064/api';



/*
// Utility function to handle API responses
async function handleResponse(response) {
    if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Something went wrong');
    }
    return response.json();
}



// Utility function to handle errors
function handleError(error) {
    console.error('API Error:', error.message);
}



//-----------------------------------------------------------------------------------------------------------------



// Function to log in
async function loginUser(credentials) {;
    try {
        const response = await fetch(`${apiUrl}/Member/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        return await handleResponse(response);
    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
}



// Function to register a new user
async function registerUser(userDetails) {
    try {
        const response = await fetch(`${apiUrl}/Member/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}



// Function to create an account
async function createAccount(accountDetails) {
    try {
        const response = await fetch(`${apiUrl}/account/createaccount`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountDetails)
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}



// Function to request a loan
async function requestLoan(loanDetails) {
    try {
        const response = await fetch(`${apiUrl}/loan/requestloan`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loanDetails)
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}



// Function to repay a loan
async function repayLoan(repaymentDetails) {
    try {
        const response = await fetch(`${apiUrl}/loan/repayloan`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(repaymentDetails)
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}



// Function to get an account statement
async function getAccountStatement(accountId) {
    try {
        const response = await fetch(`${apiUrl}/account/accountstatement?accountId=${accountId}`);
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}



// Function to get a loan statement
async function getLoanStatement(loanId) {
    try {
        const response = await fetch(`${apiUrl}/loan/loanstatement?loanId=${loanId}`);
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}



// Function to get transaction history
async function depositMoney(depositDetails) {
    try {
        const response = await fetch(`${apiUrl}/transaction/deposit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(response)
        });
        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}



//------------------------------------------------------------------------------------------------------------------



// Sending data for registration(post)
function RegisterTest(){
  document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission
    const userDetails = {
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    const result = await registerUser(userDetails); // Sending data to api(post)
    if (result) {
        alert('Registration successful!');
        window.location.assign = 'index.html'; // Redirect to login after successful registration
    }
  });
}




// Sending data to login a user(post)
function loginTest(){
  document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const loginDetails = {
        email: document.getElementById('loginemail').value,
        password: document.getElementById('loginpassword').value
    };

    const result = await loginUser(loginDetails);
    if (result) {
        alert('Login successful!');
        window.location.assign = 'home.html'; // Redirect to home or dashboard after successful login
    } else {
        alert('Invalid credentials. Please try again.');
    }
  });
}


// Sending Data to Create an Account(post)
document.getElementById('createAccountForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const accountDetails = {
      MemberID: document.getElementById('memberID').value,
      AccountType: document.getElementById('accountType').value,
  };

  const result = await createAccount(accountDetails);
  if (result) {
      alert('Account created successfully!');
  }
});



// Sending Data to Request Loan(post)
document.getElementById('loanRequestForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const loanDetails = {
      memberID: document.getElementById('memberId').value,
      accountID: document.getElementById('accountId').value,
      loanAmount: document.getElementById('loanAmount').value,
      loanTerm: document.getElementById('loanTerm').value
  };

  const result = await requestLoan(loanDetails);
  if (result) {
      alert('Loan requested successfully!');
  }
});



// Sending Data for Loan Repayment(post)
document.getElementById('loanRepaymentForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const repaymentDetails = {
      loanID: document.getElementById('loanId').value,
      accountID: document.getElementById('accountId').value,
      amountPaid: document.getElementById('amountPaid').value
  };

  const result = await repayLoan(repaymentDetails);
  if (result) {
      alert('Loan repaid successfully!');
  }
});



// Sending Data for Debosit(post)
document.getElementById('depositForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const depositDetails = {
      accountID: document.getElementById('accountId').value,
      amount: document.getElementById('amount').value
  };

  const result = await depositMoney(depositDetails);
  if (result) {
      alert('Money deposited successfully!');
  }
});



// Fetch and display the account statement(get)
document.getElementById('getAccountStatement').addEventListener('click', async function() {
  const accountId = document.getElementById('accountIdInput').value;

  const statement = await getAccountStatement(accountId); // fetch the account statement
  if (statement) {
      document.getElementById('accountDisplay').innerHTML = `
          <p>Account ID: ${statement.AccountID}</p>
          <p>Account Type: ${statement.AccountType}</p>
          <p>Balance: ${statement.Balance}</p>
          <h3>Transactions:</h3>
          <ul>
              ${statement.Transactions.map(tx => `<li>${tx.TransactionDate} - ${tx.Amount}</li>`).join('')}
          </ul>
      `;
  }
});



// Fetch and display the loan statement(get)
document.getElementById('getLoanStatement').addEventListener('click', async function() {
  const loanId = document.getElementById('loanIdInput').value;

  const statement = await getLoanStatement(loanId);
  if (statement) {
      document.getElementById('loanDisplay').innerHTML = `
          <p>Loan ID: ${statement.loanID}</p>
          <p>Account ID: ${statement.accountID}</p>
          <p>Loan Amount: ${statement.loanAmount}</p>
          <p>Interest Rate: ${statement.interestRate}</p>
          <p>Loan Term: ${statement.loanTerm}</p>
          <p>Status: ${statement.status}</p>
      `;
  } else {
      alert('Loan not found!');
  }
});
*/
