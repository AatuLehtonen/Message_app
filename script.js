// Swiches between the Sign in and Sign up forms.

let register_btn = document.querySelector(".register-btn");
let login_btn = document.querySelector(".login-btn");
let form = document.querySelector(".wrapper");
register_btn.addEventListener("click",()=>{
    form.classList.add("change-form");
})
login_btn.addEventListener("click",()=>{
    form.classList.remove("change-form");
})
/*
function DOajaxCall(){

    // create new XML-connection method and open connection to server.
    const ajax = new XMLHttpRequest();

    // true at the end means asynchronous, false waits for the response.
    ajax.open("POST", "http://localhost:88/ASAP/index.php", true);

    // Header's sent the server. this was it understands what type of data it is receiving.
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    ajax.onreadystatechange = () => {
        if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
            console.log(ajax.responseText); // Response from our server
        }
    };

    // Send our data to the server.
    ajax.send();
}*/

let registerUser_btn = document.querySelector(".registerUser-btn")
registerUser_btn.addEventListener("click",()=>{
    registerUser();
})

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

updateUnread();
function updateUnread(){
    
}

// Keskustelut Functions
function toggleForm() {
    console.log("test");
  var form = document.getElementById("myForm");
  var body = document.body;
  var openButton = document.querySelector(".open-button");

  if (form.style.display === "block") {
    form.style.display = "none";
    body.classList.remove("form-opened");
    openButton.style.zIndex = "auto"; // Reset z-index to default
  } else {
    form.style.display = "block";
    body.classList.add("form-opened");
    openButton.style.zIndex = "1"; // Set z-index to bring the button to the front
  }
}

function sendForm() {

}

// Sign up functions for the index.html page

function registerUser() {
    let user = document.querySelector(".Username").value;
    let Phonenumber = document.querySelector(".Phonenumber").value;
    let Email = document.querySelector(".Email").value;
    let Password = document.querySelector(".Password").value;


    if(validateEmail(Email)) {
        
        // create new XML-connection method and open connection to server.
        const ajax = new XMLHttpRequest();

        // true at the end means asynchronous, false waits for the response.
        ajax.open("POST", "http://localhost:88/ASAP/htdocs/Register.php", true);

        // Header's sent the server. this was it understands what type of data it is receiving.
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        ajax.send("username=" + user + "&phone=" + Phonenumber + "&email=" + Email + "&password=" + Password);

        ajax.onreadystatechange = () => {
            if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
                console.log(ajax.responseText); // Response from our server
            }
        };

        
    }
        

}

// Validation email functions for the index.html page
function validateEmail(email) {

    // Regular expression for a simple email validation
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // Check if the email matches the pattern
    if (!emailRegex.test(email)) {

      alert("invalid email");
      document.querySelector(".Email").value="";
      return false;
    }
    else {

        return true;
    }
  }