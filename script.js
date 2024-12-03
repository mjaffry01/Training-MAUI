// script.js

$(document).ready(function() {
    // Handle Contact Form Submission
    $('#contactForm').on('submit', function(e) {
      e.preventDefault();
      // Simple form validation and submission logic
      const name = $('#name').val().trim();
      const email = $('#email').val().trim();
      const message = $('#message').val().trim();
  
      if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      // Here you can add AJAX to send form data to the server
      alert("Thank you for your feedback!");
  
      // Clear the form
      $('#contactForm')[0].reset();
    });
  
    // Handle PDF Download
    $('#downloadPdf').on('click', function() {
      // Choose the element you want to convert to PDF
      const element = document.getElementById('courseContent');
  
      // Define PDF options
      const opt = {
        margin:       10,
        filename:     'Maui_Training_Course_Content.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
  
      // Convert and download
      html2pdf().set(opt).from(element).save();
    });
  });
  