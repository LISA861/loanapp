const apiUrl = 'https://localhost:7064/api';

// Create Account
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const data = {
        MemberID: document.getElementById('memberID').value,
        AccountType: document.getElementById('accountType').value,
    }

    fetch(`${apiUrl}/Account/createaccount`, {
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
            alert("Account created successfully!🤗");
        } else {
            alert(data.message);
        };
    })
    .catch(error => {
        console.log(error);
        console.error('There was a problem with the fetch operation:', error);
    });
});
