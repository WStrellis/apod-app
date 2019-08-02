function makeStars(){

  let stars = [];
  let numStars = 350;
  let widthWindow = window.innerWidth;
  let heightWindow = window.innerHeight;

  /* 
  The stars must be arranged in a square larger than the 
  container or else when the stars rotate it will create large gaps in 
  the stars. This positions the stars in a square shaped area which 
  is centered on the containing div.
   */
  let longestSide = (widthWindow > heightWindow)? widthWindow : heightWindow; 
  let rotatableArea = Math.ceil(longestSide / 0.7);
  let minDistanceFromCenter = -(rotatableArea - longestSide);


  for (let i = 0; i < numStars; i++) {


    // used to set width and height
    let starDimensions = getRandomBetween(1,3);

    // create new span
    let newStar = document.createElement('span'); 
    // add classes to span
    newStar.className = ` 
      star 
      opacity${getRandomBetween(1, 3)} 
    `

    // add styles to span
    newStar.style = `
    animation-duration: ${getRandomBetween(2, 5)}s;
    animation-delay:  ${getRandomBetween(0,9)}s; 
    left: ${getRandomBetween(minDistanceFromCenter, rotatableArea)}px; 
    top: ${getRandomBetween( minDistanceFromCenter, rotatableArea)}px;
    width: ${starDimensions}px;
    height: ${starDimensions}px;
    `
    // push to stars array
    stars.push(newStar);
  }
  return stars;
} // end makeStars

function getRandomBetween(min, max) {
  // return a number between min and max
  return Math.round(Math.random() * (max - min)) + min;
} //end getRandomBetween

function renderStars(){
  let starNodes = makeStars();
  let constellation = document.querySelector(".constellation");
  // remove any existing stars
  constellation.innerHTML = "";
  // create stars and add to constellation
  starNodes.forEach((star)=>{
    constellation.appendChild(star);
  })
} // end renderStars

window.onload = function(){
  renderStars();
  this.addEventListener('resize', ()=>{
        renderStars();
      },false)
}
