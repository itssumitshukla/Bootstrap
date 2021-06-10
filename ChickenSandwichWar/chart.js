//Data
let chartThis = {
  "Popeyes":{
     "Salty":"5",
     "Sweet":"1",
     "Sour":"1",
     "Bitter":"1",
     "Umami":"1",
     "Odor":"1",
     "Sound":"1",
     "MouthFeel":"1",
     "Visual Appeal":"1"
  },
  "ChickFila":{
     "Salty":"3",
     "Sweet":"1",
     "Sour":"1",
     "Bitter":"1",
     "Umami":"1",
     "Odor":"1",
     "Sound":"1",
     "MouthFeel":"1",
     "Visual Appeal":"1"
  },
  "McDonalds":{
     "Salty":"4",
     "Sweet":"1",
     "Sour":"1",
     "Bitter":"1",
     "Umami":"1",
     "Odor":"1",
     "Sound":"1",
     "MouthFeel":"1",
     "Visual Appeal":"1"
  },
  "Wendys":{
     "Salty":"3",
     "Sweet":"1",
     "Sour":"1",
     "Bitter":"1",
     "Umami":"1",
     "Odor":"1",
     "Sound":"1",
     "MouthFeel":"1",
     "Visual Appeal":"1"
  },
  "KFC":{
     "Salty":"1",
     "Sweet":"1",
     "Sour":"1",
     "Bitter":"1",
     "Umami":"1",
     "Odor":"1",
     "Sound":"1",
     "MouthFeel":"1",
     "Visual Appeal":"1"
  },
  "BurgerKing":{
     "Salty":"1",
     "Sweet":"1",
     "Sour":"1",
     "Bitter":"1",
     "Umami":"1",
     "Odor":"1",
     "Sound":"1",
     "MouthFeel":"1",
     "Visual Appeal":"1"
  }
};

//Initalize
let popeyes = document.querySelector('#btnpopeyes');
let chickfila = document.querySelector('#btnchickfila');
let mcdonalds = document.querySelector('#btnmcdonalds');
let wendys = document.querySelector('#btnwendys');
let kfc = document.querySelector('#btnkfc');
let burgerking = document.querySelector('#btnburgerking');

let pop = [1,5,1,4,2,1,4,5,3];
let chkfla = [5,5,2,5,5,5,3,5,5];
let mcd = [2,1,1,3,5,2,2,1,1];
let wend = [5,5,2,5,5,5,3,5,5];
let kcfc = [5,5,2,5,5,5,3,5,5];
let bk = [5,5,2,5,5,5,3,5,5];


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Salty', 'Sweet', 'Sour', 'Bitter', 'Umami', 'Odor','Sound','MouthFeel','Visual Appeal'],
        datasets: [{
            label: 'Chimkin Taste Chart',
            data: [],
            backgroundColor: ['red'],
            borderColor: ['black'],
            borderWidth: 2
        }]
    }
});

//Event listner
popeyes.addEventListener('click', function(){
  myChart.config.data.datasets[0].data = pop;
  myChart.update();
});

chickfila.addEventListener('click', function(){
  myChart.config.data.datasets[0].data = chkfla;
  myChart.update();
});

mcdonalds.addEventListener('click', function(){
  myChart.config.data.datasets[0].data = mcd;
  myChart.update();
});
wendys.addEventListener('click', function(){
  myChart.config.data.datasets[0].data = pop;
  myChart.update();
});
kfc.addEventListener('click', function(){
  myChart.config.data.datasets[0].data = chkfla;
  myChart.update();
});
burgerking.addEventListener('click', function(){
  myChart.config.data.datasets[0].data = mcd;
  myChart.update();
});