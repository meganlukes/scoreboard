/*let team1Count = 0
let team2Count = 0
function changeTeam1Score(event) {
  const clickedButton = event.target
  if (clickedButton.classList.contains('add')) {
    team1Count = team1Count + 1
  }
  if (clickedButton.classList.contains('subtract') && team1Count > 0) {
    team1Count = team1Count - 1
  }
  const score = document.querySelector('team1 h3')
  score.textContent = `${team1Count}`
}
*/
//Update Team 1 Name
function updateTeam1Name(evt) {
  const teamName = document.querySelector('.team1 h2')
  teamName.textContent = evt.target.value
}
//Update Team 2 Name
function updateTeam2Name(evt) {
  const teamName = document.querySelector('.team2 h2')
  teamName.textContent = evt.target.value
}

function main() {
  document
    .querySelectorAll('.team1 i')
    .addEventListener('click', changeTeam1Score)

  //team 1 name
  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeam1Name)
  //Team 2 name
  document
    .querySelector('.team2 input')
    .addEventListener('input', updateTeam2Name)
  document.querySelector('.team1 ')
}

document.addEventListener('DOMContentLoaded', main)
