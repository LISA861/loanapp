const apiUrl = 'https://localhost:7064/api';


document.getElementById('registerForm').addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent form submission
    
    const data = {
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }

    console.log(data);

    fetch(`${apiUrl}/Member/register`, {
        method: 'POST', // Specify the method
        headers: {
            'Content-Type': 'application/json', // Tell the server what kind of data you're sending
        },
        body: JSON.stringify(data), // Convert the data to a JSON string
    })
    .then(async response => {
        const data = await response.json();
        // console.log(data);

        if (data.success) {
            alert("Registration successful!🤗");
            window.location.assign("/other/index.html"); // Redirect to login page after successful registration
        } else {
            alert(data.message); // Display error message from the server
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});