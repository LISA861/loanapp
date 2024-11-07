const apiUrl = 'https://localhost:7064/api';


// Get Account Statement
document.getElementById('getAccountStatement').addEventListener('click', function() {
    const accountId = document.getElementById('accountIdInput').value;


    fetch(`${apiUrl}/Account/accountstatement?accountId=${accountId}`, {
        method: 'GET', // Specify the method
        headers: {
            'Content-Type': 'application/json', // Tell the server what kind of data you're requesting
        }
        
    })
    .then(async response => {
        const data = await response.json();
        const result = data.aresult;
        if (data.success) {
            document.getElementById('accountDisplay').innerHTML = `
                <p>Account ID: ${result.accountID}</p>
                <p>Account Type: ${result.accountType}</p>
                <p>Balance: ${result.balance}</p>
                <h3>Transactions:</h3>
                <ul>
                    ${result.transactions.map(tx => `<li>${tx.transactionDate} - ${tx.amount}</li>`).join('')}
                </ul>
            `;
        } else {
            alert("Account statement not found.");
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});
