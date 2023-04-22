const autocolors = window['chartjs-plugin-autocolors'];

var labels = [
  ['Type 1', 'Type 2'],
  ['Type 1', 'Type 2', 'Type 3'],
  ['Type 1', 'Type 2', 'Type 3', 'Type 4']
]

var datas = [
  [14, 26],
  [61, 72, 89],
  [13, 34, 99, 12],
]

var i = 0;

window.addEventListener("load", async () => {
  const addChartButton = document.getElementById('addchart');
  addChartButton.onclick = async () => {
    i++;
    const dashboardsContainer = document.getElementById('dashboards');
    let chartDiv = document.createElement("div");
    chartDiv.className = "chartDiv draggable";

    let closebutton = document.createElement('span');
    closebutton.id = 'close';
    closebutton.onclick = function () {
      this.parentNode.remove();
      return false;
    };
    closebutton.innerHTML = 'X';
    chartDiv.appendChild(closebutton);

    let movebutton = document.createElement('span');
    movebutton.id = 'move';
    movebutton.className = 'draggable-handle';
    movebutton.innerHTML = 'M';
    chartDiv.appendChild(movebutton);

    let chartCanvas = document.createElement("canvas");
    chartCanvas.className = "chartcanvas";
    chartDiv.appendChild(chartCanvas);
    dashboardsContainer.appendChild(chartDiv);
    let newChart = new Chart(
      chartCanvas,
      {
        type: 'pie',
        data: {
          labels: labels[i % 3],
          datasets: [
            {
              label: 'Mock Data',
              data: datas[i % 3],
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
});

var swapFlexbox = function () {
  const containers = document.getElementById('dashboards');

  if (containers.length === 0) {
    return false;
  }

  var swappable = new Swappable.default(containers, {
    draggable: ".draggable",
    mirror: {
      appendTo: containers,
      constrainDimensions: true
    }
  });

  return swappable;
}

async function showToast(message) {
  Swal.fire({
    title: message,
    timer: 5000,
    toast: true,
    position: 'top',
    showConfirmButton: false
  })
}

