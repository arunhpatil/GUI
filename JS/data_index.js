
new Chart(document.getElementById("my-chart-6"), {
  type: "horizontalBar",
  data: {
    labels: ["Foo", "Bar", "some"],
    datasets: [
      { label: "bad", data: [{ x: 5 }, { x: 25 }, { x: 14 }], backgroundColor: "rgba(244, 143, 177, 0.6)" },
      { label: "better", data: [{ x: 15 }, { x: 10 }, { x: 25 }], backgroundColor: "rgba(255, 235, 59, 0.6)" },
      { label: "good", data: [{ x: 10 }, { x: 8 }, { x: 5 }], backgroundColor: "rgba(100, 181, 246, 0.6)" }
    ]
  },
  options: {
    plugins: {
      stacked100: { enable: true }
    }
  }
});

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: 'rgb(135,206,235)',
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      "responsive": true,
      "maintainAspectRatio": false,
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                // Change here
            	barPercentage: 0.1
            }]
        }
    }
});


var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        data: [65, 59, 75, 81, 56, 55, 40],
    }]
};

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                // Change here
            	barPercentage: 0.2
            }]
        }
    }
});

console.log(myChart);

