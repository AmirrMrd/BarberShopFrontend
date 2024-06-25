
//Chart 1
var optionsChart1 = {
	yaxis: {
		opposite: true,
		labels: {
			offsetX: -10,
		}
	  },
	chart: {
		type: 'area',
		toolbar: {
			show: false
		},
		animations: {
			enabled: false,
		}
	},
	series: [{
		name: 'موبایل',
		data: [30, 4, 45, 5, 49, 6, 7],
	}, {
		name: 'وب اپلیکیشن',
		data: [4, 5, 65, 7, 89, 9, 95],
	}],
	fill: {
		type: "gradient",
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.7,
			opacityTo: 0.9,
			stops: [0, 90, 100]
		}
	},
	xaxis: {
			categories: [1391, 1392, 1393, 1394, 1395, 1396, 1397]
	}
}

var chartDemo1 = new ApexCharts(document.querySelectorAll("#charts-demo-1")[0], optionsChart1);
chartDemo1.render();


var optionsChart2 = {
	yaxis: {
		opposite: true,
		labels: {
			offsetX: -30,
		}
	  },
	series: [{
		name: 'دسکتاپ',
		data: [44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000]
	}, {
		name: 'موبایل',
		data: [76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000, 94000]
	}, {
		name: 'تبلت',
		data: [35000, 41000, 36000, 26000, 45000, 48000, 52000, 53000, 41000]
	}],
	chart: {
		type: 'bar',
		height: 250,
		toolbar: {
			show: false
		},
		animations: {
			enabled: false,
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '55%',
			endingShape: 'rounded'
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	xaxis: {
		categories: ["فرو", "ارد", "خرد", "تیر", "مرد", "شهر", "مهر", "آبا", "آذر", "دی", "بهمـ", "اسفـ"],
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		y: {
			formatter: function(val) {
				return val + " تومان "
			}
		}
	}
};

var chartDemo2 = new ApexCharts(document.querySelectorAll("#charts-demo-2")[0], optionsChart2);
chartDemo2.render();


var optionsChart3 = {
	legend: {
	  position: 'bottom'
	},
	series: [64, 55, 35],
	chart: {
		width: '100%',
		type: 'pie',
		toolbar: {
			show: false
		},
		animations: {
			enabled: false,
		},

	},
	labels: ['موبایل', 'دسکتاب', 'لبتاب'],
};

var chartDemo3 = new ApexCharts(document.querySelectorAll("#charts-demo-3")[0], optionsChart3);
chartDemo3.render();


