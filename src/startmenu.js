import { CharacterProfile } from './characterProfile.js';
let playerProfile = new CharacterProfile(0,0,0,0,"");
let remainingAttribs = 5;

window.document.getElementById("start").addEventListener("click", startCharCreator);
window.document.getElementById("strength").addEventListener("click", addStrength);
window.document.getElementById("speed").addEventListener("click", addSpeed);
window.document.getElementById("intelligence").addEventListener("click", addIntelligence);
window.document.getElementById("boxerInfo").addEventListener("submit", submitProfile);

function startCharCreator() {
  window.document.getElementById("start").setAttribute("class", "hidden");
  window.document.getElementById("boxerInfo").removeAttribute("class");
  window.document.getElementById("creatorPointsLeft").innerHTML = remainingAttribs;
}

function addStrength() {
  event.preventDefault();
  playerProfile.addAttribStrength();
  remainingAttribs = remainingAttribs - 1;
  if (remainingAttribs === 0) {
    noMoreAttributes();
  }
  window.document.getElementById("creatorPointsLeft").innerHTML = remainingAttribs;
  window.document.getElementById("strengthDisplay").innerHTML = playerProfile.strength;
}

function addSpeed() {
  event.preventDefault();
  playerProfile.addAttribSpeed();
  remainingAttribs = remainingAttribs - 1;
  if (remainingAttribs === 0) {
    noMoreAttributes();
  }
  window.document.getElementById("creatorPointsLeft").innerHTML = remainingAttribs;
  window.document.getElementById("speedDisplay").innerHTML = playerProfile.speed;
}

function addIntelligence() {
  event.preventDefault();
  playerProfile.addAttribIntelligence();
  remainingAttribs = remainingAttribs - 1;
  if (remainingAttribs === 0) {
    noMoreAttributes();
  }
  window.document.getElementById("creatorPointsLeft").innerHTML = remainingAttribs;
  window.document.getElementById("intelligenceDisplay").innerHTML = playerProfile.intelligence;
}

function noMoreAttributes() {
  window.document.getElementById("strength").setAttribute("class", "hidden");
  window.document.getElementById("speed").setAttribute("class", "hidden");
  window.document.getElementById("intelligence").setAttribute("class", "hidden");
  window.document.getElementById("strengthDisplay").setAttribute("class", "hidden");
  window.document.getElementById("speedDisplay").setAttribute("class", "hidden");
  window.document.getElementById("intelligenceDisplay").setAttribute("class", "hidden");
  window.document.getElementById("submitProfile").removeAttribute("class");
}

function submitProfile(event) {
  event.preventDefault();
  const playerName = window.document.getElementById("name").value;
  playerProfile.setName(playerName);
  playerProfile.nextRound();
}