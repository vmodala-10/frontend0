document.addEventListener("DOMContentLoaded", function() {
    const redirectBtn = document.getElementById("redirect-btn");
    redirectBtn.addEventListener("click", function() {
        window.location.href = "create account.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const redirectBtn = document.getElementById("login-btn");
    redirectBtn.addEventListener("click", function( _event ) {
        window.location.href = "first page.html";
    });
});

const studentRadio = document.getElementById('student'); const facultyRadio = document.getElementById('faculty'); const studentDetails = document.getElementById('student-details'); const facultyDetails = document.getElementById('faculty-details');
studentRadio.addEventListener('click', () => { studentDetails.style.display = 'block'; facultyDetails.style.display = 'none'; });

facultyRadio.addEventListener('click', () => { studentDetails.style.display = 'none'; facultyDetails.style.display = 'block'; });


const createAccountForm = document.getElementById('create-account-form');

createAccountForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  // You can add validation logic here to check if the form fields are valid

  // Redirect the user to the first page.html
  window.location.href = 'first page.html';
});


