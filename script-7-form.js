const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const updates = document.getElementById("updates").checked;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
  }

  const newUser = {
    firstName: fname,
    lastName: lname,
    email: email,
    password: password,
    receiveUpdates: updates,
  };

  console.log("New User Object:", newUser);
});
