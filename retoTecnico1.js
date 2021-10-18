//Elementos para el plano carteciano
let lineaX = document.getElementById('inLineaX');
var lineaY = document.getElementById('inLineaY');
let boton = document.getElementById('inBoton');
boton.addEventListener('click', renderCharts);
//Elementos para el plano carteciano
//Elementos para el grafico de barras
let datox1 = document.getElementById('x1');
let datox2 = document.getElementById('x2');
let datox3 = document.getElementById('x3');
let datox4 = document.getElementById('x4');
let datox5 = document.getElementById('x5');
let datoy1 = document.getElementById('y1');
let datoy2 = document.getElementById('y2');
let datoy3 = document.getElementById('y3');
let datoy4 = document.getElementById('y4');
let datoy5 = document.getElementById('y5');
let botonBarras = document.getElementById('inBarras');
botonBarras.addEventListener('click', renderCharts2);

//Elementos para el grafico de barras

//Funciones de renderizado y ejecucion del plano
function renderCharts() {
  const ctx = document.querySelector('#plano').getContext('2d');
  totalCasesChart(ctx);
}
function totalCasesChart(ctx) {
  var datoX = lineaX.value;
  var datoY = lineaY.value;
  new Chart(ctx, {
    type: 'scatter',
    data: {
      labels: ['-10', '9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [
        {
        data: [{
            x: -10,
            y: -10
          }],
          backgroundColor: 'white'
        },
        {
          data: [{
            x: 10,
            y: 10
          }],
          backgroundColor: 'white'
        },
        {
          data: [{
            x: 10,
            y: -10
          }],
          backgroundColor: 'white'
        },
        {
          data: [{
            x: -10,
            y: 10
          }],
          backgroundColor: 'white'
        },
        {
        data: [{
          x: datoX,
          y: datoY
        }],
          backgroundColor: 'red',
      }],
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Aqui ubica tu coordenada',
        fontSize: 30,
        padding: 30,
        fontColor: 'blue'
      },
      legend: {
        display: false,
      },
      scales: {
        y: {
          type: 'linear',
          position: 'bottom',
          ticks: {
            color: 'blue',
          }
        },
        y2: {
          type: 'linear',
          position: 'left',
          ticks: {
            color: 'red',
          },
          grid: {
            drawOnChartArea: false,
          }
        }
      }
    }
  })
}
//Funciones de renderizado y ejecucion del plano

//Aqui empieza la grafica de barras
function renderCharts2() {
  const ctx2 = document.querySelector('#barras').getContext('2d');
  graficaBarras(ctx2);
}

function graficaBarras(ctx2) {
  let valorx1 = datox1.value;
  let valorx2 = datox2.value;
  let valorx3 = datox3.value;
  let valorx4 = datox4.value;
  let valorx5 = datox5.value;
  let valory1 = datoy1.value;
  let valory2 = datoy2.value;
  let valory3 = datoy3.value;
  let valory4 = datoy4.value;
  let valory5 = datoy5.value;
  new Chart(ctx2, {
    type: 'bar',
    data: {
      /* labels: [0,2,4,6,8,10], */
      datasets: [
        {
          label: 'Tus primeros datos',
          data: [{
              x: valorx1,
              y: valory1
            }],
          backgroundColor: 'red',
          borderWidth: 2,
          borderColor: 'black'
        },
        {
          label: 'Tus segundos datos',
          data: [{
              x: valorx2,
              y: valory2
            }],
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'black'
        },
        {
          label: 'Tus terceros datos',
          data: [{
              x: valorx3,
              y: valory3
            }],
          backgroundColor: 'yellow',
          borderWidth: 2,
          borderColor: 'black'
        },
        {
          label: 'Tus cuartos datos',
          data: [{
              x: valorx4,
              y: valory4
            }],
          backgroundColor: 'green',
          borderWidth: 2,
          borderColor: 'black'
        },
        {
          label: 'Tus quintos datos',
          data: [{
              x: valorx5,
              y: valory5
            }],
          backgroundColor: 'pink',
          borderWidth: 2,
          borderColor: 'black'
        },
      ]
    },
    options: {
      hover: {
        animationDuration: 0
      },
      responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Tu grafico de Barras'
        },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Value'
          },
          min: 0,
          max: 100,
          ticks: {
            // forces step size to be 50 units
            stepSize: 1
          }
        }
      }
    }
  })
}
//Aqui termina la grafica de barras