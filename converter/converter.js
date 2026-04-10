const input = document.getElementById("convert-input");
const btn1 = document.querySelector(".convert-btn");
const lab = document.getElementById("lab");
const btn2 = document.getElementById("convert");
const menu = document.getElementById('menu-valut');
let f=1;
btn1.addEventListener('click', function () {
  menu.classList.toggle('active');
});

document.getElementById("dollar").addEventListener('click', function () {
  f=1;
});
document.getElementById("euro").addEventListener('click', function () {
  f=2;
});

document.getElementById("pounds").addEventListener('click', function () {
  f=3;
});


btn2.addEventListener('click', function () {
  if (input.value === "" ) {
    input.style.color = "red";

    mesagebox
  } else {
    input.style.color = "black";
    lab.textContent=input.value*conv(f);
  }
});

function conv(currency){
  switch(currency) {
  case 1: rate = 77.08; break;
  case 2: rate = 90.47; break;
  case 3: rate = 103.88; break;
  default: rate = 1;
}
return rate
}