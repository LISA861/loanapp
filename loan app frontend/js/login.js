const apiUrl = 'https://localhost:7064/api';


document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission
    const data = {
      email: document.getElementById('loginemail').value,
      password: document.getElementById('loginpassword').value,
    }
  
    fetch(`${apiUrl}/Member/login`, {
      method: 'POST', // Specify the method
      headers: {
        'Content-Type': 'application/json', // Tell the server what kind of data you're sending
      },
      body: JSON.stringify(data), // Convert the data to a JSON string
    })
    .then(async response => {    // Response from the API
        
      const data = await response.json();
      console.log(data);
  
      if(data.success){
         alert("Login Sucessful!🤗")
         window.location.assign("/other/home.html")
      }
      else {
        alert(data.message);
      }
  
    })    
  
    .catch(error => {
        console.log(error);
        console.error('There was a problem with the fetch operation:', error);
    });
  
});
  