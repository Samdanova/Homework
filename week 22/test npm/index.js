const moment = require('moment');
let now = moment();
document.getElementById("dataNow").innerHTML = `Today ${now.format('dddd, MMMM DD YYYY')}`;

//первая диаграмма
const chart = require('chart.js');

let massJSON = [{
    "month":"Январь",
    "value":"80"
},{
    "month":"Февраль",
    "value":"50"
},{
    "month":"Март",
    "value":"60"
},{
    "month":"Апрель",
    "value":"60"
},{
    "month":"Май",
    "value":"70"
},{
    "month":"Июнь",
    "value":"100"
},{
    "month":"Июль",
    "value":"90"
},{
    "month":"Август",
    "value":"70"
},{
    "month":"Сентябрь",
    "value":"40"
},{
    "month":"Октябрь",
    "value":"30"
},{
    "month":"Ноябрь",
    "value":"55"
},{
    "month":"Декабрь",
    "value":"85"
}];

let labels = [];
    let dataValue = [];
    for(let i = 0; i < massJSON.length; i++){
        labels[i] = massJSON[i].month;
        dataValue[i] = massJSON[i].value;
    }

    const data = {
        labels: labels,
        datasets: [{
            label: 'Мое настроение за каждый месяц по 100-бальной шкале',
            backgroundColor: 'rgba(0, 99, 132, 0.6)',
            borderColor: 'rgba(0, 99, 132, 1)',
            color: 'rgb(255, 99, 132)',
            data: dataValue,
        }]
    };

const myChart = new Chart(
    document.getElementById('myChart'),{
    type: 'line',
    data: data,
    options: {}
    }
);

Chart.defaults.font.size = 16;

//вторая диаграмма

let PriorityData = {
  label: 'Мои жизненные приоритеты',
  data: [10, 9, 9, 7.5, 5, 5.5, 4, 3],
  backgroundColor: [
    'rgba(0, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
    'rgba(240, 99, 132, 0.6)'
  ],
  borderColor: [
    'rgba(0, 99, 132, 1)',
    'rgba(30, 99, 132, 1)',
    'rgba(60, 99, 132, 1)',
    'rgba(90, 99, 132, 1)',
    'rgba(120, 99, 132, 1)',
    'rgba(150, 99, 132, 1)',
    'rgba(180, 99, 132, 1)',
    'rgba(210, 99, 132, 1)',
    'rgba(240, 99, 132, 1)'
  ],
  borderWidth: 2,
  hoverBorderWidth: 0
};


let barChart = new Chart(document.getElementById("goriz-Chart"), {
  type: 'bar',
  data: {
    labels: ["Семья", "Друзья", "Карьера", "Спорт", "Отдых", "Танцы", "Книги", "Сериалы"],
    datasets: [PriorityData],
  },
  options: {}
});

const chalk = require ('chalk');
console.log(chalk.blue('Hello world!'));