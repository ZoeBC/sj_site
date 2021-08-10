var factList = [
  "Less than 20% of professionals in the field of computer science are women",
  "In computer science professions, women earn 94% of what men earn for the same job on average",
  "Only 18% of computer science degrees are earned by women",
  "In the '80s, over 35% of computer science majors were women, but that number had decreased to 18% today"
];


var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}


function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

