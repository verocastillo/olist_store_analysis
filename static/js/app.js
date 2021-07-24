//
// Project 2: JavaScript App
//

// Initial text in subtitle
document.getElementById("subtitle").textContent="Performance Analysis: 2016";
// Initial charts
linechart(2016);
gaugechart(2016);

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
    gaugechart(inputYear);
    barchart(inputYear);
  }
  else if (inputYear === "2017"){
    document.getElementById("subtitle").textContent="Performance Analysis: 2017";
    linechart(inputYear);
    gaugechart(inputYear);
    barchart(inputYear);
  }
  else if (inputYear === "2018"){
    document.getElementById("subtitle").textContent="Performance Analysis: 2018";
    linechart(inputYear);
    gaugechart(inputYear);
    barchart(inputYear);
  }
  else {
    document.getElementById("subtitle").textContent="Performance Analysis: All Years";
    linechart(inputYear);
    gaugechart(inputYear);
    barchart(inputYear);
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

// Create gauge charts
function gaugechart(inputYear) {
  // Change value according to element
  if (inputYear === "2016"){
    d3.json("flask-database/json-data/maindata2016.json").then((data)=> {
      var gaugedata = data;
      var reviews = []
      for (var i = 0; i < gaugedata.length; ++i) {
        reviews.push(gaugedata[i].review_score)
      }
      //console.log(reviews)
      reviewsum = reviews.reduce((a, b) => a + b, 0)
      reviewnum = reviews.length
      avgreview = reviewsum/reviewnum
      var gaugedata = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: avgreview,
        title: { text: "<b>Average Order Review Score</b><br> 2016" },
        type: "indicator",
        mode: "gauge+number+delta",
        gauge: {
          axis: { range: [null, 5] },
          bar: { color: "royalblue" },
          steps: [
            { range: [null, 1], color: "lightsteelblue" },
            { range: [1, 2], color: "powderblue" },
            { range: [2, 3], color: "lightblue" },
            { range: [3, 4], color: "skyblue" },
            { range: [4, 5], color: "lightskyblue" }
          ],
          threshold: {
            line: { color: "blue", width: 4 },
            thickness: 0.75,
            value: 490
            }
        }
      }
      ];
      var gaugelayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', gaugedata, gaugelayout);
    })
  }
  else if (inputYear === "2017"){
    d3.json("flask-database/json-data/maindata2017.json").then((data)=> {
      var gaugedata = data;
      var reviews = []
      for (var i = 0; i < gaugedata.length; ++i) {
        reviews.push(gaugedata[i].review_score)
      }
      //console.log(reviews)
      reviewsum = reviews.reduce((a, b) => a + b, 0)
      reviewnum = reviews.length
      avgreview = reviewsum/reviewnum
      var gaugedata = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: avgreview,
        title: { text: "<b>Average Order Review Score</b><br> 2017" },
        type: "indicator",
        mode: "gauge+number+delta",
        gauge: {
          axis: { range: [null, 5] },
          bar: { color: "royalblue" },
          steps: [
            { range: [null, 1], color: "lightsteelblue" },
            { range: [1, 2], color: "powderblue" },
            { range: [2, 3], color: "lightblue" },
            { range: [3, 4], color: "skyblue" },
            { range: [4, 5], color: "lightskyblue" }
          ],
          threshold: {
            line: { color: "blue", width: 4 },
            thickness: 0.75,
            value: 490
            }
        }
      }
      ];
      var gaugelayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', gaugedata, gaugelayout);
    })
  }
  else if (inputYear === "2018"){
    d3.json("flask-database/json-data/maindata2018.json").then((data)=> {
      var gaugedata = data;
      var reviews = []
      for (var i = 0; i < gaugedata.length; ++i) {
        reviews.push(gaugedata[i].review_score)
      }
      //console.log(reviews)
      reviewsum = reviews.reduce((a, b) => a + b, 0)
      reviewnum = reviews.length
      avgreview = reviewsum/reviewnum
      var gaugedata = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: avgreview,
        title: { text: "<b>Average Order Review Score</b><br> 2018" },
        type: "indicator",
        mode: "gauge+number+delta",
        gauge: {
          axis: { range: [null, 5] },
          bar: { color: "royalblue" },
          steps: [
            { range: [null, 1], color: "lightsteelblue" },
            { range: [1, 2], color: "powderblue" },
            { range: [2, 3], color: "lightblue" },
            { range: [3, 4], color: "skyblue" },
            { range: [4, 5], color: "lightskyblue" }
          ],
          threshold: {
            line: { color: "blue", width: 4 },
            thickness: 0.75,
            value: 490
            }
        }
      }
      ];
      var gaugelayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', gaugedata, gaugelayout);
    })
  }
  else {
    d3.json("flask-database/json-data/maindata.json").then((data)=> {
      var gaugedata = data;
      var reviews = []
      for (var i = 0; i < gaugedata.length; ++i) {
        reviews.push(gaugedata[i].review_score)
      }
      //console.log(reviews)
      reviewsum = reviews.reduce((a, b) => a + b, 0)
      reviewnum = reviews.length
      avgreview = reviewsum/reviewnum
      var gaugedata = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: avgreview,
        title: { text: "<b>Average Order Review Score</b><br> All Years" },
        type: "indicator",
        mode: "gauge+number+delta",
        gauge: {
          axis: { range: [null, 5] },
          bar: { color: "royalblue" },
          steps: [
            { range: [null, 1], color: "lightsteelblue" },
            { range: [1, 2], color: "powderblue" },
            { range: [2, 3], color: "lightblue" },
            { range: [3, 4], color: "skyblue" },
            { range: [4, 5], color: "lightskyblue" }
          ],
          threshold: {
            line: { color: "blue", width: 4 },
            thickness: 0.75,
            value: 490
            }
        }
      }
      ];
      var gaugelayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', gaugedata, gaugelayout);
    })
  }
}

