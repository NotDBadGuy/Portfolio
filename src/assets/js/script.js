var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

setTimeout(function () {
  var loadingDiv = document.getElementById("loading");
  loadingDiv.classList.add("fade-out");
  loadingDiv.addEventListener("transitionend", function () {
    loadingDiv.style.display = "none";
  });
  var headerDiv = document.getElementById("header");
  headerDiv.style.display = "block";
}, 4000);

function showTabContent(tabId) {
  var tabContents = document.getElementsByClassName("row1");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active-tab");
    tabContents[i].style.opacity = "0";
  }

  var tabContent = document.getElementById(tabId);
  tabContent.classList.add("active-tab");
  tabContent.style.opacity = "1";

  tabContent.scrollIntoView({ behavior: "smooth" });
}

const navLinks = document.querySelectorAll("#navbar li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    this.classList.add("active");
  });
});

const homeLink = document.querySelector("a.top");

homeLink.addEventListener("click", function (event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

var typingEffect = new Typed(".multiText", {
  strings: ["Goodness Omo-okoroh", "NotDBadGuy"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwedaflDduNDJ_UvaV3YZua0rmDbsc_LXwamfrMVICs45h-ZcjTunCSEN9n-qXleSqr/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent Successfully"
      setTimeout(function(){
        msg.innerHTML =""
      },5000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
