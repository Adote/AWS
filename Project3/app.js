<canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["3000 BLK N CAPITOL ST NW S/B", "S CAPITOL RAMP S/B BEFORE I ST SW", "16TH ST N/B @ OAK ST NW", "NY AVE W/B @ 4TH ST NW", "PENNSYLVANIA AVE W/B @ MINNESOTA SE", "4200 BLK S DAKOTA AVE NE NW/B", "M ST W/B @ WHITEHURST FRWY NW", "3RD ST S/B @ NEW YORK AVE NW", "14TH ST N/B @ K ST NW", "E CAPITOL ST W/B @ BENNING RD NE"],
        datasets: [{
            label: '# of Votes',
            data: [52400, 28450, 19000, 18600, 12600, 8725, 6200, 6000, 4200, 2900],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(205, 150, 70, 0.2)',
                'rgba(178, 278, 90, 0.2)',
                'rgba(68, 154, 78, 0.2)',
                'rgba(190, 88, 125, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(205, 150, 70, 1)',
                'rgba(178, 278, 90, 1)',
                'rgba(68, 154, 78, 1)',
                'rgba(190, 88, 125, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>
