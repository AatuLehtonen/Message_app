console.log("test");
let register_btn = document.querySelector(".register-btn");
let login_btn = document.querySelector(".login-btn");
let form = document.querySelector(".wrapper");
register_btn.addEventListener("click",()=>{
    form.classList.add("change-form");
})
login_btn.addEventListener("click",()=>{
    form.classList.remove("change-form");
})

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
}

let registerUser_btn = document.querySelector(".registerUser-btn")
registerUser_btn.addEventListener("click",()=>{
    DOajaxCall();
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