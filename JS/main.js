// actvi header
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("scroll-on");
        } else {
            nav.classList.remove("scroll-on");
        }
    }
    // nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    })
})

// SMTP

function SendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "karnavprajapati@gmail.com",
        Password: "kartavya13",
        To: 'karnavprajapati@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Appointment",
        Body: "Name:" + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Phone:" + document.getElementById("phone").value +
            "<br> Date-Time: " + document.getElementById("datetime").value +
            "<br> Massage:" + document.getElementById("Massage").value
    }).then(
        message => alert("Your appointment is success")
    );
}