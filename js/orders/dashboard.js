function getRandomData() {
  let data = [];
  for (let i = 0; i < 12; i++) {
    data.push(Math.floor(Math.random() * 30) + 1);
  }
  return data;
}

const config = {
  type: 'line',
  data: {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    datasets: [
      {
        label: 'Action',
        data: getRandomData(),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Aventure',
        data: getRandomData(),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Stratégie',
        data: getRandomData(),
        borderColor: 'rgb(255, 147, 50)',
        backgroundColor: 'rgb(255, 147, 50)',
      },
      {
        label: 'Simulation',
        data: getRandomData(),
        borderColor: 'rgb(82, 255, 50)',
        backgroundColor: 'rgb(82, 255, 50)',
      },
      {
        label: 'RPG',
        data: getRandomData(),
        borderColor: 'rgb(51, 250, 250)',
        backgroundColor: 'rgb(51, 250, 250)',
      },
      {
        label: 'Sport',
        data: getRandomData(),
        borderColor: 'rgb(251, 51, 253)',
        backgroundColor: 'rgb(215, 51, 253)',
      },
    ]
  },
  options: {
    plugins: {
      legend: true,
      tooltip: true,
      filler: true,
      title: {
        display: true,
        text: 'Ventes de jeux par catégorie par mois'
      }
    },
    scales: {
      x: {
        type: 'category',
        position: 'bottom'
      }
    }
  },
  plugins: [{
    afterDraw(chart) {
      const ctx = chart.ctx;
      ctx.save();
      ctx.strokeRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  }]
};

// Options du graphique
const options = {
  spriteText: true,
};

// Création du graphique
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, config);