// Create bar charts
function barchart(inputYear) {
  // Change value according to element
  if (inputYear === "2016"){
    d3.json("flask-database/json-data/top5data2016.json").then((data)=> {
      bardata = data
      productcats = []
      for (var i = 0; i < bardata.length; ++i) {
        productcats.push(bardata[i].product_category_name)
      }
      var count = {};
      productcats.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      //console.log(count)
      var items = Object.keys(count).map(function(key) {
      return [key, count[key]];
      });
      items.sort(function(first, second) {
      return second[1] - first[1];
      });
      var top5categs = items.slice(0, 5);
      //console.log(top5categs.length)
      categnames = []
      categfreq = []
      for (var i = 0; i < top5categs.length; ++i) {
        categnames.push(top5categs[i][0])
        categfreq.push(top5categs[i][1])
      }
      //console.log(categnames)
      //console.log(categfreq)
      var tracebar = {
        x: categnames,
        y: categfreq,
        type:"bar",
        orientation: "v",
      };
      var bardata = [tracebar];
      var layoutbar = {
        title: {text: "<b>Top 5 Product<br>Categories 2016</b>",
        y : .80
          },
        xaxis: { title: "Category Name", 
            automargin: true, },
        yaxis: { title: "Order Frequency"},
        margin: { l: 110, r: 10, t: 110, b: 50 }
      };
      Plotly.newPlot('bar', bardata, layoutbar);
    })
  }
  else if (inputYear === "2017"){
    d3.json("flask-database/json-data/top5data2017.json").then((data)=> {
      bardata = data
      productcats = []
      for (var i = 0; i < bardata.length; ++i) {
        productcats.push(bardata[i].product_category_name)
      }
      var count = {};
      productcats.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      //console.log(count)
      var items = Object.keys(count).map(function(key) {
      return [key, count[key]];
      });
      items.sort(function(first, second) {
      return second[1] - first[1];
      });
      var top5categs = items.slice(0, 5);
      //console.log(top5categs.length)
      categnames = []
      categfreq = []
      for (var i = 0; i < top5categs.length; ++i) {
        categnames.push(top5categs[i][0])
        categfreq.push(top5categs[i][1])
      }
      //console.log(categnames)
      //console.log(categfreq)
      var tracebar = {
        x: categnames,
        y: categfreq,
        type:"bar",
        orientation: "v",
      };
      var bardata = [tracebar];
      var layoutbar = {
        title: {text: "<b>Top 5 Product<br>Categories 2017</b>"
          },
        xaxis: { title: "Category Name", 
            automargin: true, },
        yaxis: { title: "Order Frequency"},
        margin: { l: 110, r: 10, t: 110, b: 50 }
      };
      Plotly.newPlot('bar', bardata, layoutbar);
      })
  }
  else if (inputYear === "2018"){
    d3.json("flask-database/json-data/top5data2018.json").then((data)=> {
      bardata = data
      productcats = []
      for (var i = 0; i < bardata.length; ++i) {
        productcats.push(bardata[i].product_category_name)
      }
      var count = {};
      productcats.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      //console.log(count)
      var items = Object.keys(count).map(function(key) {
      return [key, count[key]];
      });
      items.sort(function(first, second) {
      return second[1] - first[1];
      });
      var top5categs = items.slice(0, 5);
      //console.log(top5categs.length)
      categnames = []
      categfreq = []
      for (var i = 0; i < top5categs.length; ++i) {
        categnames.push(top5categs[i][0])
        categfreq.push(top5categs[i][1])
      }
      //console.log(categnames)
      //console.log(categfreq)
      var tracebar = {
        x: categnames,
        y: categfreq,
        type:"bar",
        orientation: "v",
      };
      var bardata = [tracebar];
      var layoutbar = {
        title: {text: "<b>Top 5 Product<br>Categories 2018</b>",
        y : .80
          },
        xaxis: { title: "Category Name", 
            automargin: true, },
        yaxis: { title: "Order Frequency"},
        margin: { l: 110, r: 10, t: 110, b: 50 }
      };
      Plotly.newPlot('bar', bardata, layoutbar);
      })
  }
  else {
    d3.json("flask-database/json-data/top5data.json").then((data)=> {
      bardata = data
      productcats = []
      for (var i = 0; i < bardata.length; ++i) {
        productcats.push(bardata[i].product_category_name)
      }
      var count = {};
      productcats.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      //console.log(count)
      var items = Object.keys(count).map(function(key) {
      return [key, count[key]];
      });
      items.sort(function(first, second) {
      return second[1] - first[1];
      });
      var top5categs = items.slice(0, 5);
      //console.log(top5categs.length)
      categnames = []
      categfreq = []
      for (var i = 0; i < top5categs.length; ++i) {
        categnames.push(top5categs[i][0])
        categfreq.push(top5categs[i][1])
      }
      //console.log(categnames)
      //console.log(categfreq)
      var tracebar = {
        x: categnames,
        y: categfreq,
        type:"bar",
        orientation: "v",
      };
      var bardata = [tracebar];
      var layoutbar = {
        title: {text: "<b>Top 5 Product<br>Categories All Years</b>",
        y : .80
          },
        xaxis: { title: "Category Name", 
            automargin: true, },
        yaxis: { title: "Order Frequency"},
        margin: { l: 110, r: 10, t: 110, b: 50 }
      };
      Plotly.newPlot('bar', bardata, layoutbar);
    })
  }
}

// Unique values function
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
