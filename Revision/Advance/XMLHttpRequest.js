var xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

xhr.open("GET", "https://api.example.com/data", true); // Configure it to fetch data using GET method

xhr.onreadystatechange = function () { // This function is called when the state of the request changes
    if (xhr.readyState === 4 && xhr.status === 200) { // Check if the fetch was successful
        var data = JSON.parse(xhr.responseText); // Parse the JSON response
        console.log(data); // Log the data to the console
    }
};

xhr.send(); // Send the request
