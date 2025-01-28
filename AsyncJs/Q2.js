document.getElementById("fetch-btn").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
  
    // Specify the HTTP method and URL
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  
    // Handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Parse the JSON response
        const users = JSON.parse(xhr.responseText);
  
        // Log the users to the console
        console.log(users);
  
        // Display user names in the browser
        const userList = document.getElementById("user-list");
        userList.innerHTML = ""; // Clear any previous content
  
        users.forEach((user) => {
          const li = document.createElement("li");
          li.textContent = user.name;
          userList.appendChild(li);
        });
      } else {
        console.error("Failed to fetch data: ", xhr.status);
      }
    };
  
    // Handle errors
    xhr.onerror = function () {
      console.error("Request failed");
    };
  
    // Send the request
    xhr.send();
  });
  