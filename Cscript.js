document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the form input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate the form
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all the fields.');
        return;
    }

    // Create an object to hold the contact message details
    const contactMessage = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString() // Add timestamp for when the message was sent
    };

    // Retrieve any previously saved messages from localStorage
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];

    // Add the new message to the array
    storedMessages.push(contactMessage);

    // Save the updated messages array back to localStorage
    localStorage.setItem('contactMessages', JSON.stringify(storedMessages));

    // Log the saved data to console
    console.log("Message saved:", contactMessage);
    console.log("All messages in localStorage:", storedMessages);

    // Display a confirmation message to the user
    document.getElementById('formResponse').textContent = "Thank you for your message! We will get back to you soon.";

    // Reset the form fields
    document.getElementById('contactForm').reset();
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display the form details in the console
        console.log('Form Submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optional: You can also show a message in the console after the form is submitted
        console.log('Form submitted successfully!');
    });
});
