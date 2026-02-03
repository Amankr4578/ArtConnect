// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  window.location.href = "index.html";
});

// REGISTER
document.getElementById("registerForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Registration successful!");
  window.location.href = "login.html";
});
