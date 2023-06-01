const description = document.getElementById("overview");
const structure = document.getElementById("structure");
const geology = document.getElementById("geology");
const overview = document.getElementById("overview-img");
const internal = document.getElementById("internal-structure-img");
const surface = document.getElementById("surface-geology-img");
const showOverview = document.getElementById("showOverview");
const showStructure = document.getElementById("showStructure");
const showGeology = document.getElementById("showGeology");

showOverview.addEventListener("click", () => {
  description.style.display = "block";
  structure.style.display = "none";
  geology.style.display = "none";
  overview.style.display = "block";
  internal.style.display = "none";
  surface.style.display = "none";
});

showStructure.addEventListener("click", () => {
  structure.style.display = "block";
  description.style.display = "none";
  geology.style.display = "none";
  overview.style.display = "none";
  internal.style.display = "block";
  surface.style.display = "none";
});

showGeology.addEventListener("click", () => {
  structure.style.display = "none";
  description.style.display = "none";
  geology.style.display = "block";
  overview.style.display = "none";
  internal.style.display = "block";
  surface.style.display = "none";
});
