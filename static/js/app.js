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
  //console.log(inputYear);
  
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

// Create line charts
function linechart(inputYear) {
  // Change value according to element
  if (inputYear === "2016"){
    d3.json("flask-database/json-data/maindata2016.json").then((data)=> {
      var linedata = data;
      var allmonths = []
      for (var i = 0; i < linedata.length; ++i) {
        allmonths.push(linedata[i].month)
      }
      //console.log(allmonths)
      var months = allmonths.filter(onlyUnique).sort(function(a, b){return a-b})
      //console.log(months)
      var count = {};
      allmonths.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      //console.log(count);
      totalpayms = []
      months.forEach(function totalPays(month) {
        var priceArray = linedata.filter(function (el) {
          return el.month == month;
        })
        payments = []
        for (var i = 0; i < priceArray.length; ++i) {
          payments.push(priceArray[i].payment_value)
        }
        var totalPrice = payments.reduce((a, b) => a + b, 0)
        totalpayms.push(totalPrice)
      })
      //console.log(totalpayms)
      var traceline = {
        x: months,
        y: totalpayms,
        type: 'scatter'
      };
      var dataline = [traceline];
      var layoutline = {
        title: {text: "<b>Number of Sales Per Month</b>",
        y : .80
          },
        xaxis: { title: "Month", 
            automargin: true, },
        yaxis: { title: "Monthly Sales ($)"},
        margin: { l: 110, r: 10, t: 110, b: 50 }
      };
      Plotly.newPlot('scatter', dataline, layoutline);
    })
  }
  else if (inputYear === "2017"){
    d3.json("flask-database/json-data/maindata2017.json").then((data)=> {
      var linedata = data;
      var allmonths = []
      for (var i = 0; i < linedata.length; ++i) {
        allmonths.push(linedata[i].month)
      }
      //console.log(allmonths)
      var months = allmonths.filter(onlyUnique).sort(function(a, b){return a-b})
      console.log(months)
      var count = {};
      allmonths.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      //console.log(count);
      totalpayms = []
      months.forEach(function totalPays(month) {
        var priceArray = linedata.filter(function (el) {
          return el.month == month;
        })
        payments = []
        for (var i = 0; i < priceArray.length; ++i) {
          payments.push(priceArray[i].payment_value)
        }
        var totalPrice = payments.reduce((a, b) => a + b, 0)
        totalpayms.push(totalPrice)
      })
      //console.log(totalpayms)
      var traceline = {
        x: months,
        y: totalpayms,
        type: 'scatter'
      };
      var dataline = [traceline];
      var layoutline = {
        title: {text: "<b>Number of Sales Per Month</b>",
        y : .80
          },
        xaxis: { title: "Month", 
            automargin: true, },
        yaxis: { title: "Monthly Sales ($)"},
        margin: { l: 110, r: 10, t: 110, b: 50 }
      };
      Plotly.newPlot('scatter', dataline, layoutline);
    })
  }
  else if (inputYear === "2018"){
    d3.json("flask-database/json-data/maindata2018.json").then((data)=> {
      var linedata = data;
      var allmonths = []
      for (var i = 0; i < linedata.length; ++i) {
        allmonths.push(linedata[i].month)
      }
      //console.log(allmonths)
      var months = allmonths.filter(onlyUnique).sort(function(a, b){return a-b})
      //console.log(months)
      var count = {};
      allmonths.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      //console.log(count);
      totalpayms = []
      months.forEach(function totalPays(month) {
        var priceArray = linedata.filter(function (el) {
          return el.month == month;
        })
        payments = []
        for (var i = 0; i < priceArray.length; ++i) {
          payments.push(priceArray[i].payment_value)
        }
        var totalPrice = payments.reduce((a, b) => a + b, 0)
        totalpayms.push(totalPrice)
      })
      //console.log(totalpayms)
      var traceline = {
        x: months,
        y: totalpayms,
        type: 'scatter'
      };
      var dataline = [traceline];
      var layoutline = {
        title: {text: "<b>Number of Sales Per Month</b>",
        y : .80
          },
        xaxis: { title: "Month", 
            automargin: true, },
        yaxis: { title: "Monthly Sales ($)"},
        margin: { l: 110, r: 10, t: 110, b: 50 }
      };
      Plotly.newPlot('scatter', dataline, layoutline);
    })
  }
  else {
    d3.json("flask-database/json-data/maindata.json").then((data)=> {
      var linedata = data;
      var allmonths = []
      for (var i = 0; i < linedata.length; ++i) {
        allmonths.push(linedata[i].month)
      }
      //console.log(allmonths)
      var months = allmonths.filter(onlyUnique).sort(function(a, b){return a-b})
      //console.log(months)
      var count = {};
      allmonths.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      //console.log(count);
      totalpayms = []
      months.forEach(function totalPays(month) {
        var priceArray = linedata.filter(function (el) {
          return el.month == month;
        })
        payments = []
        for (var i = 0; i < priceArray.length; ++i) {
          payments.push(priceArray[i].payment_value)
        }
        var totalPrice = payments.reduce((a, b) => a + b, 0)
        totalpayms.push(totalPrice)
      })
      //console.log(totalpayms)
      var traceline = {
        x: months,
        y: totalpayms,
        type: 'scatter'
      };
      var dataline = [traceline];
      var layoutline = {
        title: {text: "<b>Number of Sales Per Month</b>",
        y : .80
          },
        xaxis: { title: "Month", 
            automargin: true, },
        yaxis: { title: "Monthly Sales ($)"},
        margin: { l: 110, r: 10, t: 110, b: 50 }
      };
      Plotly.newPlot('scatter', dataline, layoutline);
    })
  }
}

// Unique values function
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
