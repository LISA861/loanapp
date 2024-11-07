const apiUrl = 'https://localhost:7064/api';


// Get Loan Statement
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('getLoanStatement').addEventListener('click', function() {
        const loanId = document.getElementById('loanIdInput').value;

        fetch(`${apiUrl}/Loan/loanstatement?loanId=${loanId}`, {
            method: 'GET', // Specify the method
            headers: {
                'Content-Type': 'application/json', // Tell the server what kind of data you're requesting
            }
        })
        .then(async response => {
            const data = await response.json();
            const result = data.lresult;

            if (data.success) {
                document.getElementById('loanDisplay').innerHTML = `
                    <p>Loan ID: ${result.loanID}</p>
                    <p>Account ID: ${result.accountID}</p>
                    <p>Loan Amount: ${result.loanAmount}</p>
                    <p>Interest Rate: ${result.interestRate}</p>
                    <p>Loan Term: ${result.loanTerm}</p>
                    <p>Status: ${result.status}</p>
                `;
            } else {
                alert("Loan statement not found.");
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    });
});