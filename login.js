function validateLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}
