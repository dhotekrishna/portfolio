// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


//Geting id of theme button for changing sources(src & href)
const myButton = document.getElementById("myButton");


//Changing svg of theme button
const mytheme = document.getElementById("myButton")
myButton.addEventListener("click", function(){
  if (mytheme.src.endsWith("/icons/sun.svg")) {
    mytheme.src = "/icons/moon.svg";
  } else {
    mytheme.src = "/icons/sun.svg";
  }
})


//Theme change for the page by changing css file
const myCss = document.getElementById("maincssid")
myButton.addEventListener("click", function(){
  if (myCss.href.endsWith("/css/light.css")) {
    myCss.href = "/css/dark.css";
  } else {
    myCss.href = "/css/light.css";
  }
})


//Image change of skills when theme change

const myImg1 = document.getElementById("awsid");
myButton.addEventListener("click", function() {
  if (myImg1.src.endsWith("/icons/skills/aws-light.svg")) {
    myImg1.src = "/icons/skills/aws-dark.svg";
  } else {
    myImg1.src = "/icons/skills/aws-light.svg";
  }
});

const myImg2 = document.getElementById("htmlid");
myButton.addEventListener("click", function() {
  if (myImg2.src.endsWith("/icons/skills/html-light.svg")) {
    myImg2.src = "/icons/skills/html-dark.svg";
  } else {
    myImg2.src = "/icons/skills/html-light.svg";
  }
});

const myImg3 = document.getElementById("cssid");
myButton.addEventListener("click", function() {
  if (myImg3.src.endsWith("/icons/skills/css-light.svg")) {
    myImg3.src = "/icons/skills/css-dark.svg";
  } else {
    myImg3.src = "/icons/skills/css-light.svg";
  }
});

const myImg4 = document.getElementById("githubid");
myButton.addEventListener("click", function() {
  if (myImg4.src.endsWith("/icons/social/github-light.svg")) {
    myImg4.src = "/icons/social/github-dark.svg";
  } else {
    myImg4.src = "/icons/social/github-light.svg";
  }
});
