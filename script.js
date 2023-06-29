let str = "";

for (let i = 0; i < 6; i++) {
  str += `<div class="box"></div>`;
}
document.querySelector(".tarolo").innerHTML = str

let boxes = document.querySelectorAll(".box")
let colors = []

for(let box of boxes){
  //console.log(box);
  let color = createColor();
  colors.push(color)
  box.style.backgroundColor = color
}

//console.table(colors);

function createColor(){
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

let randIndex = Math.floor(Math.random() * 6)
document.querySelector('.color').innerHTML = colors[randIndex];

function check(event){
  let clickedColor = event.target.style.backgroundColor
  console.log(clickedColor, colors[randIndex]);

  if (clickedColor == colors[randIndex]){
    document.querySelector('.result').innerHTML = "👌";
  }else{
    document.querySelector('.result').innerHTML = "🙈";
  }
}