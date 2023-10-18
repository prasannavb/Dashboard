const Alert = (name) => {
    alert(`Informed to ${name} `)
}

const check = () => {
    var name = document.querySelector('input').value.toLowerCase();
    if (name.length === 0) {
        alert("Kindly choose the file!");
    }
    else if (name.includes("johnwick")) {
        document.getElementById('report').innerHTML = "Violent";
        document.getElementById("report").classList.add("alert-danger")
        document.getElementById('Ambulance').style.display = "block";
        document.getElementById('Fire').style.display = "block";
        document.getElementById('Police').style.display = "block";
    }
    else {
        document.getElementById("report").classList.remove("alert-danger");
        document.getElementById("report").classList.add("alert-success")
        document.getElementById('report').innerHTML = "Non-Violent";
        document.getElementById('Ambulance').style.display = "none";
        document.getElementById('Fire').style.display = "none";
        document.getElementById('Police').style.display = "none";
    }
}
const Show = () => {
    document.getElementById("stats").style.display = "block";
    document.getElementsByClassName("card")[0].style.display = "none";
    document.getElementById("stats1").style.backgroundColor = "#343444";
    document.getElementById("report1").style.backgroundColor = "#13131f";
}

const Hide = () => {
    document.getElementById("stats").style.display = "none";
    document.getElementsByClassName("card")[0].style.display = "block";
    document.getElementById("stats1").style.backgroundColor = "#13131f";
    document.getElementById("report1").style.backgroundColor = "#343444";
    document.getElementById("report1").style.color = "white";

}

var trace1 = 
{
    x: [0, 1, 2, 3, 4, 5],
    y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
    type: 'scatter'
};
var trace2 = 
{
    x: [0, 1, 2, 3, 4, 5],
    y: [1, 0.5, 0.7, -1.2, 0.3, 0.4],
    type: 'bar'
};

var layout = 
{
    height: 500,
    width: 450,
}
var data = [trace1, trace2];
Plotly.newPlot('myDiv', data,layout);

var data = [{
    type: "pie",
    values: [2, 3, 4, 4],
    labels: ["Robbery", "Murder", "Riot", "Harassment"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
}]

var layout = {
    height: 500,
    width: 450,
    margin: { "t": 0, "b": 0, "l": 0, "r": 0 },
    showlegend: false
}

Plotly.newPlot('myDiv2', data, layout)