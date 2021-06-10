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

let ttest = [3,5,1,3,5,2,1,5,3];
let rrr = [1,5,1,4,2,1,4,5,3];


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Salty', 'Sweet', 'Sour', 'Bitter', 'Umami', 'Odor','Sound','MouthFeel','Visual Appeal'],
        datasets: [{
            label: 'Chimkin Taste Chart',
            data: ttest,
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
  yo.push(rrr)
  // for(let en in chartThis) {
  //   if(en==='Popeyes'){
  //     console.log('This from inside');
      
  //   }
  //   for(let jn in chartThis[en]) {
  //     if(en=== 'Popeyes' && jn==='Salty'){
  //       console.log('YEAH BOI');
  //       console.log(`obj.${jn} = ${chartThis[en][jn]}`);
  //       break;
  //     }
      
  //     break;
  //   }
  //}
  //console.log(yo)
  //console.log(yo)
})
