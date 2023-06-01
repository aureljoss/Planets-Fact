const description=document.getElementById('description');
const structure=document.getElementById('structure');
const geology=document.getElementById('geology');

showOverview=()=>{
    description.style.display="block";
    structure.style.display="none";
    geology.style.display="none";
}

showStructure=()=>{
    structure.style.display="block";
    description.style.display="none";
    geology.style.display="none";
}