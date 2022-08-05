const imgEl = document.getElementById('charImgPro').getAttribute('src');
console.log(imgEl);
let ctx = document.getElementById('myChart').getContext('2d');

if (imgEl === '/images/pika.png') {
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Attack', 'Strength', 'Defense'],
      datasets: [
        {
          label: '# of Votes',
          data: [40, 30, 30],
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)'
          ],
          borderColor: 'white',

          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
} else if (imgEl === '/images/link.png') {
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Attack', 'Strength', 'Defense'],
      datasets: [
        {
          // label: '# of Votes',
          data: [30, 30, 40],
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)'
          ],
          borderColor: 'white',

          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
} else if (imgEl === '/images/mario.png') {
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Attack', 'Strength', 'Defense'],
      datasets: [
        {
          label: '# of Votes',
          data: [33, 33, 33],
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)'
          ],
          borderColor: 'white',

          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
