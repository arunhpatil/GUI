
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
