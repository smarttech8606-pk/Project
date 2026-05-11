// PASSWORD SHOW/HIDE
const toggle = document.getElementById("toggle");
const password = document.getElementById("password");

if(toggle && password){
  toggle.addEventListener("click", function(){
    if(password.type === "password"){
      password.type = "text";
      toggle.textContent = "🙈";
    } else {
      password.type = "password";
      toggle.textContent = "👁";
    }
  });
}

// CONTACT NUMBER VALIDATION
const phoneInput = document.getElementById("phone");
if(phoneInput){
  phoneInput.addEventListener("input", function(){
    this.value = this.value.replace(/[^0-9]/g, '');
  });
}

// REGISTRATION SUBMIT
const form = document.getElementById("regForm");
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const userData = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      service: document.getElementById("service").value
    };
    let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    users.push(userData);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    window.location.href = "payment.html";
  });
}
