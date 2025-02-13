const description = document.getElementById("overview");
const structure = document.getElementById("structure");
const geology = document.getElementById("geology");
const overview = document.getElementById("overview-img");
const internal = document.getElementById("internal-structure-img");
const surface = document.getElementById("surface-geology-img");
const showOverview = document.getElementById("showOverview");
const showStructure = document.getElementById("showStructure");
const showGeology = document.getElementById("showGeology");
const planet = document.getElementById("planet");
const navigation=document.getElementById("navigation");

navigation.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.style.color = 'red';
    event.stopPropagation();
  }
}, true);
navigation.addEventListener('mouseout', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.style.removeProperty('color');
  }
}, true);


showOverview.addEventListener("click", () => {
  description.style.display = "block";
  structure.style.display = "none";
  geology.style.display = "none";
  overview.style.display = "block";
  internal.style.display = "none";
  surface.style.display = "none";
  if (planet.textContent === "Mercury") {
    showOverview.style.backgroundColor = "rgb(65, 158, 187)";
  } else if (planet.textContent === "Venus") {
    showOverview.style.backgroundColor = "rgb(237, 162, 73)";
  } else if (planet.textContent === "Earth") {
    showOverview.style.backgroundColor = "#6D2ED5";
  } else if (planet.textContent === "Mars") {
    showOverview.style.backgroundColor = "#D14C32";
  } else if (planet.textContent === "Jupiter") {
    showOverview.style.backgroundColor = "#D83A34";
  } else if (planet.textContent === "Saturn") {
    showOverview.style.backgroundColor = "#D14C32";
  } else if (planet.textContent === "Uranus") {
    showOverview.style.backgroundColor = "#1EC1A2";
  } else {
    showOverview.style.backgroundColor = "#2D68F0";
  }
  showGeology.style.backgroundColor = "";
  showStructure.style.backgroundColor = "";
});

showStructure.addEventListener("click", () => {
  structure.style.display = "block";
  description.style.display = "none";
  geology.style.display = "none";
  overview.style.display = "none";
  internal.style.display = "block";
  surface.style.display = "none";
  if (planet.textContent === "Mercury") {
    showStructure.style.backgroundColor = "rgb(65, 158, 187)";
  } else if (planet.textContent === "Venus") {
    showStructure.style.backgroundColor = "rgb(237, 162, 73)";
  } else if (planet.textContent === "Earth") {
    showStructure.style.backgroundColor = "#6D2ED5";
  } else if (planet.textContent === "Mars") {
    showStructure.style.backgroundColor = "#D14C32";
  } else if (planet.textContent === "Jupiter") {
    showStructure.style.backgroundColor = "#D83A34";
  } else if (planet.textContent === "Saturn") {
    showStructure.style.backgroundColor = "#D14C32";
  } else if (planet.textContent === "Uranus") {
    showStructure.style.backgroundColor = "#1EC1A2";
  } else {
    showStructure.style.backgroundColor = "#2D68F0";
  }
  showOverview.style.backgroundColor = "";
  showGeology.style.backgroundColor = "";
});

showGeology.addEventListener("click", () => {
  structure.style.display = "none";
  description.style.display = "none";
  geology.style.display = "block";
  overview.style.display = "block";
  internal.style.display = "none";
  surface.style.display = "block";
  if (planet.textContent === "Mercury") {
    showGeology.style.backgroundColor = "rgb(65, 158, 187)";
  } else if (planet.textContent === "Venus") {
    showGeology.style.backgroundColor = "rgb(237, 162, 73)";
  } else if (planet.textContent === "Earth") {
    showGeology.style.backgroundColor = "#6D2ED5";
  } else if (planet.textContent === "Mars") {
    showGeology.style.backgroundColor = "#D14C32";
  } else if (planet.textContent === "Jupiter") {
    showGeology.style.backgroundColor = "#D83A34";
  } else if (planet.textContent === "Saturn") {
    showGeology.style.backgroundColor = "#D14C32";
  } else if (planet.textContent === "Uranus") {
    showGeology.style.backgroundColor = "#1EC1A2";
  } else {
    showGeology.style.backgroundColor = "#2D68F0";
  }
  showStructure.style.backgroundColor = "";
  showOverview.style.backgroundColor = "";
});
