//
// Project 2: JavaScript App
//

// Initial text in subtitle
document.getElementById("subtitle").textContent="Performance Analysis: 2016";

// Event handlers
d3.select("#select_year").on("change",runEnter);

// Complete the event handler for button
function runEnter() {

  // Prevent reloading
  d3.event.preventDefault();

  // Check value on button
  var inputYear = d3.select("#select_year").property("value");
  console.log(inputYear);
  
  // Change value according to element
  if (inputYear === "2016"){
    document.getElementById("subtitle").textContent="Performance Analysis: 2016";
    linechart(inputYear);
  }
  else if (inputYear === "2017"){
    document.getElementById("subtitle").textContent="Performance Analysis: 2017";
    linechart(inputYear);
  }
  else if (inputYear === "2018"){
    document.getElementById("subtitle").textContent="Performance Analysis: 2018";
    linechart(inputYear);
  }
  else {
    document.getElementById("subtitle").textContent="Performance Analysis: All Years";
    linechart(inputYear);
  }
}

// Create Bar Charts
function linechart(inputYear) {
  // Change value according to element
  if (inputYear === "2016"){
    d3.json("flask-database/json-data/maindata2016.json").then((data)=> {
      var linedata = data;
      var allmonths = []
      for (var i = 0; i < linedata.length; ++i) {
        allmonths.push(linedata[i].month)
      }
      console.log(allmonths)
      var months = allmonths.filter(onlyUnique).sort(function(a, b){return a-b})
      console.log(months)
      var count = {};
      allmonths.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      console.log(count);
      monthsales = []
      for (var i = 10; i < months.length + 1; ++i) {
        monthsales.push(count[i])
      }
      console.log(monthsales);
    })
  }
  else if (inputYear === "2017"){
    d3.json("flask-database/json-data/maindata2017.json").then((data)=> {
      var linedata = data;
      var allmonths = []
      for (var i = 0; i < linedata.length; ++i) {
        allmonths.push(linedata[i].month)
      }
      console.log(allmonths)
      var months = allmonths.filter(onlyUnique).sort(function(a, b){return a-b})
      console.log(months)
      var count = {};
      allmonths.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      console.log(count);
      monthsales = []
      for (var i = 1; i < months.length + 1; ++i) {
        monthsales.push(count[i])
      }
      console.log(monthsales);
    })
  }
  else if (inputYear === "2018"){
    d3.json("flask-database/json-data/maindata2018.json").then((data)=> {
      var linedata = data;
      var allmonths = []
      for (var i = 0; i < linedata.length; ++i) {
        allmonths.push(linedata[i].month)
      }
      console.log(allmonths)
      var months = allmonths.filter(onlyUnique).sort(function(a, b){return a-b})
      console.log(months)
      var count = {};
      allmonths.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      console.log(count);
      monthsales = []
      for (var i = 1; i < months.length + 1; ++i) {
        monthsales.push(count[i])
      }
      console.log(monthsales);
    })
  }
  else {
    d3.json("flask-database/json-data/maindata.json").then((data)=> {
      var linedata = data;
      var allmonths = []
      for (var i = 0; i < linedata.length; ++i) {
        allmonths.push(linedata[i].month)
      }
      console.log(allmonths)
      var months = allmonths.filter(onlyUnique).sort(function(a, b){return a-b})
      console.log(months)
      var count = {};
      allmonths.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      console.log(count);
      monthsales = []
      for (var i = 1; i < months.length + 1; ++i) {
        monthsales.push(count[i])
      }
      console.log(monthsales);
    })
  }
}

// Unique values function
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}