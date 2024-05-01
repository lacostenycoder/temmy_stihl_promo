// Get the modal
var modal = document.getElementById("emailModal");

// Get the button that opens the modal
var btn = document.querySelector(".cta-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Send email via EmailJS
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;

    // these IDs from the previous steps
    emailjs.sendForm('service_3vfk0e8', 'template_wog1y3o', this)
        .then(function() {
            console.log('SUCCESS!');
            modal.style.display = "none"; // Hide the modal
            document.getElementById('emailForm').reset(); // Reset the form
        }, function(error) {
            console.log('FAILED...', error);
        });
});
