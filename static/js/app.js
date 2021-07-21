//
// Project 2: JavaScript App
//

// Initial text in subtitle
document.getElementById("subtitle").textContent="Performance Analysis: 2016";

// Event handlers
d3.select("#select_year").on("change",runEnter);

// Initial function
function runInit() {
    // Prevent reloading
    d3.event.preventDefault();

    // Change value according to element
    document.getElementById("subtitle").textContent="Performance Analysis: 2016"
}

// Complete the event handler for button
function runEnter() {

  // Prevent reloading
  d3.event.preventDefault();

  // Check value on button
  var inputYear = d3.select("#select_year").property("value");
  console.log(inputYear);

  // Change value according to element
  if (inputYear === "2016"){
    document.getElementById("subtitle").textContent="Performance Analysis: 2016"
  }
  else if (inputYear === "2017"){
    document.getElementById("subtitle").textContent="Performance Analysis: 2017"
  }
  else if (inputYear === "2018"){
    document.getElementById("subtitle").textContent="Performance Analysis: 2018"
  }
  else {
    document.getElementById("subtitle").textContent="Performance Analysis: All Years"
  }
}


// Old code
d3.json('data/samples.json').then((data) => {
    var select = d3.select('#selDataset');
    console.log(data);
    select.selectAll("option")
        .data(data.names)
        .enter()
            .append("option")
            .attr("value", function (d){return d})
            .text(function(d){return d})
});

function optionChanged(value){
    console.log(value);
    var sample = '';
    
    d3.json('data/samples.json').then((data) => {
        data.samples.forEach(element => {            
            if(element.id == value){
               sample = element;                
            }
        });
        var otus_ids = sample.otu_ids;
        var sliced_ids = otus_ids.slice(0, 10);
        var otus_labels = sample.otu_labels;
        var sliced_labels = otus_labels.slice(0,10);
        var sample_values = sample.sample_values;
        var sv_sliced = sample_values.slice(0,10);
        // Trace1 for the Greek Data
        var trace1 = {
            x: sv_sliced.map(object => object),
            y: sliced_ids.map(object => 'OTN '+object),
            text: sliced_labels.map(object => object),
            name: "OTU",
            type: "bar",
            orientation: "h"
        };
        
        // data
        var data2 = [trace1];
        
        // Apply the group bar mode to the layout
        var layout = {
            title: "Top 10 operational taxonomic units (OTUs)",
            margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
            }
        };
        
        // Render the plot to the div tag with id "plot"
        Plotly.newPlot("bar", data2, layout);

        var trace1 = {
            x: sample.otu_ids.map(object => object),
            y: sample.sample_values.map(object => object),
            mode: 'markers',
            marker:{ 
                size: sample.sample_values,
                color: sample.otu_ids
            }
          };
          
          data2 = [trace1];
          
          layout = {
            title: 'Bacteria Cultures Per Sample',
            showlegend: false,
            height: 600,
            width: 1200
          };
          
          Plotly.newPlot('bubble', data2, layout);
    });

    d3.json('data/samples.json').then((data) => {
        data.metadata.forEach(element => {            
            if(element.id == value){
               sample = element;                
            }
        });
        var div = d3.select("#sample-metadata");
        div.html("");
        for (const [key, value] of Object.entries(sample)) {
            div.append('p').text(key+': ' +value+'\n');
        }
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: sample.wfreq,
              title: { text: "Belly Button Washing Frecuency" },
              type: "indicator",
              mode: "gauge+number",
              gauge: {
                axis: { range: [null, 9] },
                steps: [
                  { range: [0, 1], color: "#e5ffff" },
                  { range: [1, 2], color: "#c0ecf6" },
                  { range: [2, 3], color: "#94d8ec" },
                  { range: [3, 4], color: "#60c5e3" },
                  { range: [4, 5], color: "#35b1d3" },
                  { range: [5, 6], color: "#279dbe" },
                  { range: [6, 7], color: "#1789a9" },
                  { range: [7, 8], color: "#007594" },
                  { range: [8, 9], color: "#00769b" },
                ],
                threshold: {
                  line: { color: "#2112ad", width: 4 },
                  thickness: 0.75,
                  value: sample.wfreq
                }
              }
            }
          ];
          
          var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
          Plotly.newPlot('gauge', data, layout);
    });
    
}
