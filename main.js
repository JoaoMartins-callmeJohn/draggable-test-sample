const autocolors = window['chartjs-plugin-autocolors'];

window.addEventListener("load", async () => {
  const addChartButton = document.getElementById('addchart');
  addChartButton.onclick = async () => {
    const dashboardsContainer = document.getElementById('dashboards');
    let chartDiv = document.createElement("div");
    chartDiv.className = "chartDiv";
    let chartCanvas = document.createElement("canvas");
    chartCanvas.className = "chartcanvas";
    chartDiv.appendChild(chartCanvas);
    dashboardsContainer.appendChild(chartDiv);
    let newChart = new Chart(
      chartCanvas,
      {
        type: 'pie',
        data: {
          labels: ['Type 1','Type 2'],
          datasets: [
            {
              label: 'Doors by type',
              data: [13, 21],
              //backgroundColor:,
              hoverOffset: 4
            }
          ],
        },
        plugins: [
          autocolors
        ],
        options: {
          plugins: {
            autocolors: {
              mode: 'label'
            }
          }
        }
      }
    );
  };
})

async function showToast(message) {
  Swal.fire({
    title: message,
    timer: 5000,
    toast: true,
    position: 'top',
    showConfirmButton: false
  })
}

