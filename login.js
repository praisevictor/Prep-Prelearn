document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
  
    // temporary login simulation
    alert("Login successful (demo only)");
  
    // later: redirect to dashboard
    // window.location.href = "dashboard.html";
  });
  const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Validate user here

    // Redirect to Course Registration Page
    window.location.href = "course-registration.html";
});