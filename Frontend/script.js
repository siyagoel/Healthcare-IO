const signupBtn = document.getElementById("signup-btn");
const signupForm = document.getElementById("signup-form");

signupBtn.addEventListener("click", function() {
  signupForm.classList.toggle("hidden");
});

function submitForm(event) {
	event.preventDefault();
	const form = document.querySelector('form');
	const formData = new FormData(form);
	const results = {};

	for (const [name, value] of formData) {
		results[name] = value;
	}

	saveResults(results);
	displayResults(results);
	form.reset();
}

function saveResults(results) {
	// You can implement saving the results using a backend API or local storage
	// Here, we'll just log the results to the console
	console.log(results);
}

function displayResults(results) {
    const resultsDiv = document.querySelector("#results");
    resultsDiv.innerHTML = "";
  
    for (const [name, value] of Object.entries(results)) {
      const resultDiv = document.createElement("div");
      resultDiv.innerHTML = `${name}: ${value}`;
      resultsDiv.appendChild(resultDiv);
  
      // Save results to local storage
      localStorage.setItem(name, value);
    }
  
    resultsDiv.style.display = "block";
  }
  
  
