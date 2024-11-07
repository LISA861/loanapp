const apiUrl = 'https://localhost:7064/api';

// Create Loan
document.getElementById('requestLoanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const data = {
        AccountID: document.getElementById('accountID').value,
        LoanAmount: document.getElementById('loanAmount').value,
        LoanTerm: document.getElementById('loanTerm').value,
    }

    fetch(`${apiUrl}/Loan/requestloan`, {
        method: 'POST', // Specify the method
        headers: {
            'Content-Type': 'application/json', // Tell the server what kind of data you're sending
        },
        body: JSON.stringify(data), // Convert the data to a JSON string
    })
    .then(async response => {
        const data = await response.json();
        console.log(data);

        if (data.success) {
            alert("Loan created successfully!🤗");
        } else {
            alert(data.message);
        };
    })
    .catch(error => {
        console.log(error);
        console.error('There was a problem with the fetch operation:', error);
    });
});
