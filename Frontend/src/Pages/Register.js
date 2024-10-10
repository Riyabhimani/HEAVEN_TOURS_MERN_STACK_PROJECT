export function OpenRegistrationForm() {
    document.getElementById("registrationForm").style.display = "block";
  }
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the selected destination
    const destination = document.getElementById("destination").value;
    const name = document.getElementById("name").value;
  
    // Logic to store the registration in the destination's "View Details"
    // You can store this information locally, or send it to a server-side script (e.g., using AJAX or Fetch API)
  
    AddToDestinationDetails(destination, name);
  
    // Hide the form after submission
    document.getElementById("registrationForm").style.display = "none";
  });
  
  export function AddToDestinationDetails(destination, name) {
    // Find the specific card related to the selected destination
    let destinationCard = document.getElementById(destination + "-details");
  
    if (destinationCard) {
      // Append the registration info to the card's details
      destinationCard.innerHTML += `<p>Registered User: ${name}</p>`;
    } else {
      alert("Destination not found!");
    }
  }