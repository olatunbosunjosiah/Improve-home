var options = {
series: [60,40],
plotOptions: {
pie: {
expandOnClick: false,
donut: {
labels: {
show: true,                       
total: {
show: true,
showAlways: true,
label: '',                           
formatter: function (w) {
return w.globals.seriesTotals.reduce((a) => {
return `${a}%`;
})
}
}
}                   
}
}
},        
colors: ['#1ED6CB', '#194A6C'],
labels:["Top sales","Down sales"],
chart: {
type: 'donut',
fontFamily:'Helvetica, Arial, sans-serif',
},
dataLabels: {
enabled: false,
},
legend: {
show: false,
fontSize: "32px"
},
responsive: [{
breakpoint: 480,
options: {
chart: {
width: 200
}
}
}]
};

var chart = new ApexCharts(document.querySelector("#chart-amount"), options);
chart.render();