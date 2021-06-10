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



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Salty', 'Sweet', 'Sour', 'Bitter', 'Umami', 'Odor','Sound','MouthFeel','Visual Appeal'],
        datasets: [{
            label: 'Chimkin Taste Chart',
            data: [1, 2, 3, 4, 5],
            backgroundColor: ['red'],
            borderColor: ['black'],
            borderWidth: 2
        }]
    }
});

//Event listner
popeyes.addEventListener('click', function(){
  let yo = myChart.config.data.datasets[0].data;
  console.log(yo);
  for(let en in chartThis) {
    if(en==='Popeyes'){
      console.log('This from inside');
      
    }
    for(let jn in chartThis[en]) {
      if(en=== 'Popeyes' && jn==='Salty'){
        console.log('YEAH BOI');
        console.log(`obj.${jn} = ${chartThis[en][jn]}`);
        break;
      }
      
      break;
    }
  }
  //console.log(yo)
  //console.log(yo)
})
