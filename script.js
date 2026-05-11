function goHome() {
    window.location.href = "home.html";
}
function loginUser(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Please fill all fields!");
    } else {
        alert("Login Successful!");
        
        // Redirect to Smart Tech Website
        window.location.href = "index.html";
    }
    window.location.href="home.html";
}
// Home background slider

const images = [
"url('images/bg1.jpg')",
"url('images/bg2.jpg')",
"url('images/bg3.jpg')"
];

let i = 0;

function changeBackground(){

document.body.style.backgroundImage = images[i];
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

i++;

if(i >= images.length){
i = 0;
}

}

setInterval(changeBackground,2000);
const slider = document.getElementById("slider");

document.querySelector(".next").onclick = () =>{
slider.scrollLeft += 300;
}

document.querySelector(".prev").onclick = () =>{
slider.scrollLeft -= 300;
}
document.getElementById('getStartedBtn').addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'services.html'; // make sure file name is correct
  });
  // Simple validation
/* auto slide */

setInterval(()=>{
slider.scrollLeft += 300;
},3000);
<script>
document.getElementById("getStartedBtn").addEventListener("click", function(){
    // Redirect to frontend page
    window.location.href = "home.html" // ya index.html jaisa tumhare file ka naam ho
});
</script>
window.location.href = 'pages/services.html';
let services = document.querySelectorAll(".service");

services.forEach(function(service){

service.addEventListener("click", function(){

window.location.href = "register.html";

});

});
let image = document.querySelectorAll(".service-img");

images.forEach(function(img){

img.addEventListener("click", function(){

window.location.href = "register.html";

});

});