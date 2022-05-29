//Grab divs with the class name 'match-height'
let getDivs = document.getElementsByClassName('match-height')

//Find out how my divs there are with the class 'match-height'
let arrayLength = getDivs.length
let heights = []

//Create a loop that iterates through the getDivs variable and pushes the heights of the divs into an empty array
for (let i = 0; i < arrayLength; i++) {
  heights.push(getDivs[i].offsetHeight)
}

//Find the largest of the divs
function getHighest() {
  return Math.max(...heights)
}

//Set a variable equal to the tallest div
let tallest = getHighest()

//Iterate through getDivs and set all their height style equal to the tallest variable
for (let i = 0; i < getDivs.length; i++) {
  getDivs[i].style.height = tallest + 'px'
}
