(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;
    let myHeight = window.innerHeight;
    // your size calculation code here
    document.getElementById("screen").innerHTML = myWidth + "x" + myHeight;
  };
})();

let yyo = 'mcDonalds';

//
let modal = document.querySelectorAll('.card');
let myArray = Array.from(modal)
console.log(typeof(myArray))

myArray.forEach(e=>{
  console.log(e)
  e.addEventListener('click',(tt)=>{
    let inn = tt.target.alt;
    if(inn == yyo){
      console.log('BRUH THIS WORK')
    }
  })
})