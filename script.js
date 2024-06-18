// Mobile Navigation Menu
// Adding our variables
const openNavMenuBtn = document.querySelector("#open-nav-menu-btn");
const closeNavMenuBtn = document.getElementById("close-nav-menu-btn");
const contentNavMenu = document.querySelector(".content-nav-menu");

//writing the event listner and function for the open icon
openNavMenuBtn.addEventListener("click", () => {
  contentNavMenu.classList.toggle("content-nav-menu");
  openNavMenuBtn.classList.toggle("open-nav-menu-btn");
});
//writing the event listner and function for the close icon

closeNavMenuBtn.addEventListener("click", () => {
  openNavMenuBtn.classList.toggle("open-nav-menu-btn");
  contentNavMenu.classList.toggle("content-nav-menu");
  contentNavMenu.style.listStyleType = "none";
});
//About drop down
// Inserting our variables
const programmesMenu = document.querySelector(".programmesHeadings");

const instructorsMenu = document.querySelector(".instuctorsHeadings");

const partnersMenu = document.querySelector(".partnersHeadings");

const programmeContent = document.querySelector(".programmes-list");
const instructorContent = document.querySelector(".instuctors-list");
const partnersContent = document.querySelector(".partners-list");

const btnProgramme = document.querySelector("#btn-programme");
const btnInstructor = document.querySelector("#btn-instructor");

// console.log(programmeContent);
// console.log(instructorContent);
// console.log(partnersContent);

// Using function, if statement and event listner

// Programmes Interaction
function displayProgrammes() {
  if (programmeContent.classList.contains("programmesHeadings")) {
    programmeContent.classList.remove("programmesHeadings");
    programmesMenu.style.backgroundColor = "inherit";
    programmesMenu.style.color = "inherit";
  } else {
    programmeContent.classList.add("programmesHeadings");
    programmesMenu.style.backgroundColor = "red";
    programmesMenu.style.color = "white";
  }
}

programmesMenu.addEventListener("click", displayProgrammes);

/// Using Toggle, function and event listner for drop down

// Instructor Interaction
instructorsMenu.addEventListener("mouseover", () => {
  instructorContent.classList.toggle("instuctors-list");
  instructorsMenu.style.backgroundColor = "green";
});

// Partner Interaction
function displayPartners() {
  if (partnersContent.classList.contains("partnersHeadings")) {
    partnersContent.classList.remove("partnersHeadings");
    partnersMenu.style.backgroundColor = "inherit";
    partnersMenu.style.color = "inherit";
  } else {
    partnersContent.classList.add("partnersHeadings");
    partnersMenu.style.backgroundColor = "blue";
    partnersMenu.style.color = "white";
  }
}

partnersMenu.addEventListener("click", displayPartners);
