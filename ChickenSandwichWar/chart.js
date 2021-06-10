
let chartThis = {
  "Popeyes":{
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
  "ChickFila":{
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
  "McDonalds":{
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
  "Wendys":{
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

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['MouthFeel', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Chimkin Taste Chart',
            data: [1, 2, 3, 4, 5],
            backgroundColor: [
                'red',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'blue',
                'red',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    }
});
